import Header from '@/components/Header';
import FeaturedJobs from 'sections/FeaturedJobs';
import Hero from 'sections/Hero';
import Info from 'sections/Info';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <FeaturedJobs />
    </>
  );
}
