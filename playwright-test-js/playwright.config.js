const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  testMatch: '**/*.spec.js',
  fullyParallel: true,
  retries: 0,
  workers: 1,
  timeout: 60000,
  reporter: 'html',
  use: {
    trace: 'on',
    screenshot: 'on',
    video: 'on'
  },
  projects: [
    {
      name: 'Chrome:latest:Windows 10@lambdatest',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});