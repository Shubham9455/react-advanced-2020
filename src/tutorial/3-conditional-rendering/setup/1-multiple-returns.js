import React, { useState, useEffect } from "react";
// import { Dots } from "loading-animations-react";
import { BoxLoading } from "react-loadingg";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((e) => console.log(e));

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
        <BoxLoading />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  // else return "done";
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
