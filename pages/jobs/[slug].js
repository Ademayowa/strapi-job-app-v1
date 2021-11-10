import { API_URL } from '@/config/index';

export default function SingleJobPage({ jb }) {
  const { role } = jb;

  return (
    <div>
      <h2>Single Job Page</h2>
      <div className='company ms-5'>
        <h3>{role}</h3>
      </div>
    </div>
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
