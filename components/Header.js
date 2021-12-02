import { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const { logout, user } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand='md' className='shadow-sm bg-white'>
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
              <Link href='/jobs'>
                <a>Jobs</a>
              </Link>

              {user ? (
                // If logged in
                <>
                  <Link href='#'>
                    <a>Post Job</a>
                  </Link>
                  <div className={styles.dg}>
                    <Link href='#' onClick={() => logout()}>
                      <a>Logout</a>
                    </Link>
                  </div>
                </>
              ) : (
                // if not logged in
                <>
                  {/* <Link href='/account/register'>
                    <a>Sign Up</a>
                  </Link> */}

                  <Link href='/account/login'>
                    <a>Login</a>
                  </Link>
                </>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
