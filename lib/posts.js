import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_ANON_KEY);

export async function supabaseGetFile() {
    const { data, error } = await supabase.storage.from('posts').list('folders', {
        sortBy: { column: 'name', order: 'asc' },
    });
    console.log(data)
    return data;
}

export async function insertPost(obj) {
    const { data, error } = await supabase
        .from('reports')
        .insert([
            obj
        ]);
    if (error) throw error;
    if (data) return data;
}

export async function getPosts() {
    const { data, error } = await supabase
        .from('reports')
        .select()
        .order('created_at', { ascending: false })
    if (error) throw error;
    if (data) return data;
}
export async function getSinglePost(id) {
    const { data, error } = await supabase
        .from('reports')
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