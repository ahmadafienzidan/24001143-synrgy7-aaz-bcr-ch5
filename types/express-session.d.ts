import session from "express-session";

declare module "express-session" {
  interface SessionData {
    user: { [key: string]: any };
  }
}

declare global {
  namespace Express {
    interface Request {
      session: session.Session & Partial<session.SessionData>;
    }
  }
}
