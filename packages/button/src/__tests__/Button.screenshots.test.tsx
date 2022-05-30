// import {
//   closeBrowser,
//   createStorybookUrl,
//   matchHtml,
//   openBrowserPage,
//   setupScreenshotTesting,
// } from '../../../screenshotUtils';

// const screenshotTesting = setupScreenshotTesting({
//   it,
//   beforeAll,
//   afterAll,
//   expect,
// });

// const packageName = 'button';
// const buttonSelector = 'button[type="button"]';

// describe(
//   'Button base view',
//   screenshotTesting({
//     cases: [
//       [
//         'sprite',
//         createStorybookUrl({
//           packageName,
//           knobs: {
//             children: 'CONTENT Button',
//             size: 'small',
//             variant: 'primary',
//           },
//         }),
//       ],
//     ],
//   }),
// );

// describe('Button hover test', () => {
//   test('Open sheet', async () => {
//     const pageUrl = createStorybookUrl({
//       packageName,
//     });

//     const { browser, context, page } = await openBrowserPage(pageUrl);

//     try {
//       await page.hover(buttonSelector);

//       await matchHtml({
//         page,
//         expect,
//       });
//     } catch (error: unknown) {
//       console.error(error);
//     } finally {
//       await closeBrowser({ browser, context, page });
//     }
//   });
// });

// describe('Button clicks tests', () => {
//   test('Open sheet', async () => {
//     const pageUrl = createStorybookUrl({
//       packageName,
//     });
//     const { browser, context, page } = await openBrowserPage(pageUrl);

//     try {
//       const buttons = await page.$$(buttonSelector);

//       buttons.forEach(async button => {
//         const buttonPosition = await button.boundingBox();

//         if (buttonPosition) {
//           await page.mouse.move(buttonPosition.x, buttonPosition.y);
//           await page.mouse.down();
//         }
//       });

//       await matchHtml({
//         page,
//         expect,
//       });
//     } catch (error: unknown) {
//       console.error(error);
//     } finally {
//       await closeBrowser({ browser, context, page });
//     }
//   });
// });
