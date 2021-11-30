import { Container, Row } from 'react-bootstrap';
import { API_URL, PER_PAGE } from '@/config/index';
import Link from 'next/link';
import Layout from '@/components/Layout';
import FeaturedJobList from './featuredJobList';
import Pagination from '@/components/Pagination';

export default function AllJobs({ jobs, page, total }) {
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

        <Pagination page={page} total={total} />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total job
  const totalRes = await fetch(`${API_URL}/jobs/count`);
  const total = await totalRes.json();

  // Fetch jobs
  const jobRes = await fetch(
    `${API_URL}/jobs?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const jobs = await jobRes.json();

  return {
    props: { jobs, page: +page, total },
  };
}
