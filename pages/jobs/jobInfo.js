import Link from 'next/link';

export default function JobInfoPage() {
  return (
    <div className='col-lg-4 d-flex justify-content-between mt-4 mb-4 fw-bold'>
      <Link href='#'>
        <a>overview</a>
      </Link>

      <Link href='#'>
        <a>key qualifications</a>
      </Link>

      <Link href='#'>
        <a>perks</a>
      </Link>

      <Link href='#'>
        <a>company</a>
      </Link>
    </div>
  );
}
