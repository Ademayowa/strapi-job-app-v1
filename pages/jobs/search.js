import { useRouter } from 'next/router';
import Link from 'next/link';
import qs from 'qs';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { Container, Row } from 'react-bootstrap';
import FeaturedJobList from './featuredJobList';

export default function SearchPage({ jobs }) {
  const router = useRouter();

  return (
    <Layout title='Job Search Results'>
      <Container>
        <Link href='/'>
          <a className='btn btn-danger mt-4'>Back</a>
        </Link>

        <div className='text-center mt-4 fs-4 fw-bold'>
          {jobs.length === 0 ? (
            <h2>No jobs found</h2>
          ) : (
            <h2>Search Results for {router.query.term}</h2>
          )}
        </div>

        <Row>
          {jobs.map((job) => (
            <FeaturedJobList key={job.id} job={job} />
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { location_contains: term },
        { role_contains: term },
        { type_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/jobs?${query}`);
  const jobs = await res.json();

  return {
    props: { jobs },
  };
}
