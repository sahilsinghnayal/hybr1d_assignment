import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import NewsCard from "./NewsCard";

function Fetch({ sendquery }) {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const searchUrl = `https://hn.algolia.com/api/v1/search?query=${sendquery}`;
  useEffect(() => {
    const fetched = async () => {
      setloading(false);
      const response = await fetch(searchUrl);
      const data = await response.json();
      setdata(data);
      setloading(true);
    };

    fetched();
  }, [sendquery]);

  return (
    <div className="wholecardContainer">
      {data.hits ? (
        data.hits.map((value) => {
          return <NewsCard data={value} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Fetch;
