import {
  Container,
  Row,
  Col,
  Form,
  Label,
  FormControl,
  InputGroup,
  Text,
  Button,
} from 'react-bootstrap';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import styles from '@/styles/Hero.module.css';
import Search from '@/components/Search';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <Row>
          <Col lg={5} className={styles.info}>
            <h1 className={styles.title}>
              The easiest way to get your new job.
            </h1>
            <p className={styles.lead}>
              Searching and finding your dream job is now easier than ever. Just
              browse a job and apply with ease.
            </p>
          </Col>
        </Row>

        <Row>
          <Search />
        </Row>
      </Container>

      <div className={styles.image}>
        <Image
          src={'/images/hero.png'}
          width={600}
          height={600}
          objectFit={'contain'}
        />
      </div>
    </section>
  );
}
