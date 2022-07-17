import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import cardimg from "../Images/cardimg.png";
import { Button, Card } from "react-bootstrap";

function SinglePage() {
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const searchUrl = `https://hn.algolia.com/api/v1/items/${id}`;
  console.log(id);
  useEffect(() => {
    if (id) {
      const fetched = async () => {
        const response = await fetch(searchUrl);
        const data = await response.json();
        setdata(data);
        setloading(false);
      };
      fetched();
    }
  }, [id]);
  return (
    <>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div className="singlecontainer">
          <Card style={{ display: "block", marginTop: "11px" }}>
            <Card.Img
              style={{ width: "15rem", textAlign: "center" }}
              variant="top"
              src={cardimg}
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
      )}
    </>
  );
}

export default SinglePage;
