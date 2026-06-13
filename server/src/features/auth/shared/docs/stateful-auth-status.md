# Stateful Auth Status — Assessment & Next Steps

This document summaries the current state of stateful authentication in the server and gives a prioritized list of next steps to complete a secure, working implementation.

## What exists today
- Session persistence model: a `sessions` table and repository to create session rows. See [session.repository.ts](server/src/features/auth/shared/session.repository.ts#L1).
- User repo: `findbyemail` exists to fetch users by email. See [auth.repository.ts](server/src/features/auth/shared/auth.repository.ts#L1).
- Password utilities: `hashPassword` and `verifyPassword` implemented in [passwordHash.utils.ts](server/src/features/auth/shared/passwordHash.utils.ts#L1).
- Login service: `loginwithpass` creates a DB session and returns a `sessionId` and user info. See [login.services.ts](server/src/features/auth/loginwithpass/login.services.ts#L1).
- Redis connection helper exists at [connectredis.ts](server/src/config/connectredis.ts#L1) and `.env` contains `REDIS_URL`.
- Dependencies installed include `express-session` and `redis` (in `package.json`).

## What's missing / incomplete
- No HTTP handler wiring: `login.handler.ts` is empty; routes are not mounted. See [login.routes.ts](server/src/features/auth/loginwithpass/login.routes.ts#L1).
- No cookie or session cookie issuance: the `login` flow returns `sessionId` but does not set an httpOnly cookie.
- No session middleware: there is no middleware that reads a cookie/sessionId, validates it against the `sessions` table (or cache), and attaches the session/user to `req`.
- No logout/invalidate implementation or session expiration enforcement in middleware.
- Redis is connected but not used as a session store (no express-session store integration or custom cache layer).
- Potential bug: `verifyPassword` returns a Promise but the call in `login.services.ts` is not awaited (logic bug).

## Immediate fixes (high priority)
1. Fix `verifyPassword` usage: `await verifyPassword(...)` in [login.services.ts](server/src/features/auth/loginwithpass/login.services.ts#L1).
2. Implement `login.handler` to accept credentials, call the service, and set a secure `httpOnly` cookie with the `sessionId`.
3. Add a `logout` handler that deletes or marks the session row as ended and clears the cookie.

## Recommended design and next steps (ordered)
1. Decide session storage strategy
   - Option A (simple): store sessions in the DB (`sessions` table) and cache session lookups in Redis for performance.
   - Option B (common): use `express-session` with a Redis-backed session store (connect-redis). This handles cookie/session lifecycle for you.
2. Implement session issuance
   - In the login handler set a cookie: secure, `httpOnly`, `SameSite`, `expires` matching `sessionEnd`.
   - Prefer rotating session ids on privilege events and set a reasonable expiry (e.g., 24h), consider refresh flows.
3. Implement session validation middleware
   - Middleware reads the cookie (or `Authorization` header if chosen), looks up session (Redis cache → DB fallback), checks expiry, and attaches `req.session`/`req.user`.
   - Reject or redirect unauthorized requests with 401.
4. Implement logout and session revocation endpoint
   - Mark session as ended (set `sessionEnd`) and clear cookie.
5. Protect routes
   - Use the middleware to protect any authenticated endpoints.
6. Optional: session cleanup job
   - Periodic job to remove expired sessions from DB, or rely on DB TTL/archival.

## Security considerations
- Always set cookie flags: `httpOnly`, `secure` (in prod), `SameSite=Lax` or `Strict` depending on UX.
- Use TLS in production; do not send cookies over plain HTTP.
- Use strong password hashing (bcrypt with adequate rounds; tune salt rounds based on your environment).
- Consider CSRF protection if you use cookies for auth (double-submit token or CSRF middleware).
- Limit session lifetime and support manual revocation (logout, admin revoke).

## File pointers (where to implement)
- Login service: [login.services.ts](server/src/features/auth/loginwithpass/login.services.ts#L1)
- Login handler: [login.handler.ts](server/src/features/auth/loginwithpass/login.handler.ts#L1)
- Routes: [login.routes.ts](server/src/features/auth/loginwithpass/login.routes.ts#L1)
- Session repo/model: [session.repository.ts](server/src/features/auth/shared/session.repository.ts#L1) and [auth.model.ts](server/src/features/auth/shared/auth.model.ts#L1)
- Redis config: [connectredis.ts](server/src/config/connectredis.ts#L1)
- Server entry (connects Redis): [server.ts](server/src/server.ts#L1)

---
If you want, I can now: (A) draft the handler + middleware plan with exact API signatures and cookie format (no code), or (B) implement small fixes (like the missing `await`) and create a handler scaffold. Which do you prefer?
