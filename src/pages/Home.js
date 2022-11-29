import React from "react";
import { BsCartCheck } from "react-icons/bs";
function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "30px",
          width: "fit-content",
          margin: "auto",
          position: "relative",
          height: "fit-content",
          top: "100px",
        }}
      >
        <h1
          className="hX"
          style={{
            textAlign: "center",
            fontSize: "80px",
            fontFamily: "monospace",
          }}
        >
          <BsCartCheck /> Shopify.com
        </h1>
        <h6
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "monospace",
            color: "black",
            width: "700px",
            margin: "auto",
            marginBottom: "10px",
          }}
        >
          Shoping Simplified...
        </h6>
        <p
          style={{
            textAlign: "justify",
            fontSize: "40px",
            fontFamily: "monospace",
            color: "white",
            backgroundColor: "gray",
            borderRadius: "15px",
            padding: "30px",
            width: "1000px",
          }}
        >
          <strong style={{ color: "black" }}>Shopify App</strong> provides
          solutions for customers for buying products from different forte's at
          a single location at best prices!
        </p>
      </div>

      <hr style={{ position: "relative", top: "230px" }} />
      <footer>
        <h6
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "monospace",
            position: "relative",
            top: "230px",
            color: "white",
          }}
        >
          <strong>
            &copy; <BsCartCheck /> Shopify
          </strong>
        </h6>
      </footer>
    </>
  );
}

export default Home;
