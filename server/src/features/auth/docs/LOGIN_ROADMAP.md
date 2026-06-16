# Login Feature: Production-Readiness Roadmap

This document outlines the remaining tasks to bring the `loginwithpass` functionality to a production-ready state, ordered by priority.

---

## 🟥 Phase 1: Critical Security & Logic (High Priority)
*Immediate fixes required to prevent security vulnerabilities and incorrect authentication.*

- [ ] **Fix `verifyPassword` Await Bug**  
  - **File:** `server/src/features/auth/loginwithpass/login.services.ts`
  - **Task:** Add `await` to the `verifyPassword` call. Currently, it returns a Promise (truthy), allowing any password to work.
- [ ] **Implement User Status Validation**  
  - **File:** `server/src/features/auth/loginwithpass/login.services.ts`
  - **Task:** Check `user.status`. If the status is not `Active` (e.g., 'Banned' or 'Pending'), block the login.
- [ ] **Enforce Input Validation Middleware**  
  - **File:** `server/src/features/auth/loginwithpass/login.routes.ts`
  - **Task:** Create a reusable Zod middleware wrapper and apply `inputvalidation` schema to the login route.

---

## 🟧 Phase 2: Infrastructure & Connectivity (Medium Priority)
*Connecting the features to the server and enabling cross-origin communication.*

- [ ] **Global Middleware Setup**  
  - **File:** `server/src/server.ts`
  - **Task:** Install and configure:
    - `cookie-parser`: To read/set session cookies.
    - `cors`: To allow requests from the `frontend-cex` origin.
    - `helmet`: For essential security headers.
- [ ] **Route Mounting**  
  - **File:** `server/src/server.ts`
  - **Task:** Import `authrouter` and mount it under a versioned path (e.g., `/api/v1/auth`).

---

## 🟨 Phase 3: Resilience & Hardening (Standard Practice)
*Protecting against common attacks and improving the user experience.*

- [ ] **Brute-Force Protection (Rate Limiting)**  
  - **File:** `server/src/features/auth/loginwithpass/login.routes.ts`
  - **Task:** Add `express-rate-limit` to the login route to limit attempts per IP.
- [ ] **Login Audit Trail**  
  - **File:** `server/src/features/auth/loginwithpass/login.services.ts`
  - **Task:** Update the `lastlogin` timestamp in the database upon successful authentication.
- [ ] **Session Security Hardening**  
  - **File:** `server/src/features/auth/shared/session.repository.ts`
  - **Task:** Ensure the session object includes metadata like `User-Agent` and `IP Address` for session hijacking detection.

---

## 🟩 Phase 4: Observability & Cleanup (Optimization)
*Polishing the code for long-term maintenance.*

- [ ] **Standardized Error Handling**  
  - **File:** `server/src/features/auth/loginwithpass/login.handler.ts`
  - **Task:** Ensure client error messages are generic ("Invalid credentials") while internal logs are detailed.
- [ ] **Type Safety Audit**  
  - **Task:** Use `z.infer` to synchronize TypeScript types with Zod schemas across the services and handlers.
