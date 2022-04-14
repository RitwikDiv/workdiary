import '@fontsource/dm-sans';
import { extendTheme } from '@chakra-ui/react';
import Button from './components/button';
import Text from './components/text';
import Link from './components/link';

export const theme = extendTheme({
	initialColorMode: 'light',
	useSystemColorMode: true,
	fonts: {
		heading: 'DM Sans, sans-serif',
		body: 'DM Sans, sans-serif',
	},
	semanticTokens: {
		colors: {
			primary: 'purple.500',
			textPrimary: {
				default: 'gray.700',
				_dark: 'gray.200',
			},
			textSecondary: {
				default: 'gray.600',
				_dark: 'gray.300',
			},
			textTeritiary: {
				default: 'gray.500',
				_dark: 'gray.400',
			},
			sbBackground: {
				default: 'white',
				_dark: 'gray.700',
			},
		},
	},
	components: { Button, Text, Link },
});
