import { Link } from "react-router-dom";

const NewsCard = ({aNews}) => {
    const {title, image_url, details, _id} = aNews
    return (
        <div className="card  bg-base-100 shadow-xl mb-16 ">
  <figure><img draggable="false" src={image_url} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title ">{title}</h2>
    <p>{
    details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="font-bold text-blue-600">Read more...</Link></p>
    :
    <p>{details}</p>
    
    }</p>
   
  </div>
</div>
    );
};

export default NewsCard;