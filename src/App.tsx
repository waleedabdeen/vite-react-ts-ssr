import { Suspense, lazy } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import viteLogo from '/vite.svg';
import shadcnLogo from './assets/shadcn-ui.png';

// Works also with SSR as expected
const Info = lazy(() => import('./Info'));

function App() {
  return (
    <>
      <div className='flex justify-center'>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://ui.shadcn.com/' target='_blank' rel='noreferrer'>
          <img src={shadcnLogo} className='logo shadcn' alt='React logo' />
        </a>
      </div>
      <h1 className='font-bold text-5xl text-gray-800 m-10'>
        Vite + React + Shadcn/ui
      </h1>

      <Suspense fallback={<p>Loading card component...</p>}>
        <Info />
      </Suspense>

      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
