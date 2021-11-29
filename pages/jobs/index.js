import { Container, Row, Col, Button } from 'react-bootstrap';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import Layout from '@/components/Layout';
import FeaturedJobList from './featuredJobList';

export default function AllJobs({ jobs }) {
  return (
    <Layout title='All Jobs'>
      <Container className='mt-5'>
        <Row>
          {jobs.map((job) => (
            <FeaturedJobList key={job.id} job={job} />
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/jobs`);
  const jobs = await res.json();

  return {
    props: { jobs },
  };
}
