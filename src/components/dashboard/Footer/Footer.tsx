import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="footer border-top px-sm-2 py-2">
      
      <Container fluid className="text-center align-items-center flex-column flex-md-row d-flex justify-content-between">
        
        <div className="text-center align-items-center flex-column flex-md-row d-flex justify-content-between" >

          <div>
            <a className="text-decoration-none" href="https://coreui.io">CoreUI Admin Template</a>
            {' '}
            © 2023 creativeLabs.
          </div>

          <div>&nbsp;&nbsp;</div>

          <div className="ms-md-auto">
            Powered by&nbsp;
            <a
              className="text-decoration-none"
              href="@app/ui/dashboard/AdminLayout"
            >
              CoreUI UI
              Components
            </a>
          </div>

        </div>

        <div className="ms-md-auto">
          Implementation Example by&nbsp;
          <a className="text-decoration-none" href="https://github.com/mabesi">Mabesi</a>
        </div>

      </Container>
    </footer>
  )
}
