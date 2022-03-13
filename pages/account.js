import { supabase } from '../utils/backend/supabaseClient';
import { Text } from '@chakra-ui/react';

export default function Account({ user }) {
	return <Text variant='title'>Hello from protected {user.email}</Text>;
}

export async function getServerSideProps({ req }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	if (!user) {
		return { props: {}, redirect: { destination: '/login' } };
	}
	return { props: { user } };
}
