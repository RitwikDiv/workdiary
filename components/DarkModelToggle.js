import {
	BsSunFill as SunIcon,
	BsFillMoonStarsFill as MoonIcon,
} from 'react-icons/bs';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';

export default function DarkModelToggle() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<IconButton
			size={'md'}
			aria-label='Toggle Mode'
			onClick={toggleColorMode}
			icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}></IconButton>
	);
}
