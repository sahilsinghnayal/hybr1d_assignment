import React from "react";
import cardimg from "../Images/cardimg.png";
import { Button,Card} from 'react-bootstrap';
function NewsCard({data}) {
    console.log(data)
  return (
    <>
    {/* <NavLink to={`d/${imdbID}`}key={imdbID}> > */}
      <div className="NewsCardContainer">
        <div className="cardContainer">
        <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src={cardimg}/>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text >
     AUTHOR : {data.author.toUpperCase()}
        </Card.Text>
        <Button href={`/details/${data.objectID}`} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
        </div>
      </div>
      {/* </NavLink> */}
    </>
  );
}

export default NewsCard;
