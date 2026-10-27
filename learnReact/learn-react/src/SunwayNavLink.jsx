import React from 'react'
import { NavLink } from 'react-router-dom'

const SunwayNavLink = () => {
  return (
    <div>
        <NavLink style={{ marginRight: "10px"}} to="/product">
        Product
        </NavLink>
        <NavLink style={{ marginRight: "10px"}} to="/job1">
        Job
        </NavLink>
        <NavLink style={{ marginRight: "10px"}} to="/user">
        User
        </NavLink>
    </div>
  )
}

export default SunwayNavLink
