import { Card, Body, Title, Text, Button } from 'react-bootstrap';
import { API_URL } from '@/config/index';
import Image from 'next/image';
import styles from '@/styles/Featured.module.css';

export default function FeaturedJobListPage({ job }) {
  const { time, role, company } = job;

  return (
    <Card className='px-2 py-2 mt-5'>
      <div className={styles.image}>
        <Image
          className='d-none d-lg-block'
          src={'/images/logo.png'}
          width={60}
          height={60}
          objectFit={'contain'}
        />
      </div>
      <Card.Body>
        <Card.Title className={styles.title}>{time}</Card.Title>
        <Card.Text className={styles.text}>{role}</Card.Text>
        <h5 className='fs-6 text-secondary'>{company}</h5>
        <Button variant='danger' className={styles.danger}>
          Apply
        </Button>
      </Card.Body>
    </Card>
  );
}
