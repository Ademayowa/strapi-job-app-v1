import { Container, Row, Col } from 'react-bootstrap';

export default function FormContainer({ children }) {
  return (
    <Container className='mt-5'>
      <Row>
        <Col lg={5} className='mx-auto'>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
