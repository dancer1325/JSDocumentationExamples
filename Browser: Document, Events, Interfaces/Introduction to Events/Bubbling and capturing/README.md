# Bubbling and capturing
[Bubbling and capturing](https://javascript.info/bubbling-and-capturing)

## Bubbling
* Almost all events bubble
* If you click on a child without event handler for that event, but some parent has got → parent’s event handler will be trigger
## event.target
* := most deeply element which caused the event
## Stopping bubbling
* `event.stopPropagation()`
  * stop the bubbling
  * take in consideration the overwritten of events
  * affect to a specific event, not to different events
* `event.stopImmediatePropagation()`
  * stop bubbling immediately 
    * === if there are several event handlers / event -> Just 1! will be executed 