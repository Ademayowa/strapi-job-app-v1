import {
  Container,
  Col,
  Row,
  Card,
  Body,
  Title,
  Text,
  Button,
} from 'react-bootstrap';
import { BiChevronsRight } from 'react-icons/bs';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import BreadCrumb from './breadCrumb';
import JobInfo from './jobInfo';
import styles from '@/styles/SingleJobPage.module.css';

export default function SingleJobPage({ jb }) {
  const { role, type, description, skills, company } = jb;

  return (
    <Layout title={jb.role}>
      <BreadCrumb />
      <Container className={styles.singleJob}>
        <Row>
          <JobInfo />

          <h3 className='fs-1 fw-bold'>{role}</h3>
          <h4>{type}</h4>
          <h5 className='mt-lg-4 fw-bold'>Overview</h5>
          <Col lg={7}>
            <p>{description}</p>
          </Col>

          <h5 className='mt-lg-4 fw-bold'>Skills</h5>
          {skills.map((sk) => (
            <div>{sk}</div>
          ))}

          <h5 className='mt-4 fw-bold'>Company</h5>
          <Col lg={7}>
            <p>{company}</p>
          </Col>

          {/* Show on Desktop screens Only */}
          <Col className={styles.right} lg={4}>
            <Card>
              <Card.Header>
                salary is around <br />
                <span className='fw-bold fs-4'>$150k - $300k</span>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Apply even if you don't meet the entire requirement
                </Card.Text>
                <Button variant='danger'>apply for this position</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Show on Tablet & mobile Only */}
          <Col className={styles.rightMobile}>
            <div className='d-grid gap-2'>
              <Button variant='danger' size='lg'>
                apply for this position
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/jobs?slug=${slug}`);
  const jobs = await res.json();

  return {
    props: {
      jb: jobs[0],
    },
  };
}
