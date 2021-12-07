import { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Image from 'next/image';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import styles from '@/styles/AddForm.module.css';
import Modal from '@/components/Modal';
import ImageUpload from '@/components/ImageUpload';

export default function EditJobPage({ job }) {
  const [values, setValues] = useState({
    role: job.role,
    location: job.location,
    salary: job.salary,
    type: job.type,
    date: job.date,
    time: job.time,
    company: job.company,
    description: job.description,
    skills: job.skills,
  });

  // Check to see if there is an image
  const [imagePreview, setImagePreview] = useState(
    job.image ? job.image.url : null
  );

  // Modal
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      toast.error('Please fill all fields');
    }

    const res = await fetch(`${API_URL}/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    // if error from the server
    if (!res.ok) {
      toast.error('Something went wrong!!');
    } else {
      const job = await res.json();
      router.push(`/jobs/${job.slug}`);
    }
  };

  const router = useRouter();

  const imageUploaded = async (e) => {
    // get the latest image
    const res = await fetch(`${API_URL}/jobs/${job.id}`);
    const data = await res.json();
    setImagePreview(data.image.url);
    setShowModal(false);
  };

  return (
    <Layout title='Edit Job'>
      <Container>
        <div className='mx-auto bg-white shadow-sm p-4 rounded mt-5 mb-5'>
          <h4 className='text-center mt-5 mb-5 fw-bold'>Edit Job</h4>
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
                  value={moment(values.date).format('yyyy-MM-DD')}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} className='mb-3 fw-bold' controlId='time'>
                <Form.Label>Time</Form.Label>
                <Form.Control
                  name='time'
                  type='text'
                  placeholder='Enter time'
                  value={values.time}
                  onChange={handleInputChange}
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
              />
            </Form.Group>

            {/* Image upload here */}

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
              />
            </Form.Group>

            <div className='d-grid gap-2'>
              <Button type='submit' variant='danger'>
                Update Job
              </Button>
            </div>
          </Form>

          <h4 className='mt-4'>Upload Image</h4>
          {imagePreview ? (
            <Image src={imagePreview} width={50} height={50} />
          ) : (
            <div>
              <p>No image uploaded</p>
            </div>
          )}

          <div>
            <Button
              onClick={() => setShowModal(true)}
              type='submit'
              variant='danger'
            >
              Upload
            </Button>
          </div>
        </div>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <ImageUpload jbId={job.id} imageUploaded={imageUploaded} />
        </Modal>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${API_URL}/jobs/${id}`);
  const job = await res.json();
  return {
    props: {
      job,
    },
  };
}
