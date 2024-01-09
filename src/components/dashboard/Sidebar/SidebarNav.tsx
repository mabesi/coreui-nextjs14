import React, { PropsWithChildren } from 'react'

import {
  faChartPie,
  faGear,
  faHome,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

import { faAddressCard } from '@fortawesome/free-regular-svg-icons'

// import { Badge } from 'react-bootstrap'
// import SidebarNavGroup from '@/components/dashboard/Sidebar/SidebarNavGroup'
import SidebarNavItem from '@/components/dashboard/Sidebar/SidebarNavItem'

const SidebarNavTitle = (props: PropsWithChildren) => {

  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

export default function SidebarNav() {

  return (
    <ul className="list-unstyled">
      
      <SidebarNavItem icon={faHome} href="/dashboard">Home
        {/* <small className="ms-auto"><Badge bg="info" className="ms-auto">NEW</Badge></small>
        <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small> */}
      </SidebarNavItem>

      <SidebarNavTitle>Samples</SidebarNavTitle>
      <SidebarNavItem icon={faChartPie} href="/dashboard/charts">Charts</SidebarNavItem>
      
      <SidebarNavTitle>User</SidebarNavTitle>
      <SidebarNavItem icon={faAddressCard} href="/dashboard/profile">Profile</SidebarNavItem>
      <SidebarNavItem icon={faGear} href="/dashboard/settings">Settings</SidebarNavItem>
      <SidebarNavItem icon={faRightFromBracket} href="/">Logout</SidebarNavItem>

    </ul>
  )
}
