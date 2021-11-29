import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand='md' className='shadow-sm'>
      <Container className={styles.container}>
        <Navbar.Brand className={styles.home}>
          <Link href='/'>
            <a>Find Gigs</a>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav className={styles.link}>
              <Link href='/'>
                <a>Home</a>
              </Link>
              <Link href='/account/register'>
                <a>Sign Up</a>
              </Link>
              <Link href='/account/login'>
                <a>Login</a>
              </Link>
              <Button className={styles.danger}>Post Job</Button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
