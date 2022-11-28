import {getProfile, getLeaseById} from '../../../services/apiCalls'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css'


function Profile() {
  const navigate = useNavigate();
  const tokenjw = localStorage.getItem('token')

  const [profile, setProfile] = useState({
    name: '',
    surname: '',
    password: '',
    email:'',
  })

  const [leases, setLeases] = useState([])

  useEffect(() => {
    getLeaseById(tokenjw).then((leaseData) => {
      setLeases(leaseData.data)
    })
    
  }, [])


  useEffect(() => {
    if(!tokenjw){
      navigate("/login");
    }
    getProfile(tokenjw).then((data) => {
      setProfile(previousState => {
        return { ...previousState,
           name: data.data.name,
           surname: data.data.surname,
           email: data.data.email
          }
      })
    })

  }, [])

  return (
    <div className='container-profile'>
      <div className='profile-card'>
        <h1>Profile</h1>
        <h3>Hello, {profile.name} {profile.surname}</h3>
        <p>{profile.email}</p>
        <p>ACTIVE RENTALS</p>
        <div>
          {leases.map((lease) => {
            <div>
              <img src='{}' />
              <p>{lease.Movies.title}</p>
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Profile