# Dispatching custom events
[Dispatching custom events](https://javascript.info/dispatch-events)

## Event constructor
* `new Event(type[, options])`
  * `options`
    * `bubbles?: boolean`
    * `cancelable?: boolean;`
    * `composed?: boolean;`
## dispatchEvent
* `element.dispatchEvent(event)`
* `event.isTrusted`
  * property to identify if the action was trigger by a real user o programmatically