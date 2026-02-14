import { test, expect, APIRequestContext } from '@playwright/test';

test.describe('@api Postman Echo - Authentication Methods', () => {
  const baseURL = 'https://postman-echo.com';
  let apiContext: APIRequestContext;

  test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
      ignoreHTTPSErrors: true,
    });
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });

  test('Basic Authentication - Username and Password', async () => {
    const username = 'postman';
    const password = 'password';

    const credentials = Buffer.from(`${username}:${password}`).toString('base64');

    const response = await apiContext.get(`${baseURL}/basic-auth`, {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });

    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log('Basic Auth Response:', data);

    expect(data.authenticated).toBe(true);
  });

  test('Bearer Token Authentication', async () => {
    const token = 'my-secret-token-12345';

    const response = await apiContext.get(`${baseURL}/headers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log('Bearer Token Response:', data);

    expect(data.headers.authorization).toBe(`Bearer ${token}`);
  });

  test('Digest Authentication', async () => {
    const response = await apiContext.get(`${baseURL}/digest-auth`, {
      headers: {
        Authorization: 'Digest username="postman", password="password"',
      },
      failOnStatusCode: false,
    });

    console.log('Digest Auth Status:', response.status());
  });

  test('Custom Header Authentication', async () => {
    const response = await apiContext.get(`${baseURL}/headers`, {
      headers: {
        'X-API-Key': 'my-custom-api-key-12345',
        'X-Custom-Header': 'custom-value',
      },
    });

    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log('Custom Header Response:', data);

    expect(data.headers['x-api-key']).toBe('my-custom-api-key-12345');
  });

  test('POST with authentication', async () => {
    const credentials = Buffer.from('user:password').toString('base64');

    const response = await apiContext.post(`${baseURL}/post`, {
      data: { key: 'value' },
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });

    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log('POST Response:', data);

    expect(data.data).toEqual({ key: 'value' });
  });

  test('GET with query parameters and assertions', async () => {
    const response = await apiContext.get(`${baseURL}/get`, {
      params: {
        foo: 'bar',
        num: '123',
      },
    });

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.args.foo).toBe('bar');
    expect(data.args.num).toBe('123');
  });

  test('POST JSON body and custom header - validate response', async () => {
    const payload = { name: 'alice', age: 30 };

    const response = await apiContext.post(`${baseURL}/post`, {
      data: payload,
      headers: {
        'Content-Type': 'application/json',
        'X-Test': 'true',
      },
    });

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.json.name).toBe('alice');
    expect(data.headers['x-test']).toBe('true');
  });

  test('PUT with params and body - validate echoed values', async () => {
    const response = await apiContext.put(`${baseURL}/put`, {
      params: { id: '42' },
      data: { active: true },
      headers: { 'Content-Type': 'application/json' },
    });

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.args.id).toBe('42');
    expect(data.json.active).toBe(true);
  });

  test('Unauthorized Basic Auth returns 401', async () => {
    const response = await apiContext.get(`${baseURL}/basic-auth`, {
      failOnStatusCode: false,
    });

    expect(response.status()).toBe(401);
  });
});
