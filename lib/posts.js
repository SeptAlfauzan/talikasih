import { createClient } from '@supabase/supabase-js'

const { SUPABASE_URL } = process.env;
console.log(SUPABASE_URL)
const supabase = createClient(process.env.SUPABASE_URL, process.env.ANON_KEY);

export async function supabaseGetFile() {
    const { data, error } = await supabase.storage.from('posts').list('folders', {
        limit: 100,
        offset: 0,
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
    if (error) return data;
    if (data) return data;
}

export async function getPosts() {
    const { data, error } = await supabase
        .from('reports')
        .select()
    if (error) return error;
    if (data) return data;
}
export async function getSinglePost(id) {
    const { data, error } = await supabase
        .from('reports')
        .select()
        .is('id', id);
    if (error) return error;
    if (data) return data;
}