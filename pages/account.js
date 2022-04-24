import { supabase } from '../utils/backend/supabaseClient';

export default function Account({ user }) {
	return <>{user.id}</>;
}

export async function getServerSideProps({ req }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	if (!user) {
		return { props: {}, redirect: { destination: '/login' } };
	}
	return { props: { user } };
}
