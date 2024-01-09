import { Container } from 'react-bootstrap'
import React from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row dark:bg-transparent">
      <Container>
        {children}
      </Container>
    </div>
  )
}
