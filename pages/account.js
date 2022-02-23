import { supabase } from '../utils/backend/supabaseClient';

export default function Account({ user }) {
	return (
		<div style={{ maxWidth: '420px', margin: '96px auto' }}>
			<h2>Hello from protected {user.email}</h2>
		</div>
	);
}

export async function getServerSideProps({ req }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	if (!user) {
		return { props: {}, redirect: { destination: '/login' } };
	}
	return { props: { user } };
}
