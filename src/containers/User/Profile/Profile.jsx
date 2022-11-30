import {
  getProfile,
  getLeaseById,
  updateLease,
} from "../../../services/apiCalls";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const imgUrl = "https://image.tmdb.org/t/p/w200/";
  const navigate = useNavigate();
  const tokenjw = localStorage.getItem("token");
  if (!tokenjw) {
    navigate("/login");
  }

  const [refund, setRefund] = useState(false)
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
      setRefund(!refund)
    });
    
  };

  useEffect(() => {
    getLeaseById(tokenjw).then((leaseData) => {
      setLeases(leaseData.data);
    });
  }, [refund])
  

  if (leases.length > 0) {
    return (
      <div className="container-profile">
        <div className="profile-card">
          <h1>Profile</h1>
          <h3>
            Hello, {profile.name} {profile.surname}
          </h3>
          <p>{profile.email}</p>
          <p>ACTIVE RENTALS</p>
          <div className="container-rental-active">
            {leases.map((lease, index) => (
              <div className="rental-active" key={index}>
                <img src={imgUrl + lease.Movies[0].poster} />
                <p>{lease.Movies[0].title}</p>
                <p>Rental date: {lease.createdAt}</p>
                <button
                  onClick={() => {
                    clickHandler(lease.lease_id);
                  }}
                >
                  Return
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
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
