'use client';

import { Suspense } from 'react';
import MyCouncilTopicDetailPage from './MyCouncilTopicDetailPage';

export default function Page() {
  return (
	<Suspense fallback={<div>Loading...</div>}>
	  <MyCouncilTopicDetailPage />
	</Suspense>
  );
}
