import React from "react";
import { useState, useEffect } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { showAllLeases } from "../../services/apiCalls";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let { decodedToken } = useJwt(token);

  const [leases, setLeases] = useState([]);

  useEffect(() => {
    showAllLeases(token)
      .then((res) => setLeases(res.data))
      .catch((error) => {});
  }, []);
  if (decodedToken?.user_role !== 1) {
    navigate("/");
  }

  if (leases.length === 0) {
    return <div>Any rental active</div>;
  }

  if (leases.length > 0) {
    return (
      <div className="container">
        <h3>Admin page</h3>
        {leases.map((lease, index) => {
          return (
            <div key={index} className="lease-card">
              <h5 className="text">lease id: {lease.lease_id}</h5>
              <h5 className="text">User: {lease.user_id}</h5>
              <h5 className="text">Movie: {lease.movie_id}</h5>
              <h5 className="text">{lease.refund}</h5>
              <h5 className="text">Rented on: {lease.createdAt}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Admin;
