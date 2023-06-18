import React from 'react';
import Link from 'next/link';
import Footer from '@/src/patterns/Footer';
import HomeScreen from '@/src/screens/HomeScreen';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <HomeScreen></HomeScreen>
      <Footer></Footer>
    </>
  );
}
