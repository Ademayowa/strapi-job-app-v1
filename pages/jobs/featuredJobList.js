import { Card, Body, Title, Text, Col } from 'react-bootstrap';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import styles from '@/styles/Featured.module.css';

export default function FeaturedJobListPage({ job }) {
  const { time, role, company, type, location, image } = job;

  return (
    <Col md={6} lg={4}>
      <Card className='px-2 py-2 mt-5'>
        <div className={styles.image}>
          <Image
            src={image.url ? image.url : '/images/default.png'}
            width={50}
            height={50}
            objectFit={'contain'}
          />
        </div>
        <Card.Body>
          <Card.Title className={styles.title}>
            {time} <BsDot /> {type}
          </Card.Title>
          <Card.Text className={styles.text}>{role}</Card.Text>
          <h5 className='fs-6 text-secondary'>{location}</h5>

          <Link href={`/jobs/${job.slug}`}>
            <a className='btn btn-danger'>Apply</a>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
