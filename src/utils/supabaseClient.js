// npm install @supabase/supabase-js
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://mfpxlpdmfijdsljovgrf.supabase.co"
    ,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mcHhscGRtZmlqZHNsam92Z3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MjI2MjUsImV4cCI6MjA2NTA5ODYyNX0.9Q_1vb-8OrFCF3RfRWEmA1-LNDHj7VhCGvin1Sn31mg")