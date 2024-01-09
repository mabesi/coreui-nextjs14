import Link from 'next/link'
import { Nav, NavItem, NavLink } from 'react-bootstrap'

export default function HeaderFeaturedNav() {
  return (
    <Nav>
      <NavItem>
        <Link href="/dashboard" passHref legacyBehavior>
          <NavLink className="p-2">Dashboard</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/dashboard/profile" passHref legacyBehavior>
          <NavLink className="p-2">Profile</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/dashboard/settings" passHref legacyBehavior>
          <NavLink className="p-2">Settings</NavLink>
        </Link>
      </NavItem>
    </Nav>
  )
}
