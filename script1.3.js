// aim:- To understand nested structure in React 

/* <div id="parent ">
<div id="child">
<h1>Ram Ram bhai Sareaane</h1>
<h2>Shubham Bhai Mali</h2>
</div>
<div id="child2">
<h1>Vahe Guruji ka khalsa vahe guruji ki fateh</h1>
<h2>Bandah singh Bahadur</h2>
</div>
</div>;
*/

// nested structure in react 
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Ram Ram bhai Sareaane!!"),
    React.createElement("h2", {}, "Shubham Bhai Mali"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      {},
      "Vahe Guruji ka khalsa vahe guruji ki fateh!!"
    ),
    React.createElement("h2", {}, "Bandah singh Bahadur"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
