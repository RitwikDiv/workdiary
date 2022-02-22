import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/dm-sans';

const theme = extendTheme({
	fonts: {
		heading: 'DM Sans, sans-serif',
		body: 'DM Sans, sans-serif',
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
