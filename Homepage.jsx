import React, { useEffect, useState } from "react";

const Homepage = () => {
  const url = "https://dummyjson.com/users";

  const [data, setData] = useState([]);
  const [showData, setShowData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData.users);
        setData(responseData.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>{showData}</h1>
      {data.map((user, key) => {
        return (
          <div
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              margin: "20px",
              borderRadius: "8px",
            }}
            onClick={() => {
              console.log(user.id);
            }}
          >
            <h1
              onClick={() => {
                setShowData(user.firstName);
              }}
            >
              {user.id}
            </h1>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
          </div>
        ); 
      })}
    </div>
  );
};

export default Homepage;
