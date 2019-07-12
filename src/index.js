import React from "react";
import ReactDom from "react-dom";
import Myfunc from "./components/Myfunc"

// import { hot } from 'react-hot-loader/root';
// const App = () => <div>Hello World!</div>;
// export default hot(App);

ReactDom.render(<Myfunc />, document.getElementById("root"));
