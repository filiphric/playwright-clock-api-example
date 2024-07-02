import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
        <Link href="/time">Local time</Link>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
        <Link href="/iss-time">Time on ISS</Link>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
        <Link href="/compliments">Compliments</Link>
      </div>
    </div>
  );
}