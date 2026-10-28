import { APIResponse, expect } from '@playwright/test';

export class ApiHelper {
  static async verifyStatus(
    response: APIResponse,
    expectedStatus: number
  ): Promise<void> {
    expect(response.status()).toBe(expectedStatus);
  }

  static async verifyJsonField(
    response: APIResponse,
    field: string,
    expectedValue: string | number
  ): Promise<void> {
    const body = await response.json();

    expect(body[field]).toBe(expectedValue);
  }
}