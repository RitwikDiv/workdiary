import { supabase } from '../../utils/backend/supabaseClient';

export default function handler(req, res) {
	supabase.auth.api.setAuthCookie(req, res);
}
