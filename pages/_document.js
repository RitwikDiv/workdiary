import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '../styles/theme';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet='UTF-8' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
