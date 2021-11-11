import { Container, Row, Col } from 'react-bootstrap';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import BreadCrumb from './breadCrumb';

export default function SingleJobPage({ jb }) {
  const { role } = jb;

  return (
    <Layout title={jb.role}>
      <div className='company'>
        {/* Breadcrumb */}
        <BreadCrumb />
        {/* Job info => in a flex form */}
        {/* Job title */}
        {/* Job type */}
        {/* ====== */}
        {/* Overview  */}
        {/* qualifications reqiured  */}
        {/* company */}
        <h3>{role}</h3>
      </div>
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
