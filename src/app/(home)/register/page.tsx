import {
  Card, CardBody, Col, Row,
} from 'react-bootstrap'
import Register from '@/app/(home)/register/register'

export default function Page() {
  return (
    // <div className="bg-dark-subtle min-vh-100 d-flex flex-row dark:bg-transparent">
    <Row className="justify-content-center align-items-center">
      <Col md={6}>
        <Card className="mb-4 rounded-0">
          <CardBody className="p-4">
            <h1>Register</h1>
            <p className="text-black-50">Create your account</p>
            <Register />
          </CardBody>
        </Card>
      </Col>
    </Row>
    // </div>
  )
}
