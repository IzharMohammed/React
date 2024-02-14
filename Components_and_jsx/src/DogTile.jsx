import DogDescription from "./DogDescription";
import './DogTile.css'
function DogTile(props){
    const text = 'welcome to react universe';
    const imgurl="https://www.shutterstock.com/image-photo/small-cute-puppy-maltese-dog-260nw-1735724201.jpg"
    return(
      <div >
        <img src={props.image} alt="" />
        <h2 style={{fontSize : '2rem', color:'grey'}}>{props.text}</h2>
        <DogDescription description={props.description}/>
      </div>
    )
  }
  export default DogTile;