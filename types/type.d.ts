declare interface Lead {
  id: number;
  company_name: string;
  website_url: string;
  description: string | null;
  email: string;
  instagram_url: string | null;
  facebook_url: string | null;
  linkedin_url: string | null;
  enriched_emails: Contact[] | null;
  inserted_at: string;
}

declare interface Contact {
  first_name: string;
  last_name: string;
  position: string;
  email: string;
}
