import React from 'react';
import FeatureClientPage from './feature-client-page';

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <FeatureClientPage slug={slug} />;
}
