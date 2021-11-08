import { Col } from 'react-bootstrap';
import styles from '@/styles/SectionHeader.module.css';

export default function SectionHeader({ title, subtitle }) {
  return (
    <Col className={styles.secheader}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </Col>
  );
}
