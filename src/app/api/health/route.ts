import { NextResponse } from "next/server";

export interface HealthMessageResponse {
  status: string;
}

export async function GET(): Promise<NextResponse<HealthMessageResponse>> {
  return NextResponse.json({ status: "ok" });
}
