// using react 

const heading = React.createElement("h1", {}, "Namaste from React");
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
root.render(heading);