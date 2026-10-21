// const heading = React.createElement("h1", { id: "page-title" }, "Hello React"); // this is an freact element end of the day js object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   heading,
// ); /**this render helps to convert this js object or react element to tag */

const container = React.createElement("div", null, [
  React.createElement("h1", null, "Namaste React"),
  React.createElement("h1", null, "welcome to Namaste React"),
]);
root.render(container);
