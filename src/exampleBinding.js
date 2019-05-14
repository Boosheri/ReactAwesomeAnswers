function foo() {
    return this;
  }
  
  // A regular function's "this" is always Window or undefined. It's undefined
  // inside of a module file and it's Window in a plain browser script.
  foo(); // WindowÂ {postMessage: Æ, blur: Æ, focus: Æ, close: Æ, parent: Window,Â â¦}
  window.foo(); // WindowÂ {postMessage: Æ, blur: Æ, focus: Æ, close: Æ, parent: Window,Â â¦}
  
  // You can create a new function from existing function where it's `this`
  // is permanently set to whatever value you want. This does not mutate the
  // original function.
  
  // Example:
  // `baz` is a new function that's copy of `foo` its `this` is
  // set to 1.
  baz = foo.bind(1);
  
  baz(); // NumberÂ {1}
  
  // `foo` is unchanged after the lines above.
  foo(); // WindowÂ {postMessage: Æ, blur: Æ, focus: Æ, close: Æ, parent: Window,Â â¦}
  
  // `bar` is a copy of `foo` where its `this` is set to an array.
  bar = foo.bind([1, 2, 3, 4, 5, 6]);
  bar(); // [1, 2, 3, 4, 5, 6]
  
  // You can not re-bind a function that is already a bound version
  // of another function.
  boo = bar.bind("BOO!");
  
  // `boo` is still using `this` from `bar` above.
  boo()(6)[(1, 2, 3, 4, 5, 6)];
  
  // A regular function that is bound essentially behaves like
  // arrow function. Like a bound function, an arrow function
  // can never re-bind its `this`.
  
  const myArrow = () => this;
  const myFunc = function() {
    return this;
  }.bind(this);
  