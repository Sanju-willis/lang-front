// src/app/dashboard/pages/ProductsPage.tsx
'use client';

import { useEffect } from 'react';
import { useAssistantStore } from '@/stores/useAssistantStore';

export default function ProductsPage() {
  const { sendMessage } = useAssistantStore();

  useEffect(() => {
    sendMessage({ stage: 'items_added', step: 'products_page_loaded' });
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Products</h2>
      <p className="text-muted-foreground">Product listing and editing will go here.</p>
      {/* Add product form or list here later */}
    </div>
  );
}
