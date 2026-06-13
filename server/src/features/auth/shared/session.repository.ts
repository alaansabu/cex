import { getDB } from "../../../config/connectdb.js";
import { CreateSessionInput } from "./auth.types.js";
import { sessions } from "./auth.model.js";

export const createSession = async (input: CreateSessionInput): Promise<string> => {
    const db = await getDB();

    const [insertedSession] = await db.insert(sessions)
        .values({ userId: input.userId, sessionEnd: input.expiredAt })
        .returning();

    return insertedSession.sessionId;
};