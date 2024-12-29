import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const div1 = React.createElement(
//   "div",
//   { id: "parent" },
//   [React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "This is a simple header1🤩"),
//     React.createElement("h1", {}, "This is a simple header2🥵"),
//   ]),
//   React.createElement("div",{ id: "child2"}, [
//     React.createElement("h1", {}, "This is a simple header1🤩"),
//     React.createElement("h1", {}, "This is a simple header2😘"),
//   ]),
//   React.createElement("div",{ id: "child3"}, [
//     React.createElement("h1", {}, "This is a simple header1🤩"),
//     React.createElement("h1", {}, "This is a simple header2💕"),
//   ])]
// );

//const div1 =<h1>This is a simple header1🤩</h1>

// const Div1 = () => {
//   return <h1>This is a simple header1🤩</h1>;
// };

const Div1 = () => {
  return (
    <div className="parent">
      <div className="child">
<<<<<<< HEAD
        <h1 className="header">This is a simple header1😍</h1>
=======
        <h1 className="header">This is a simple header1...</h1>
>>>>>>> 5b4cf0bc3228acf1a4308eb069a1d30dbb38048e
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Div1 />);
