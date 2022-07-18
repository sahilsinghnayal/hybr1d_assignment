import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cardimg from "../Images/cardimg.png";
import { Card, ListGroup,Button } from "react-bootstrap";
import Loading from "../Component/Loading";

function SinglePage() {
  const { id } = useParams();
  const [singledata, setsingledata] = useState(null);
  const [loading, setloading] = useState(true);
  const searchUrl = `https://hn.algolia.com/api/v1/items/${id}`;
  console.log(id);
  useEffect(() => {
    if (id) {
      const fetched = async () => {
        const response = await fetch(searchUrl);
        const data = await response.json();
        setsingledata(data);
        setloading(false);
      };
      fetched();
    }
  }, [id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="singlecontainer">
          <Card style={{ display: "block", marginTop: "11px" ,background: "#282323"}}>
            <Card.Img
              style={{ width: "15rem", textAlign: "center" }}
              variant="top"
              src={cardimg}
            />
            <Card.Body>
              <Card.Title style={{fontSize:"30px", textDecoration:"underline",color:"white"}}>{singledata.title}</Card.Title>
              <Card.Text style={{color:"white"}}>POINTS : {singledata.points}</Card.Text>
              <Button href="/" variant="secondary">Go Back</Button>
            </Card.Body>
            <Card.Footer style={{background:"black"}}>
              <big style={{ fontSize: "22px",color:"white",background:"black" }}>Comments</big>
             
            </Card.Footer>
            {singledata.children.map((value) => {
                return (
                  <ListGroup>
                    <ListGroup.Item
                      style={{
                        background: "rgb(28 140 220)",
                        color: "white",
                        marginTop: "12px",
                        display:"flex",
                        padding: "5px",
                        fontStyle:"italic"
                      }}
                    >
                      {value.text? value.text.replace(/(<([^>]+)>)/gi, "").slice(0,60):"Unkwon"}
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
          </Card>
        </div>
      )}
    </>
  );
}

export default SinglePage;
