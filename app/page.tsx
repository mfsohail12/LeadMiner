"use client";
import DashboardHeader from "@/components/DashboardHeader";
import EmailModal from "@/components/EmailModal";
import LeadInput from "@/components/LeadInput";
import LeadTable from "@/components/LeadTable";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

const Dashboard: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);

  // Sample leads data - you'll replace this with Supabase data
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 1,
      company_name: "HealthTech AI",
      website_url: "https://healthtech-ai.com",
      email: "contact@healthtech-ai.com",
      description: "AI-powered patient diagnosis platform",
      instagram_url: null,
      facebook_url: null,
      linkedin_url: null,
      enriched_emails: null,
      inserted_at: "today",
    },
  ]);

  const handleGenerateLeads = (): void => {
    setIsGenerating(true);
    // Your lead generation logic here
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const handleGenerateEmail = (lead: Lead): void => {
    setSelectedLead(lead);
    setShowEmailModal(true);
  };

  const handleExportCSV = (): void => {
    // Your CSV export logic here
    console.log("Exporting leads as CSV...");
  };

  const sampleEmailContent: string = `Subject: Exploring Partnership Opportunities

Hi ${selectedLead?.company_name} Team,

I came across your company and was impressed by your work in the healthcare AI space. I believe there could be valuable synergies between our organizations.

Would you be open to a brief call to discuss potential collaboration opportunities?

Best regards`;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />

        <LeadInput
          keyword={keyword}
          isGenerating={isGenerating}
          onKeywordChange={setKeyword}
          onGenerate={handleGenerateLeads}
        />

        <LeadTable
          leads={leads}
          onGenerateEmail={handleGenerateEmail}
          onExportCSV={handleExportCSV}
        />
      </div>

      <EmailModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        emailContent={sampleEmailContent}
        leadName={selectedLead?.company_name}
      />
    </div>
  );
};

export default Dashboard;
