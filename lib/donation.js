import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_ANON_KEY);

export async function insertDonation(obj) {
    const { data, error } = await supabase
        .from('donation')
        .insert([
            obj
        ]);
    if (error) throw error;
    if (data) return data;
}

export async function getDonations() {
    const { data, error } = await supabase
        .from('donation')
        .select()
        .order('created_at', { ascending: false })
    if (error) throw error;
    if (data) return data;
}
export async function getSingleDonation(id) {
    const { data, error } = await supabase
        .from('donation')
        .select()
        .is('id', id);
    if (error) throw error;
    if (data) return data;
}

export async function exportCSV(table) {
    const { data, error } = await supabase.from(table)
        .select()
        .csv()
    if (error) throw error;
    if (data) return data;
}