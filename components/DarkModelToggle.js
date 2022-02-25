import {
	BsSunFill as SunIcon,
	BsFillMoonStarsFill as MoonIcon,
} from 'react-icons/bs';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';

export default function DarkModelToggle() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Button aria-label='Toggle Mode' onClick={toggleColorMode}>
			{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
		</Button>
	);
}
