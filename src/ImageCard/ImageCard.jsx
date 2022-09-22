
import './index.css';

// const ImageCard = (props) => {
const ImageCard = ({data}) => {
  return (
    <div className="ImageCard">
      <img className="ImageCard__img" src={data.url} alt={data.name}/>
  
    </div>
  )
}

export default ImageCard;