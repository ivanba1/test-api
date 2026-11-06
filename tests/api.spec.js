import { test, expect } from '@playwright/test';

test('проверка GET запроса к JSONPlaceholder', async ({ request }) => {
const encodedUrl = 'aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzE=';
const url = Buffer.from(encodedUrl, 'base64').toString('utf-8');

const response = await request.get(url);

expect(response.status()).toBe(200);

const body = await response.json();
expect(body.id).toBe(1);
});