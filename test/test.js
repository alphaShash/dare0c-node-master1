var fs = require("fs");
exports['test reverse'] = function(test) {
  var Reverser = require("../lib/assignment.js");
  var text = fs.readFileSync("test/sample.txt", "ascii");
  var reverser = new Reverser();
  test.equals("zyxwvutsrqponmlkjihgfedcba", reverser.reverse(text));
  test.done()
}

exports['test reverse more examples'] = function(test) {
  var Reverser = require("../lib/assignment.js");
  var reverser = new Reverser();
  test.equals("9876543210", reverser.reverse("0123456789"));
  test.done()
}
