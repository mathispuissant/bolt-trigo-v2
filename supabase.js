import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mcoiuwxlwpxjmavyfvpu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jb2l1d3hsd3B4am1hdnlmdnB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzMwMjgsImV4cCI6MjA1NTQ0OTAyOH0.0RrIv2KWnxXs39Jg9JcVje89D-cCZ8F81qPpSehEoyk';

const supabase = createClient(supabaseUrl, supabaseKey);

// Exemple de requête : récupérer tous les enregistrements d'une table "test"
async function fetchData() {
  const { data, error } = await supabase
    .from('test')
    .select('*');

  if (error) {
    console.error('Erreur:', error);
  } else {
    console.log('Données:', data);
  }
}

fetchData();
