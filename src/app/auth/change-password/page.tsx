'use client';

import { Suspense } from 'react';
import FirstLoginPage from './FirstLoginPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FirstLoginPage />
    </Suspense>
  );
}
