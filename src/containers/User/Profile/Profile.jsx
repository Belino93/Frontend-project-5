import {getProfile} from '../../../services/apiCalls'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css'


function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    surname: '',
    password: ''
  })

  const tokenjw = localStorage.getItem('token')

  useEffect(() => {
    if(!tokenjw){
      navigate("/login");
    }
    getProfile(tokenjw).then((data) => {
      setProfile(previousState => {
        return { ...previousState,
           name: data.data.name,
           surname: data.data.surname,
          }
      })
    })

  }, [])

  return (
    <div className='container-profile'>
      <div className='profile-card'>
        <h1>Profile</h1>
        <h3>Hello, {profile.name} {profile.surname}</h3>
      </div>
    </div>
  )
}

export default Profile