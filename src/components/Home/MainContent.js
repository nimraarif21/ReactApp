import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import MainItem from './MainItem'
import './home.scss'
import Search from './Search'


class Maincontent extends React.Component{


 render(){

   return (
       <div className = "container">
             <Search />
               <MainItem />
       </div>
        )  
   }
}

export default Maincontent

