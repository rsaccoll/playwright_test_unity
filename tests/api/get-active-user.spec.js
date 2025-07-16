import { test, expect, request } from '@playwright/test';

test('GET active user and assert status', async () => {
  const apiContext = await request.newContext();

  // 1. Get list of users
  const listRes = await apiContext.get('https://gorest.co.in/public/v1/users');
  expect(listRes.status()).toBe(200);

  const users = (await listRes.json()).data;

  // 2. Find first active user
  const activeUser = users.find(u => u.status === 'active');
  expect(activeUser).toBeTruthy();

  // 3. Get user details
  console.log('Active user id:', activeUser.id);
  const userRes = await apiContext.get(`https://gorest.co.in/public/v1/users/${activeUser.id}`);
  const userData = (await userRes.json()).data;

  // 4. Assertions
  expect(userRes.status()).toBe(200);
  expect(userData.status).toBe('active');
});
