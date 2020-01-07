class EventMap {
  constructor() {
    this.mapper = {};
  }

  set(eventName, action) {
    if (!this.has(eventName)) this.mapper[String(eventName)] = action;
  }

  has(eventName) {
    return eventName in this.mapper;
  }

  get(eventName) {
    this.check(eventName);
    return this.mapper[eventName];
  }

  check(eventName) {
    if (!this.has(eventName)) throw new Error('Event not found');
  }

  clean() {
    this.mapper = {};
  }

  watch(eventName) {
    this.check(eventName);
    const event = this.get(eventName);
    if (Object.prototype.hasOwnProperty.call(event, 'watch')) event.watch();
  }

  unwatch(eventName) {
    this.check(eventName);
    const event = this.get(eventName);
    if (Object.prototype.hasOwnProperty.call(event, 'unwatch')) event.unwatch();
  }
}

export default EventMap;
