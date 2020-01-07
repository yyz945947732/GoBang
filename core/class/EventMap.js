import symbol from '../symbol';
import utils from '../utils';
import errors from '../errors';

const mapperProxy = () => new Proxy({}, {
  get(target, key) {
    return target[key];
  },
  set(target, key, val) {
    if (utils.hasProp(val, 'watch') && utils.hasProp(val, 'unwatch')) {
      return Reflect.set(target, key, val);
    }
    errors.requireError('watch', 'unwatch');
  },
});

class EventMap {
  constructor() {
    this.mapper = mapperProxy();
  }

  [symbol.EventMap.check](eventName) {
    if (!this.has(eventName)) throw new Error('Event not found');
  }

  set(eventName, action) {
    if (!this.has(eventName)) this.mapper[String(eventName)] = action;
  }

  has(eventName) {
    return eventName in this.mapper;
  }

  get(eventName) {
    this[symbol.EventMap.check](eventName);
    return this.mapper[eventName];
  }

  clean() {
    this.mapper = mapperProxy();
  }

  watch(eventName) {
    this[symbol.EventMap.check](eventName);
    const event = this.get(eventName);
    if (utils.hasProp(event, 'watch')) event.watch();
  }

  unwatch(eventName) {
    this[symbol.EventMap.check](eventName);
    const event = this.get(eventName);
    if (utils.hasProp(event, 'unwatch')) event.unwatch();
  }
}

export default EventMap;
