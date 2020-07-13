import React from 'react';
import PropTypes from "prop-types"


// foodIlike.map(dish => (<Food name={dish.name}))
const foodIlike = [
  {id:1,rating:5.0,name:"ipad", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/IPad_1_PSD_Mockup.png/1200px-IPad_1_PSD_Mockup.png"},
  {id:2,rating:4.9,name:"SG", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/IPad_1_PSD_Mockup.png/1200px-IPad_1_PSD_Mockup.png"},
  
  {id:3,rating:3.8,name:"air3", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/IPad_1_PSD_Mockup.png/1200px-IPad_1_PSD_Mockup.png"},
  
  {id:4,rating:4.3 ,name:"apple", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/IPad_1_PSD_Mockup.png/1200px-IPad_1_PSD_Mockup.png"},
  
  {id:5,rating:4.6,name:"pencil", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/IPad_1_PSD_Mockup.png/1200px-IPad_1_PSD_Mockup.png"}
]

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>

}

//props {name, picture}
function Food(props){
  return <div>
    <h3> i like {props.name}</h3>
    <h4>{props.rating}/5.0</h4>
    <img src={props.picture}></img>

    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired

}

function App() {
  return (
    <div>
      {foodIlike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
