# Introduction to browser events
[Introduction to browser events](https://javascript.info/introduction-browser-events)

## Event handlers
* ways to assign
  * HTML attribute
  * DOM property
  * `.addEventListener()`
    * By default, it will listen the event forever
    * `once: true` -> after 1@ execution, listener will be removed
    * `.removeEventListener()` with the same (!!) arguments -> event handler is removed
    * Several event handlers / event can be added
    * There are certain events, which just accepts `addEventListener()`

## this

## Possible mistakes
* If it's DOM property event handler assignment -> function declaration, not function execution
* If it's HTML attribute event handler assignment -> function declaration, not function execution
* Event handlers can not be used via `setAttribute()`
* DOM property event handler assignment is case-sensitive



