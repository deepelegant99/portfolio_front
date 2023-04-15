import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>data from the backend: {data}</div>;
};

export default Projects;
