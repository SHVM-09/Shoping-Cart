import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="cont">
      <div className="add">
        <h3>Corporate Address</h3>
        <p>
          Shopify HeadQuarters,
          <br />
          10001 NW Extremely Longwinded Name Rd,
          <br />
          Glouchestershire Hall S,
          <br /> 2nd Flr, Ste #555,
          <br />
          Upper Whatchymacallit Lake
          <br /> NY 14424-4444,USA
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11690.036988324739!2d-77.29487094619388!3d42.90429984711592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d125db974e2d11%3A0xabbc3c7158d46b95!2sCorporate%20Square!5e0!3m2!1sen!2sin!4v1668852640257!5m2!1sen!2sin"
          width="400"
          height="300"
          referrerpolicy="no-referrer-when-downgrade"
          title="location"
        ></iframe>
      </div>

      <p className="foot">
        You can mail us at{" "}
        <a href="mailto:alienc512345@gmail.com" title="alienc512345@gmail.com">
          Shopify@24/7 service
        </a>{" "}
        for complaint
        <br /> redressal,product return,refund or any other related issues.{" "}
      </p>
    </div>
  );
};

export default Contact;
