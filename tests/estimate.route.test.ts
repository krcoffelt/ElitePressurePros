import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

const sendEstimateEmailMock = vi.hoisted(() => vi.fn());

vi.mock("@/lib/email/sendEstimate", () => {
  return {
    sendEstimateEmail: sendEstimateEmailMock
  };
});

let POST: (request: Request) => Promise<Response>;

describe("POST /api/estimate", () => {
  beforeAll(async () => {
    const route = await import("@/app/api/estimate/route");
    POST = route.POST;
  });

  beforeEach(() => {
    sendEstimateEmailMock.mockReset();
  });

  it("returns validation errors for invalid payload", async () => {
    const request = new Request("http://localhost/api/estimate", {
      method: "POST",
      body: JSON.stringify({ name: "x" }),
      headers: { "Content-Type": "application/json" }
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.ok).toBe(false);
    expect(data.fieldErrors).toBeTruthy();
  });

  it("silently accepts honeypot submissions", async () => {
    const request = new Request("http://localhost/api/estimate", {
      method: "POST",
      body: JSON.stringify({
        name: "Test User",
        phone: "(816) 555-0123",
        address: "123 Main St",
        serviceType: "House Wash",
        details: "Need house washing for two-story home.",
        website: "spam.example"
      }),
      headers: { "Content-Type": "application/json" }
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.ok).toBe(true);
    expect(sendEstimateEmailMock).not.toHaveBeenCalled();
  });

  it("sends email and returns leadId for valid requests", async () => {
    sendEstimateEmailMock.mockResolvedValue({ messageId: "msg_123" });

    const request = new Request("http://localhost/api/estimate", {
      method: "POST",
      body: JSON.stringify({
        name: "Jamie Doe",
        phone: "(816) 555-0123",
        address: "123 Main St",
        serviceType: "Driveway",
        details: "Need driveway cleaning this week.",
        website: ""
      }),
      headers: { "Content-Type": "application/json" }
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.ok).toBe(true);
    expect(data.leadId).toBe("msg_123");
    expect(sendEstimateEmailMock).toHaveBeenCalledTimes(1);
  });
});
