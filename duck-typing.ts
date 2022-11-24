
// Cas 2
var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } }
obj1 = obj2;
obj2 = obj1;

function barPercentage(foo?: { bar: number }) {
    return foo?.bar ?? 0 / 100;
    //     ~~~~~~~~
    // Error: Object is possibly undefined.
  }