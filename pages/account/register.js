import { useState } from 'react';
import { Button, Group, Label, Control, Form } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import FormContainer from '@/components/FormContainer';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password, passwordConfirm });
  };

  return (
    <Layout title='Register'>
      <FormContainer>
        <div className='mx-auto bg-white shadow-sm p-4 rounded'>
          <h4 className='text-center mt-4 mb-4 fw-bold'>Register</h4>

          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3 fw-bold' controlId='username'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3 fw-bold' controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3 fw-bold' controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3 fw-bold' controlId='passwordConfirm'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
            </Form.Group>

            <div className='d-grid gap-2'>
              <Button type='submit' variant='danger'>
                Register
              </Button>
            </div>
          </Form>

          <p className='text-center mt-2'>
            Already have an account? <Link href='/account/login'>Login</Link>
          </p>
        </div>
      </FormContainer>
    </Layout>
  );
}
