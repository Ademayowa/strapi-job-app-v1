import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import styles from '@/styles/BreadCrumb.module.css';

export default function BreadCrumb() {
  return (
    <section className={styles.breadCrumb}>
      <Container className='d-flex'>
        <Link href='/jobs'>
          <a>
            <BsArrowLeft />
          </a>
        </Link>
        <h2 className='ms-2'>Jobs</h2>
      </Container>
    </section>
  );
}
