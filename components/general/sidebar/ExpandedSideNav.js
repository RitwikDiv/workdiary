import { Button, VStack } from '@chakra-ui/react';
import {
	HiOutlineBriefcase as Work,
	HiOutlineSparkles as Award,
	HiOutlineSpeakerphone as Speaker,
} from 'react-icons/hi';

export default function ExpandedSideNav({ setOption }) {
	return (
		<VStack
			width={'100%'}
			borderWidth={'1px'}
			rounded={'md'}
			padding={4}
			spacing={2}>
			<Button
				leftIcon={<Work size={18}></Work>}
				_hover={{
					color: 'blue.500',
					bgColor: 'blue.50',
					borderWidth: '1px',
					borderColor: 'blue.500',
					_dark: { color: 'blue.50', bgColor: 'blue.800' },
				}}
				size='sm'
				variant={'ghost'}
				width='100%'
				onClick={() => setOption('project')}
				justifyContent='flex-start'>
				Project Tracker
			</Button>
			<Button
				leftIcon={<Award size={18}></Award>}
				_hover={{
					color: 'orange.500',
					bgColor: 'orange.50',
					borderWidth: '1px',
					borderColor: 'orange.500',
					_dark: { color: 'orange.50', bgColor: 'orange.800' },
				}}
				size='sm'
				variant={'ghost'}
				width='100%'
				onClick={() => setOption('achievement')}
				justifyContent='flex-start'>
				Achievement Tracker
			</Button>
			<Button
				leftIcon={<Speaker size={18}></Speaker>}
				_hover={{
					color: 'green.500',
					bgColor: 'green.50',
					borderWidth: '1px',
					borderColor: 'green.500',
					_dark: { color: 'green.50', bgColor: 'green.800' },
				}}
				size='sm'
				variant={'ghost'}
				width='100%'
				onClick={() => setOption('guidance')}
				justifyContent='flex-start'>
				Professional Guidance
			</Button>
		</VStack>
	);
}
