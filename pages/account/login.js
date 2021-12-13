import { useState, useEffect, useContext } from 'react';
import { Group, Button, Label, Control, Form } from 'react-bootstrap';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import FormContainer from '@/components/FormContainer';
import AuthContext from '@/context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Layout title='Login'>
      <FormContainer>
        <div className='mx-auto bg-white shadow-sm p-4 rounded'>
          <h4 className='text-center mt-4 mb-4 fw-bold'>Login</h4>

          <Form onSubmit={handleSubmit}>
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

            <div className='d-grid gap-2'>
              <Button type='submit' variant='danger'>
                Login
              </Button>
            </div>
          </Form>

          <p className='text-center mt-2'>
            Dont have an account? <Link href='/account/register'>Register</Link>
          </p>
        </div>
      </FormContainer>
    </Layout>
  );
}
