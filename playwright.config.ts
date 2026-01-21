import { defineConfig, devices } from '@playwright/test';
import { junit } from 'node:test/reporters';

export default defineConfig({
  timeout: 60 * 1000,   //30000 ms(30 secs)
  //testDir: './tests/End2end',
  testDir: './tests',
  fullyParallel: true,
  //retries: process.env.CI ? 2 : 0,
  retries:0,
  //workers: process.env.CI ? 1 : undefined,
  workers: 5,

  reporter: [
    ['html',{open:'on-failure','outputFolder':'html-reports'}],
    ['allure-playwright'],
    ['list'],
    ['line'],
    ['dot']
    //['junit',{outputFile:'JunitReport.xml'}],
    //['jsno',{outputFile:'JsonReport.json'}]
    //['./my-custome-report']

  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    testIdAttribute:'data-testid',
    //headless: false,
    viewport: { width: 1280, height: 720 }, // Set default viewport size for consistency
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary
    permissions: ['geolocation'], // Set necessary permissions for geolocation-based tests
  },

  //grep: /@master/,

  projects: [
   {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }*/ 
  ],


});
