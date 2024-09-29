import { auth } from "@/auth";
import { Session as AuthSession } from "@auth/core/types";

interface UserInfo {
  name?: string | null;
  email?: string | null;
}

export async function GET() {
  const session: AuthSession | null = await auth();
  console.log("Session:", session);

  if (!session || !session.user) {
    return Response.json({ authenticated: false, user: null });
  }

  const userInfo: UserInfo = {
    name: session.user.name ?? null,
    email: session.user.email ?? null,
  };

  return Response.json({
    authenticated: true,
    user: userInfo,
  });
}