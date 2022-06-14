import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Tooltip } from '@chakra-ui/react';
import { CgMoon as MoonIcon, CgSun as SunIcon } from 'react-icons/cg';

export default function DarkModeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Tooltip label='Toggle theme' aria-label='A tooltip'>
			<IconButton
				size={'md'}
				variant='ghost'
				aria-label='Toggle Mode'
				onClick={toggleColorMode}
				icon={
					colorMode === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />
				}></IconButton>
		</Tooltip>
	);
}
