import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import './home.scss'
import YearPicker from 'react-year-picker';



class Search extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       //   year:1992,
         value:0
     }
   
      this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }   
   // onChange(e){
   //     const re = /^[0-9\b]+$/;
   //     if (e.target.value === '' || re.test(e.target.value)) {
   //        this.setState({value: e.target.value})
   //     }
   //  }
   handleChange(event) {
  
   //   this.setState({year: event.target.value});
   }
    handleSubmit(event) {
     alert('A form was submitted: ' + this.state.value);
     event.preventDefault();
   }
    render() {
     return (
       <form onSubmit={this.handleSubmit}>
           <YearPicker className="yearpicker" id={1} onChange={this.handleChange} placeholder="Start Date"/>
           <YearPicker className="yearpicker" id={2} onChange={this.handleChange} placeholder="End Date"/>
           <textarea value={this.state.value} id={3} onChange={this.handleChange} />
         <input type="submit" value="Submit" />
       </form>
     );
   }
 }
 export default Search;


