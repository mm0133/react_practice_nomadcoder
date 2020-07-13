import React from 'react';
import PropTypes from "prop-types"


// foodIlike.map(dish => (<Food name={dish.name}))
const foodIlike = [
  {id:1,rating:5.0,name:"ipad", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/IPad_1_PSD_Mockup.png/1200px-IPad_1_PSD_Mockup.png"},
  {id:2,rating:4.9,name:"SG", image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-witb-spacegray-cell-202003_FMT_WHH?wid=562&hei=744&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1582841371774"},
  
  {id:3,rating:3.8,name:"air3", image:"https://i7a3x6u3.stackpathcdn.com/wp-content/uploads/2019/06/iPad-Air-3-2019-SQ.jpg"},
  
  {id:4,rating:4.3 ,name:"apple", image:"https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201812022340"},
  
  {id:5,rating:4.6,name:"pencil", image:"https://cdn5.vectorstock.com/i/1000x1000/22/49/yellow-pencil-symbol-icon-design-beautiful-vector-21872249.jpg"}
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
