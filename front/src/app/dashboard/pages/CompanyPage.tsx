// src/app/dashboard/pages/CompanyPage.tsx
'use client';

import { useAuthStore } from '@/stores/useAuthStore';
import { useAssistantStore } from '@/stores/useAssistantStore';
import { Button } from '@/components/ui/button';

export default function CompanyPage() {
  const { company } = useAuthStore();
  const { sendMessage } = useAssistantStore();

  const handleNext = () => {
    sendMessage({ stage: 'company_created', step: 'next_clicked' });
    // Could update progress to 'items_added' if needed
  };

  if (!company) return <p>Loading company data...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Company Info</h2>
      <p><strong>Name:</strong> {company.name}</p>
      <p><strong>ID:</strong> {company._id}</p>

      <Button className="mt-4" onClick={handleNext}>
        Continue to Add Products
      </Button>
    </div>
  );
}
