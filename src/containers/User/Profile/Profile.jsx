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
import { Spinner } from "react-bootstrap";

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

  // useEffect(() => {
  //   if(leases.length === 0)
  //   getLeaseById(tokenjw).then((leaseData) => {
  //     setLeases(leaseData.data)
  //   })
  //   ;
  // }, []);

  const clickHandler = (lease_id) => {
    updateLease(tokenjw, lease_id).then((res) => {
      console.log(res);
      setRefund(!refund);
    });
  };

  useEffect(() => {
    getLeaseById(tokenjw).then((leaseData) => {
      console.log(leaseData.data)
      setLeases(leaseData.data);
    });
  }, [refund]);

  if (leases.length === 0) {
    return (
      <Container-fluid className="container-profile">
        <Row className="profile-card-background">
          <div className="profile-card">
            <h3>Your profile, {profile.name}</h3>
            <text>{profile.email}</text>
          </div>
        </Row>

        <Row>
          <text className="central-text mt-5">YOUR ACTIVE RENTALS</text>
          <div className="film-container">
            <Spinner animation="border" variant="white" />
          </div>
        </Row>
      </Container-fluid>
    );
  }

  if (leases.length > 0) {
    return (
      <Container-fluid className="container-profile">
        <div className="main-container-profile">
          <Row className="m-0">
            <div className="profile-card">
            <div className="profile-card-inner">
               <div className="profile-card-text">
                 <h3 className="h3-rentals ">Your profile, {profile.name}</h3>
              <text>{profile.email}</text>
            </div>
            </div>
           
           
            </div>
          </Row>

          <Row className="container-rental-active ">
            <text className="central-text mt-5">YOUR RENTALS</text>
            <div className="container-rental-active ">
              {leases.map((lease, index) => (
                <div className="rental-active p-2" key={index}>
                  <img
                    className="rental-img "
                    src={imgUrl + lease.Movie.poster}
                  />
                  <div className="rental-title my-2">
                    {lease.Movie.title + "..."}
                  </div>
                  <text>Rental date: {lease.createdAt}</text>
                  <button
                    className="rental-button mt-2"
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
        </div>

      </Container-fluid>
    );
  }
  return (
    <div className="container-profile">
      <div className="main-container-profile">
        <div className="profile-card">
          <h1>Profile</h1>
          <h3>
            Hello, {profile.name} {profile.surname}
          </h3>
          <text>{profile.email}</text>
          <text className="central-text mt-5">ANY RENTAL ACTIVE</text>
        </div>
      </div>

    </div>
  );
}

export default Profile;
