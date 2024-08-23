import { test, expect } from '@playwright/test';
const { chromium } = require("playwright");
const { email, password }=require("../user");

test('test', async ({ page }) => {
    

  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password);
  await page.getByTestId('login-submit-btn').click();

  await expect(page.locator("[class='src-components-pages-Profile-Programs--title--Kw5NH']")).toContainText("Моё обучение")

});

test('test negativ', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email);
  await page.getByTestId('login-submit-btn').click();
  
  await expect(page.locator("[class='Input_root__M_AQe Input_size-m__tXQ9L Input_fluid__rohKv Input_error__rCjnj']")).toContainText("Обязательное поле")
});