"use client"

import React from 'react'
import { usePathname } from 'next/navigation';
import { Breadcrumb as BSBreadcrumb, BreadcrumbItem } from 'react-bootstrap'

type Bread = {
  pathname: string;
  name: string;
  active: boolean;
}

export default function Breadcrumb() {

  const location = usePathname()

  function getBreadcrumbs(location: string) {

    let breadcrumbs: Bread[] = [];

    location.split('/').reduce((prev, curr, index, array) => {

      const currentPathname = `${prev}/${curr}`;
      const routeName = curr;

      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })

        return currentPathname
    })

    return breadcrumbs;
  }

  const breadcrumbs = getBreadcrumbs(location);

  return (
    <BSBreadcrumb listProps={{ className: 'mb-0 align-items-center' }}>
      
      {breadcrumbs.map((bc, index) => {

        return (
          <BreadcrumbItem
            linkProps={{ className: (bc.active ? 'text-decoration-none' : 'text-decoration-none text-primary' ) }}
            {...(bc.active ? { active: true } : { href: bc.pathname})}
            key={index}
          >
            {bc.name=="dashboard" ? "Home" : (bc.name.charAt(0).toUpperCase() + bc.name.slice(1))}
          </BreadcrumbItem>          
        )

      })}
      
    </BSBreadcrumb>
  )
}