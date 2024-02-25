import DogDescription from "./DogDescription";
import './DogTile.css'
function DogTile(props){
    return(
      <div >
        <img src={props.image} alt="" />
        <h2 style={{fontSize : '2rem', color:'grey'}}>{props.text}</h2>
        <DogDescription description={props.description}/>
      </div>
    )
  }
  export default DogTile;