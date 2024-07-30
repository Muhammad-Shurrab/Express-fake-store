import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

function Home() {
  const [product, setProduct] = useState("");

  //   Async & Await for PRomise always & U can use then and catch.
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProduct(res.data))

      .catch((err) => err);
  }, []);

  console.log(product);
  //

  return (
    <>
      <h1 className="text-3xl text-[red]">Store</h1>
      <div className="wrapper grid grid-cols-3">
        {Object.values(product).map((pr) => {
          return (
            <div
              key={pr}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img className="rounded-t-lg" src={pr.image} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {pr.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
