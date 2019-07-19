import React from "react";
import ReactDom from "react-dom";
import Home from './components/Home/Home'
import {Provider} from 'react-redux'
import store from './store'


class App extends React.Component{


 render(){

        (
       <Provider store={store}>
           <Home />
       </Provider>
        )  
   }
}


ReactDom.render(<App />, document.getElementById("root"));

