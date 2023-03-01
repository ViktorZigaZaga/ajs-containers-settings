export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.userSettings = new Map();

    this.theme = ['dark', 'light', 'gray'];
    this.music = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.difficulty = ['easy', 'normal', 'hard', 'nightmare'];

    this.defaultSettings.set('theme', this.theme[0]);
    this.defaultSettings.set('music', this.music[0]);
    this.defaultSettings.set('difficulty', this.difficulty[0]);
  }

  setSettings(key, value) {
    if (
      (this.theme.includes(value)
            || this.music.includes(value)
            || this.difficulty.includes(value)
      ) && this.defaultSettings.has(key)) {
      this.userSettings.set(key, value);
    }
  }

  getSettings() {
    this.userSettings.forEach((value, key) => {
      this.defaultSettings.set(key, value);
    });
    return this.defaultSettings;
  }
}
