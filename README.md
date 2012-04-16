limit.js
========

limit.js serves to solve a simple problem, too many events. Sometimes you want to track browser resizing, or mouse movements but you don't need/want every single event (of which there can be thousands). This is where limit can help. 

Limit contains two helpers to solve this problem.

Debounce
--------

`.debounce(milliseconds)`

For any function you can call `myFunction.debounce(milliseconds)` to get back a new function that when called multiple times will only call your original function once after the desired time.

Throttle
--------

`.throttle(milliseconds)`

For any function you can call `myFunction.throttle(milliseconds)` to get back a new function that when called multiple times will only call your original function after the specificed time has elapsed.

Debounce vs Throttle
--------------------

Each method has its appropriate usage, and only you as the consumer can decide what that is. Generally speaking use debounce for situation where an event will be called many times (such as on browser resize) however you only want to perform the heavy task of reflowing your UI as little as possible (n milliseconds after the last call). Use throttle to reduce the rate your function is called to once every n milliseconds.

Example
-------

A functioning example can be found here: http://jsfiddle.net/zR5jV/1/