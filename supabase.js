import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oiblyjfrfkmrzyrzfkcj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pYmx5amZyZmttcnp5cnpma2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NTMzNjUsImV4cCI6MjA2MjUyOTM2NX0.zrSMgqk8gLhTMiKt2UlZSVPt92_-wUeW9van-Q7kDiw'
export const supabase = createClient(supabaseUrl, supabaseKey)
