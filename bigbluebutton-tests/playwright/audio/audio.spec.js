const { test } = require('@playwright/test');
const { fullyParallel } = require('../playwright.config');
const { Audio } = require('./audio');

if (!fullyParallel) test.describe.configure({ mode: 'serial' });

test.describe('Audio', () => {
  const audio = new Audio();

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await audio.initModPage(page, true);
    await audio.initUserPage(true, context);
  });

  // https://docs.bigbluebutton.org/2.7/testing/release-testing/#listen-only-mode-automated
  test('Join audio with Listen Only @ci', async () => {
    await audio.joinAudio();
  });

  // https://docs.bigbluebutton.org/2.7/testing/release-testing/#join-audio-automated
  test('Join audio with Microphone @ci', async () => {
    await audio.joinMicrophone();
  });

  test('Change audio input and keep it connected', async () => {
    await audio.changeAudioInput();
  });

  // https://docs.bigbluebutton.org/2.7/testing/release-testing/#muteunmute
  test('Mute yourself by clicking the mute button', async () => {
    await audio.muteYourselfByButton();
  });

  // https://docs.bigbluebutton.org/2.7/testing/release-testing/#choosing-different-sources
  test('Keep the last mute state after rejoining audio @ci', async () => {
    await audio.keepMuteStateOnRejoin();
  });

  // Talking Indicator
  // https://docs.bigbluebutton.org/2.7/testing/release-testing/#talking-indicator
  test('Mute yourself by clicking the talking indicator', async () => {
    await audio.muteYourselfByTalkingIndicator();
  });

  // https://docs.bigbluebutton.org/2.7/testing/release-testing/#talking-indicator
  test('Mute another user by clicking the talking indicator', async () => {
    await audio.muteAnotherUser();
  });
});
