import { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import styles from '@/styles/AddForm.module.css';

export default function AddJobPage() {
  const [values, setValues] = useState({
    role: '',
    location: '',
    salary: '',
    type: '',
    date: '',
    time: '',
    company: '',
    description: '',
    image: '',
    skills: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const router = useRouter();

  return (
    <Layout title='AddJob'>
      <Container>
        <div className='mx-auto bg-white shadow-sm p-4 rounded mt-5 mb-5'>
          <h4 className='text-center mt-5 mb-5 fw-bold'>Add A Job</h4>
          <ToastContainer />

          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} className='mb-3 fw-bold' controlId='role'>
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter role'
                  name='role'
                  value={values.role}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className='mb-3 fw-bold'
                controlId='location'
              >
                <Form.Label>Location</Form.Label>
                <Form.Control
                  name='location'
                  type='text'
                  placeholder='Enter location'
                  value={values.location}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className='mb-3 fw-bold' controlId='salary'>
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  name='salary'
                  type='text'
                  placeholder='Enter salary'
                  value={values.salary}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className='mb-3 fw-bold' controlId='type'>
                <Form.Label>Job type</Form.Label>
                <Form.Control
                  name='type'
                  type='text'
                  placeholder='Enter job type'
                  value={values.type}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className='mb-3 fw-bold' controlId='date'>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  name='date'
                  type='date'
                  placeholder='Enter date'
                  value={values.date}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className='mb-3 fw-bold' controlId='time'>
                <Form.Label>Time</Form.Label>
                <Form.Control
                  name='time'
                  type='time'
                  placeholder='Enter time'
                  value={values.time}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group as={Col} className='mb-3 fw-bold' controlId='skills'>
              <Form.Label>Skills</Form.Label>
              <Form.Control
                name='skills'
                type='text'
                placeholder='Enter skills'
                value={values.skills}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3 fw-bold' controlId='company'>
              <Form.Label>Company</Form.Label>
              <Form.Control
                className={styles.textarea}
                name='company'
                as='textarea'
                type='text'
                placeholder='Enter info about the company'
                value={values.company}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3 fw-bold' controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                className={styles.textarea}
                name='description'
                as='textarea'
                type='text'
                placeholder='Enter info about the description'
                value={values.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <div className='d-grid gap-2'>
              <Button type='submit' variant='danger'>
                submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </Layout>
  );
}
