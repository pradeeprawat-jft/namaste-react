const heading = React.createElement("div", { id: "main" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "element1" }, "i am an H1 tag"),
    React.createElement("h2", { key: "element2" }, "i am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: "element3" }, "i am an H1 tag"),
    React.createElement("h2", { key: "element4" }, "i am an H2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
