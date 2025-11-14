'use client';

import { Suspense } from 'react';
import OAuth2FailurePage from './failPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OAuth2FailurePage/>
    </Suspense>
  );
}
