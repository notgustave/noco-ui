export class Title {
  private appName: string;
  private separator: string = '•';
  private defaultValue: string;
  private value: string = $state('');

  constructor(appName: string, defaultValue?: string) {
    this.appName = appName;
    this.defaultValue = defaultValue || appName;
    this.value = this.defaultValue;
  }

  get() {
    return this.value;
  }

  set(title: string) {
    this.value = `${title} ${this.separator} ${this.appName}`;
  }

  reset() {
    this.value = this.defaultValue;
  }
}
