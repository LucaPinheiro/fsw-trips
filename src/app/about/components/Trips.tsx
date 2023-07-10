import { prisma } from "@/lib/prisma";
import React, { useEffect, useState } from "react";

const getTrip = async () => {
  const trips = await prisma.trip.findMany({});
  return trips;
};

const Trips = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item: any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Trips;


// import React, { useState } from "react";

// const Trips = () => {
//   return <div>Trips</div>;
// };

// export default Trips;
