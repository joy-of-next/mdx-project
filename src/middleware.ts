import { navigationConfig } from "@/shared/navigation";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (["/learn", "/learn/"].includes(url.pathname)) {
    url.pathname = navigationConfig[0].items[0].path;
    return NextResponse.redirect(url, { status: 307 });
  }
  return NextResponse.next();
}
