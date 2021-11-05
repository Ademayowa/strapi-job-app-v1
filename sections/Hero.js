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
import Layout from '@/components/Layout';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  return (
    <Layout title='Home'>
      <section className={styles.hero}>
        <Container>
          <Row>
            <Col lg={5} className={styles.info}>
              <h1 className={styles.title}>
                The easiest way to get your new job.
              </h1>
              <p className={styles.lead}>
                Searching and finding your dream job is now easier than ever.
                Just browse a job and apply with ease.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={5} className='ps-lg-0'>
              <InputGroup className='mb-5 mt-2 bg-white p-4 shadow-sm rounded-2'>
                <InputGroup.Text className={styles.text}>
                  <BiSearch className={styles.search} />
                </InputGroup.Text>
                <FormControl
                  className={styles.control}
                  placeholder='Search by title or location'
                />
                <Button variant='danger' className='ms-2 px-3'>
                  <BiSearch className={styles.color} />
                </Button>
              </InputGroup>
            </Col>
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
    </Layout>
  );
}
