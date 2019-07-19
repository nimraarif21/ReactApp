
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react"
import { connect } from 'react-redux';
import { getFilms } from '../../actions/filmActions'
import './home.scss'
import StarRatings from 'react-star-rating-component'



class MainItem extends React.Component{
   constructor() {
       super();
   
       this.state = {
         rating: 3,
         color:'yellow',
         prevRating:0,
         prevcolor:'blue'
        
       };
     }

   componentDidMount(){
       this.props.getFilms();
   }
   onStarClick(nextValue, prevValue, name) {
       this.setState({rating: nextValue});
   }
     onStarHover(nextValue, prevValue, name){
         this.setState({color:'gray',prevRating:this.state.prevValue,rating:nextValue})
     }
     onStarHoverOut(nextValue, prevValue, name){
       this.setState({color:'yellow',rating:this.prevRating})
     }
  
   render(){
       const FilmItems = this.props.films.map(films => (
           <div key ={films.id}>
               <h2>{films.filmTitle}</h2>
               <p>{films.description}</p>
           </div>
       ));
   return (
       <div className="row">
               <div className="col-6 text-center"> 
                  {/* {FilmItems} */}
                   <img src={require('../../images/spiderman.jpg')}className="img-fluid"/>
                   <h2>Spiderman</h2>
                   <p>Movie released few days ago</p>
                   <StarRatings className="StarRatings"
                       name="rate1"
                       starCount={5}
                       value={this.rating}
                       onStarClick={this.onStarClick.bind(this)}
                       onStarHover={this.onStarHover.bind(this)}
                       onStarHoverOut={this.onStarHoverOut.bind(this)}
                       />
               </div>
       </div>
        )  
   }
}

const mapStateToProps = state => ({
   films: state.films.items
})


export default connect(mapStateToProps, { getFilms})(MainItem);