// #todo

'use strict';
console.log('-- begin --');

/* debugging functions

  showing the different places you can put a breakpoint or debugger statement

*/

// ---------- using the debugger statement ----------

debugger; // 1:  pauses here ONLY ONCE before the function is defined
const withDebuggerStatement = (param1, param2) => {
  debugger; // 3, 5:  pauses here EVERY TIME the function is called
  return param2 + param1;
};

debugger; // 2:  pauses here ONCE BEFORE calling the function
const returnValue1 = withDebuggerStatement('a', 'b');

debugger; // 4:  pauses here ONCE BEFORE calling the function
const returnValue2 = withDebuggerStatement('C', 'D');

// ---------- using breakpoints ----------

// 6:  a breakpoint on the next line will pause ONLY ONCE when the function is defined
const withBreakpoints = (param1, param2) => {
  // 8, 10:  a breakpoint on the next line will pause EVERY TIME the function is called
  return param2 + param1;
};

// 7:  a breakpoint on the next line will pause ONCE BEFORE calling the function
const returnValue3 = withBreakpoints('w', 'x');

// 9:  a breakpoint on the next line will pause ONCE BEFORE calling the function
const returnValue4 = withBreakpoints('Y', 'Z');

console.log('-- end --');
