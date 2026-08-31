import React from 'react';
import { notFound } from 'next/navigation';
import { whyUsFeatures as features } from "@/lib/constants";
import FeatureClientPage from './feature-client-page';

export async function generateStaticParams() {
  return features.map((feature) => ({
    slug: feature.id,
  }));
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <FeatureClientPage slug={slug} />;
}
