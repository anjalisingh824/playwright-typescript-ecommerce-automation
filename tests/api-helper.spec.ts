
import { test } from '@playwright/test';
import { ApiHelper } from '../utils/ApiHelper';

test.describe('Reusable API validations', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('Verify user API status and ID', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/1`);

    await ApiHelper.verifyStatus(response, 200);
    await ApiHelper.verifyJsonField(response, 'id', 1);
  });

  test('Verify post API status and title', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);

    await ApiHelper.verifyStatus(response, 200);
    await ApiHelper.verifyJsonField(
      response,
      'title',
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    );
  });
});
