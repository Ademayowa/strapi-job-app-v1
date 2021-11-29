import { Container, Row } from 'react-bootstrap';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import Layout from '@/components/Layout';
import FeaturedJobList from './featuredJobList';

export default function AllJobs({ jobs }) {
  return (
    <Layout title='All Jobs'>
      <Container className='mt-5 mb-5'>
        <Link href='/'>
          <a className='btn btn-danger mb-4'>Back</a>
        </Link>

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
