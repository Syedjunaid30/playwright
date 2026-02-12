import { defineConfig } from '@playwright/test';

export default defineConfig({

  // Global login setup
  globalSetup: './hooks/global.setup.ts',

  // Test folder
  testDir: './tests',

  // Timeout
  timeout: 30000,

  // Retry failed tests
  retries: 1,

  // Parallel execution
  workers: 2,

  // Reports
  reporter: [
    ['html', { outputFolder: 'reports', open: 'never' }]
  ],

  use: {
    baseURL: 'https://demoqa.com',

    headless: false,

    screenshot: 'on',

    video: 'on',

    trace: 'on',

    storageState: 'auth.json',
  },

  // Multi browser
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    }
  ]
});
