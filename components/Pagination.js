import Link from 'next/link';
import { PER_PAGE } from '@/config/index';

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);
  return (
    <div className='d-flex justify-content-center mt-4'>
      {page > 1 && (
        <Link href={`/jobs?page=${page - 1}`}>
          <a className='btn btn-danger'>Prev</a>
        </Link>
      )}

      <div className='ms-3'>
        {page < lastPage && (
          <Link href={`/jobs?page=${page + 1}`}>
            <a className='btn btn-danger'>Next</a>
          </Link>
        )}
      </div>
    </div>
  );
}
