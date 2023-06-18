import React from 'react';
import Link from 'next/link';
import Footer from '@/src/patterns/Footer';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/faq">Ir para FAQ</Link>
      <Footer></Footer>
    </>
  );
}
