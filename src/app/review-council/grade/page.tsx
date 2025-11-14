'use client';

import { Suspense } from 'react';
import ReviewCouncilDetailPage from './ReviewCouncilDetailPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReviewCouncilDetailPage />
    </Suspense>
  );
}
