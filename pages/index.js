import { Container, Row, Col } from 'react-bootstrap';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import Hero from '@/sections/hero';
import Info from '@/sections/info';
import FeaturedJobList from './jobs/featuredJobList';
import SectionHeader from '@/sections/sectionHeader';
import styles from '@/styles/Home.module.css';

export default function Home({ jobs }) {
  return (
    <Layout title='FindGigs | Home'>
      <div className={styles.home}>
        <Hero />
        <Container>
          <Col lg={12} className='mt-5'>
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

          <Info />
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/jobs`);
  const jobs = await res.json();

  return {
    props: { jobs },
  };
}
