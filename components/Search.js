import { useState } from 'react';
import { useRouter } from 'next/router';

import {
  Col,
  Form,
  Label,
  FormControl,
  InputGroup,
  Text,
  Button,
} from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Hero.module.css';

export default function Search() {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/jobs/search?term=${term}`);
    setTerm('');
  };

  return (
    <Col lg={5} className='ps-lg-0'>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-5 mt-2 bg-white p-4 shadow-sm rounded-2'>
          <InputGroup.Text className={styles.text}>
            <BiSearch className={styles.search} />
          </InputGroup.Text>
          <FormControl
            type='text'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className={styles.control}
            placeholder='Search by title or location'
          />
          <Button variant='danger' className='ms-2 px-3'>
            <BiSearch className={styles.color} />
          </Button>
        </InputGroup>
      </Form>
    </Col>
  );
}
