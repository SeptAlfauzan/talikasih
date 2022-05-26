import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_ANON_KEY);

export async function getMembers() {
    const { data, error } = await supabase
        .from('members')
        .select()
        .order('created_at', { ascending: false })
    if (error) return error;
    if (data) return data;
}

export async function insertMember(obj) {
    const { data, error } = await supabase
        .from('members')
        .insert([
            obj
        ]);
    if (error) return data;
    if (data) return data;
}
export async function deleteMember(id) {
    const { data, error } = await supabase
        .from('member')
        .delete()
        .match({ id })
    if (error) return data;
    if (data) return data;
}