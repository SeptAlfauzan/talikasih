import { createClient } from '@supabase/supabase-js'
import * as jose from "jose";
import * as bcrypt from "bcrypt";
import * as jsonwebtoken from "jsonwebtoken";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_ANON_KEY);

export async function login(arg) {
    const { username, password } = arg;
    const { data, error } = await supabase
        .from('admin')
        .select()
        .match({ username });

    const compare = bcrypt.compareSync(password, data[0].password);
    if (!compare) throw { message: 'Password salah' };
    if (error) throw error;
    if (compare) return jsonwebtoken.sign({
        data: {
            username
        }
    }, 'secret', { expiresIn: 60 * 60 * 24 });
}