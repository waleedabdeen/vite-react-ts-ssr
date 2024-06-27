import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useState } from 'react';

function Info() {
  const [count, setCount] = useState(0);

  return (
    <div className='p-2'>
      <Button
        size='lg'
        className='mb-2'
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </Button>
      <Card className='text-left'>
        <CardHeader className='text-left'>
          <CardTitle>Adding new components</CardTitle>
        </CardHeader>
        <CardContent>
          To add new components use the command{' '}
          <code className='bg-purple-100 p-1 text-purple-600'>
            npx shadcn-ui@latest add
          </code>
          , then select the component(s) that you want from the list and press
          enter.
        </CardContent>
      </Card>
      <Card className='text-left'>
        <CardHeader>
          <CardTitle>HMR</CardTitle>
        </CardHeader>
        <CardContent>
          This project uses Hot Module Replacement (HMR). Edit{' '}
          <code>src/App.tsx</code> and save to test HMR
        </CardContent>
      </Card>
      <Card className='text-left'>
        <CardHeader>
          <CardTitle>Typescript</CardTitle>
        </CardHeader>
        <CardContent>Typescript is used for all</CardContent>
      </Card>
    </div>
  );
}

export default Info;
