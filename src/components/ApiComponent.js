import React from "react";
import styles from "./ApiComponent.module.css";
import Button from "react-bootstrap/Button";
import { BsCartCheck } from "react-icons/bs";
import { BsInfoLg } from "react-icons/bs";
function ApiComponent({
  login,
  avatarURL,
  source,
  description,
  category,
  rating,
  handleClick,
  item,
}) {
  return (
    <div className={styles.divK}>
      <div className={styles.tooltip}>
        <BsInfoLg />
        <span className={styles.tooltiptext}>{description}</span>
      </div>
      <Button
        variant="outline-dark"
        className={styles.button}
        style={{ textAlign: "center" }}
        onClick={() => handleClick(item)}
      >
        <BsCartCheck />
      </Button>
      <br />
      <div className={styles.innerDiv}>
        <img src={source} id={styles.img} alt="" />
        <hr />
        <h6>
          <strong>{category}</strong>
        </h6>
        <h6>{login}</h6>
        <hr />
        <h6>
          Price:<strong style={{ color: "green" }}>{avatarURL} $</strong>
        </h6>
        <h6>{rating} ⭐</h6>
      </div>
      <br />
    </div>
  );
}

export default ApiComponent;
