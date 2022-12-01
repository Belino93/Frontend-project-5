import {
  getProfile,
  getLeaseById,
  updateLease,
} from "../../../services/apiCalls";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  const imgUrl = "https://image.tmdb.org/t/p/w200/";
  const navigate = useNavigate();
  const tokenjw = localStorage.getItem("token");
  if (!tokenjw) {
    navigate("/login");
  }

  const [refund, setRefund] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    surname: "",
    password: "",
    email: "",
  });

  if (profile.name === "") {
    getProfile(tokenjw).then((data) => {
      setProfile((previousState) => {
        return {
          ...previousState,
          name: data.data.name,
          surname: data.data.surname,
          email: data.data.email,
        };
      });
    });
  }

  const [leases, setLeases] = useState([]);

  useEffect(() => {
    getLeaseById(tokenjw).then((leaseData) => {
      setLeases(leaseData.data);
    });
  }, []);

  const clickHandler = (lease_id) => {
    updateLease(tokenjw, lease_id).then((res) => {
      console.log(res);
      setRefund(!refund);
    });
  };

  useEffect(() => {
    getLeaseById(tokenjw).then((leaseData) => {
      setLeases(leaseData.data);
    });
  }, [refund]);

  if (leases.length > 0) {
    return (
      <Container fluid className="container-profile">
        <Row>
          <div className="profile-card">
            <h3>Your profile, {profile.name}</h3>
            <p>{profile.email}</p>
          </div>
        </Row>

        <Row>
          <p>YOUR ACTIVE RENTALS</p>
          <div className="container-rental-active">
            {leases.map((lease, index) => (
              <div className="rental-active" key={index}>
                <img
                  className="rental-img"
                  src={imgUrl + lease.Movies[0].poster}
                />
                <div className="rental-title">
                  {lease.Movies[0].title.slice(0, 20) + "..."}
                </div>
                <p>Rental date: {lease.createdAt}</p>
                <button
                  className="rental-button"
                  onClick={() => {
                    clickHandler(lease.lease_id);
                  }}
                >
                  Return
                </button>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    );
  }
  return (
    <div className="container-profile">
      <div className="profile-card">
        <h1>Profile</h1>
        <h3>
          Hello, {profile.name} {profile.surname}
        </h3>
        <p>{profile.email}</p>
        <p>ANY RENTAL ACTIVE</p>
      </div>
    </div>
  );
}

export default Profile;
