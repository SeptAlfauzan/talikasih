import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_ANON_KEY);

export async function login(arg) {
    const { username, password } = arg;
    const { data, error } = await supabase
        .from('admin')
        .select()
        .match({ username });
    if (error) throw error;
    console.log(data);
}