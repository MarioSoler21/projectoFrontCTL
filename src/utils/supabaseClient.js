// npm install @supabase/supabase-js
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://mfpxlpdmfijdsljovgrf.supabase.co"
    ,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mcHhscGRtZmlqZHNsam92Z3JmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTUyMjYyNSwiZXhwIjoyMDY1MDk4NjI1fQ.dYZKxG7rwZ6dkGsL5MVh2tBveY8grmvaxnFtIbuGcKA")