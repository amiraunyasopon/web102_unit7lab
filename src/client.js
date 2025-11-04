import { createClient } from '@supabase/supabase-js'

const URL = 'https://ucmtxnxsrxszdqkypmkc.supabase.co'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbXR4bnhzcnhzemRxa3lwbWtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMjQ3NTMsImV4cCI6MjA3NzgwMDc1M30.Ygq2vEvFh-R2GguluBemLUy374ipapygnoh2cHtSE7k'

export const supabase = createClient(URL, API_KEY)