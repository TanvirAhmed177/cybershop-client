import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { Container } from "react-bootstrap";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5000/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);
  return (
    <Container>
      <h2 className="mt-3 text-light">
        {loggedInUser.userName}, you have ordered <b>{orders.length}</b> item
      </h2>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody>
              <tr>
                <td>{order.date}</td>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.qty}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </Container>
  );
};

export default Orders;
