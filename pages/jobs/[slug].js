import { Container, Col } from 'react-bootstrap';
import { BiChevronsRight } from 'react-icons/bs';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import BreadCrumb from './breadCrumb';
import JobInfo from './jobInfo';

export default function SingleJobPage({ jb }) {
  const { role, type, description, skills, company } = jb;

  return (
    <Layout title={jb.role}>
      <BreadCrumb />
      <Container>
        <JobInfo />
        <h3 className='fs-1 fw-bold mt-5 mb-3'>{role}</h3>
        <h4>{type}</h4>
        <h5 className='mt-5 fw-bold'>Overview</h5>
        <Col lg={7}>
          <p>{description}</p>
        </Col>

        <h5 className='mt-5 fw-bold'>Key Qualifications</h5>
        {skills.map((sk) => (
          <div>{sk}</div>
        ))}

        <h5 className='mt-5 fw-bold'>Company</h5>
        <Col lg={7}>
          <p>{company}</p>
        </Col>
      </Container>

      {/* company */}
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/jobs/${slug}`);
  const jobs = await res.json();

  return {
    props: {
      jb: jobs[0],
    },
  };
}
