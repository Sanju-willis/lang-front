// src\app\dashboard\page.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import CompanyForm from '@/components/CompanyForm';
import CompanyPage from './pages/CompanyPage';
import ProductsPage from './pages/ProductPage';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAssistantStore } from '@/stores/useAssistantStore';

export default function DashboardHome() {
  const { user, progress } = useAuthStore();
  const { sendMessage } = useAssistantStore();
  const [view, setView] = useState<'loading' | 'companyForm' | 'companyPage' | 'productsPage'>('loading');
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (!user || progress === undefined || hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    if (!progress) {
      setView('companyForm');
      sendMessage({ stage: 'create_company', step: 'form_opened' });
    } else {
      sendMessage({ stage: progress.stage, step: 'resume' });

      if (progress.stage === 'company_created') {
        setView('companyPage');
      } else if (progress.stage === 'items_added') {
        setView('productsPage');
      }
    }
  }, [user, progress]);

  if (view === 'loading') return null;

  return (
    <>
      {view === 'companyForm' && <CompanyForm onClose={() => setView('companyPage')} />}
      {view === 'companyPage' && <CompanyPage />}
      {view === 'productsPage' && <ProductsPage />}
    </>
  );
}
