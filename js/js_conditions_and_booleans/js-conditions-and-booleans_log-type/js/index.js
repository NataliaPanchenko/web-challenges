const data = 55;
switch (true) {
  case data === undefined:
    console.log("undefined!");
    break;
  case data === null:
    console.log("null");
    break;
  case Number.isNaN(data):
    console.log("not a number!");
    break;
  case typeof data === "number":
    console.log("number!");
    break;
  case typeof data === "string":
    console.log("string!");
    break;
  case typeof data === "boolean":
    console.log("boolean!");
    break;
  case typeof data === "function":
    console.log("function!");
    break;
  case Array.isArray(data):
    console.log("array!");
    break;
  case typeof data === "object":
    console.log("object!");
    break;
  default:
    console.log("I have no idea!");
}
