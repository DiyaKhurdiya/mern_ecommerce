import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./OrderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />
      <Typography>Your order has been placed successfully!</Typography>
      <Link to="/orders">VIEW ORDERS</Link>
    </div>
  );
};

export default OrderSuccess;
