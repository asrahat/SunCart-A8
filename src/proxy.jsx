import { NextResponse } from "next/server";
import dns from "node:dns";
import { auth } from "./lib/auth";
import { headers } from "next/headers";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return NextResponse.next();
  }

  const redirectPath = request.nextUrl.pathname;

  return NextResponse.redirect(new URL(`/login?redirect=${redirectPath}`, request.url));
}
export const config = {
  matcher: ["/products/:id",'/profile'],
};
