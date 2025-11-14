'use client';

import { Suspense } from 'react';
import MyCouncilTopicDetailPageId from './MyCouncilTopicDetailPageId';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyCouncilTopicDetailPageId />
    </Suspense>
  );
}
