import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {
	HiOutlineBriefcase as Work,
	HiOutlineSparkles as Award,
	HiOutlineSpeakerphone as Speaker,
	HiChevronDown as Down,
} from 'react-icons/hi';

export default function MenuSideNav({ setOption }) {
	return (
		<Menu isLazy matchWidth size={'md'}>
			<MenuButton
				as={Button}
				rightIcon={<Down />}
				width='100%'
				justifyContent='flex-start'>
				Navigation
			</MenuButton>
			<MenuList>
				<MenuItem
					fontWeight={'semibold'}
					fontSize='sm'
					icon={<Work size={18}></Work>}
					onClick={() => setOption('project')}>
					Project Tracker
				</MenuItem>
				<MenuItem
					fontWeight={'semibold'}
					fontSize='sm'
					icon={<Award size={18}></Award>}
					onClick={() => setOption('achievement')}>
					Achievement Tracker
				</MenuItem>
				<MenuItem
					fontWeight={'semibold'}
					fontSize='sm'
					icon={<Speaker size={18}></Speaker>}
					onClick={() => setOption('guidance')}>
					Professional Guidance
				</MenuItem>
			</MenuList>
		</Menu>
	);
}
