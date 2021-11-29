import { Container, Row, Col, Button } from 'react-bootstrap';
import SectionHeader from './sectionHeader';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/InfoTwo.module.css';

export default function infoTwo() {
  return (
    <section className={styles.infoTwo}>
      <Container fluid='lg' className='mb-5'>
        <Row>
          <Col lg={7}></Col>

          <Col lg={5}>
            <SectionHeader title='Finding a job' subtitle='is now so easy' />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                ea amet vel blanditiis sint error perspiciatis neque rerum
                provident nulla aperiam, numquam delectus laborum officiis unde,
                quod fugiat laboriosam ut.
              </p>
              <div className={styles.center}>
                <Link href='/account/register'>
                  <a className='btn btn-danger'>Sign up</a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className={styles.bigShape}></div>
    </section>
  );
}
