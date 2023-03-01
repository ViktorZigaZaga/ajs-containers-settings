import Settings from '../settings';

test('get user settings', () => {
  const settings = new Settings();
  expect(settings.getSettings()).toEqual(new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]));
});

test('set user settings', () => {
  const settings = new Settings();
  settings.setSettings('difficulty', 'normal');
  settings.setSettings('music', 'rock');
  expect(settings.getSettings()).toEqual(new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'normal'],
  ]));
});

test('get user fake settings', () => {
  const settings = new Settings();
  settings.setSettings('music', 'folk');
  expect(settings.getSettings()).toEqual(new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]));
});
