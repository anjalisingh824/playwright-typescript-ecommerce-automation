
import { test, expect } from '@playwright/test';

test.describe('API Testing - JSONPlaceholder', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('GET - Verify a user can be retrieved', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/1`);

    expect(response.status()).toBe(200);

    const user = await response.json();

    expect(user.id).toBe(1);
    expect(user.name).toBeTruthy();
    expect(user.email).toContain('@');
  });

  test('GET - Verify a post response', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);

    expect(response.status()).toBe(200);

    const post = await response.json();

    expect(post.userId).toBe(1);
    expect(post.id).toBe(1);
    expect(post.title).toBeTruthy();
    expect(post.body).toBeTruthy();
  });

  test('GET - Verify a non-existent resource', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/9999`);

    expect(response.status()).toBe(404);
  });
});