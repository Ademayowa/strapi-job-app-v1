import { Container, Row, Col, Button } from 'react-bootstrap';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Hero from '@/sections/hero';
import Info from '@/sections/info';
import FeaturedJobList from './jobs/featuredJobList';
import SectionHeader from '@/sections/sectionHeader';
import InfoTwo from '@/sections/infoTwo';
import styles from '@/styles/Home.module.css';

export default function Home({ jobs }) {
  return (
    <Layout title='FindGigs | Home'>
      <div className={styles.home}>
        <Hero />
        <Container>
          <Col lg={12}>
            <SectionHeader
              title='Featured jobs'
              subtitle='that are in demand.'
            />
          </Col>

          <Row>
            {jobs.map((job) => (
              <FeaturedJobList key={job.id} job={job} />
            ))}
          </Row>

          <div className='text-center mt-4 mb-4'>
            <Link href='/jobs'>
              <a className='btn btn-danger'>View all</a>
            </Link>
          </div>
        </Container>

        <Container fluid className='ps-0'>
          <InfoTwo />
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/jobs?_sort=date:ASC&_limit=3`);
  const jobs = await res.json();

  return {
    props: { jobs },
  };
}
