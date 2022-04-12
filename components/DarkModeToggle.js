import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Tooltip } from '@chakra-ui/react';
import {
	BsMoonStarsFill as MoonIcon,
	BsSunFill as SunIcon,
} from 'react-icons/bs';

export default function DarkModeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Tooltip label='Toggle theme' aria-label='A tooltip'>
			<IconButton
				size={'md'}
				aria-label='Toggle Mode'
				onClick={toggleColorMode}
				icon={
					colorMode === 'light' ? (
						<MoonIcon color='gray.400' />
					) : (
						<SunIcon color='orange' />
					)
				}></IconButton>
		</Tooltip>
	);
}
