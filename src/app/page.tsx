import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="p-6 font-sans">
      <Navbar />
      <h1 className="text-3xl font-bold text-blue-600">Welcome to Next.js!</h1>
      <p className="mt-2">Ini halaman utama dengan Tailwindcss</p>
    </main>
  );
}