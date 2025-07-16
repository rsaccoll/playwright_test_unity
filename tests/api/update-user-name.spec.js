import { test, expect, request } from '@playwright/test';

const TOKEN = '55d6636b25b84832f383665a17f72117ee2b5e655a78ba968912c9a37d1c050f';
const NEW_NAME = 'QA Updated';

test('PATCH user name and validate update', async () => {
  const apiContext = await request.newContext({
    baseURL: 'https://gorest.co.in/public/v1',
    extraHTTPHeaders: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
    const random = Math.floor(Math.random() * 100000);
    const email = `jana.waters${random}@hotmail.us`;

  // 1. Get list of users
  const listRes = await apiContext.get('https://gorest.co.in/public/v1/users');
  expect(listRes.status()).toBe(200);

  const users = (await listRes.json()).data;
  const user = users[0];
  console.log("User do Patch: " + user.id);

  // 2. Update name
  const patchRes = await apiContext.patch(`/users/${user.id}`, {
    data: {
      name: NEW_NAME,
      email: email,
      status: 'active'
    },
  });

    const updated = (await patchRes.json()).data;

  // 3. Assertions
  expect(patchRes.status()).toBe(200);
  expect(updated.name).toBe(NEW_NAME);
});
