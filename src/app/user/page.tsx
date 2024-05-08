'use client'

import GetToken from '@/components/accessToken';
import { Suspense } from 'react';

export default function UserPage () {
  return (
    <div>
      <h1>User Page</h1>
      <Suspense fallback='Loading...'>
        <GetToken />
      </Suspense>
    </div>
  );
}
