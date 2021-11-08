import { Container, Row } from 'react-bootstrap';
import { API_URL } from '@/config/index';
import Hero from '@/sections/hero';
import Info from '@/sections/info';
import FeaturedJobList from './jobs/featuredJobList';

export default function Home({ jobs }) {
  return (
    <>
      <Hero />
      <Info />

      <Container>
        <Row>
          {jobs.map((job) => (
            <FeaturedJobList key={job.id} job={job} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/jobs`);
  const jobs = await res.json();

  // console.log(jobs);

  return {
    props: { jobs },
  };
}
