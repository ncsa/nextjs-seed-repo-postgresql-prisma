/**
 * @jest-environment node
 */

import { GET, type HealthMessageResponse } from "../route";
import type { NextResponse } from "next/server";

describe("Health Check API Route", () => {
  it("should return a health message", async () => {
    const response: NextResponse = await GET();
    const json = (await response.json()) as HealthMessageResponse;

    expect(response.status).toBe(200);
    expect(json).toEqual({ status: "ok" });
  });
});
