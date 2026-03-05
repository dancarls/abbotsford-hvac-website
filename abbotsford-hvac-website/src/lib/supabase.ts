
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a mock client if credentials are missing to prevent app-wide crashes
// Components should check if the client is valid before making calls
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        from: () => ({
            select: () => ({
                eq: () => ({
                    single: () => Promise.resolve({ data: null, error: new Error('Supabase credentials missing') }),
                    order: () => Promise.resolve({ data: [], error: new Error('Supabase credentials missing') })
                }),
                order: () => Promise.resolve({ data: [], error: new Error('Supabase credentials missing') })
            }),
            insert: () => Promise.resolve({ data: null, error: new Error('Supabase credentials missing') }),
            update: () => Promise.resolve({ data: null, error: new Error('Supabase credentials missing') }),
            delete: () => Promise.resolve({ data: null, error: new Error('Supabase credentials missing') })
        }),
        auth: {
            getSession: () => Promise.resolve({ data: { session: null }, error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } })
        }
    } as any;
