import { test } from '@playwright/test';
import { ApiHelper } from '../utils/ApiHelper';

// 1. CREATE - POST request
test('Create a new post using POST API', async ({ request }) => {

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'Learning Playwright',
                body: 'Practising API automation using TypeScript',
                userId: 1
            }
        }
    );

    await ApiHelper.verifyStatus(response, 201);

    await ApiHelper.verifyJsonField(
        response,
        'title',
        'Learning Playwright'
    );
});

// 2. READ - GET request
test('Retrieve an existing post using GET API', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    await ApiHelper.verifyStatus(response, 200);

    await ApiHelper.verifyJsonField(response, 'id', 1);

    await ApiHelper.verifyJsonField(response, 'userId', 1);
});

// 3. UPDATE - PUT request
test('Update an existing post using PUT API', async ({ request }) => {

    const response = await request.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                id: 1,
                title: 'Updated Playwright Title',
                body: 'Updated content using PUT request',
                userId: 1
            }
        }
    );

    await ApiHelper.verifyStatus(response, 200);

    await ApiHelper.verifyJsonField(
        response,
        'title',
        'Updated Playwright Title'
    );
});

// 4. DELETE - DELETE request
test('Delete an existing post using DELETE API', async ({ request }) => {

    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    await ApiHelper.verifyStatus(response, 200);
});