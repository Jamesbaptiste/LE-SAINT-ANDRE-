import { useRouter } from 'next/router';
import Confetti from 'react-confetti';


export default function Success() {
  const router = useRouter()

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="p-16 bg-white text-gray-800 rounded-lg w-1/2  ">
        <h1 className="text-3xl pb-4">Great job {router.query.name}</h1>
        <p className="text-lg text-gray-600">
          We have emailed you at {router.query.email}, check your email to
          confirm and start booking youre parties with LE SAINT-ANDRE ☕️{' '}
        </p>
      </div>
      <Confetti />
    </main>
  );
}