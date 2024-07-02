import dynamic from 'next/dynamic';

const CurrentTime = dynamic(() => import('@/components/CurrentTime'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CurrentTime />
    </div>
  );
}