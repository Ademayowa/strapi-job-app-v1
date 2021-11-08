// import { Container, Row, Col } from 'react-bootstrap';
// import Image from 'next/image';
// import { API_URL } from '@/config/index';
// import Heading from '@/sections/Title';
// import styles from '@/styles/Featured.module.css';
// import FeaturedJobList from './featuredJobList';

// export default function FeaturedJobsPage({ jobs }) {
//   console.log(jobs);
//   return (
//     <section className={styles.featured}>
//       <Container>
//         <Row>
//           <Col lg={12}>
//             <Heading title='Featured jobs' subtitle='that are in demand.' />
//           </Col>

//           <Col lg={4}>
//             {jobs.map((job) => (
//               <FeaturedJobList job={job} />
//             ))}
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/jobs`);
//   const jobs = await res.json();

//   console.log(jobs);

//   return {
//     props: { jobs },
//   };
// }
