import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { theme } from '../styles/theme';
import { supabase } from '../utils/backend/supabaseClient';
import Head from 'next/head';
import { ColorModeScript } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			handleAuthChange(event, session);
			if (event === 'SIGNED_IN') {
				router.push('/account');
			}
			if (event === 'SIGNED_OUT') {
				router.push('/login');
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function handleAuthChange(event, session) {
		await fetch('/api/auth', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			credentials: 'same-origin',
			body: JSON.stringify({ event, session }),
		});
	}

	return (
		<>
			<ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
