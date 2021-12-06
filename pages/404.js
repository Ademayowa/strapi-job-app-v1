import { Container } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <Container className='text-center mt-5 p-4'>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Page Not Found</h4>
        <Link href='/'>Go Back Home</Link>
      </Container>
    </Layout>
  );
}
