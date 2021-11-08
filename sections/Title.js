import { Col } from 'react-bootstrap';

export default function TitlePage({ title, subtitle }) {
  return (
    <Col>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </Col>
  );
}
