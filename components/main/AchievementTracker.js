import { Text, HStack, Box, Divider, Button } from '@chakra-ui/react';
import { HiOutlineSparkles as Award, HiPlus as Plus } from 'react-icons/hi';

export default function AchievementTracker() {
	return (
		<>
			<HStack
				justifyContent={'start'}
				align={'start'}
				width={'100%'}
				spacing={2}>
				<Box backgroundColor='orange.500' rounded={'md'} p={1}>
					<Award size={18} color={'white'}></Award>
				</Box>
				<Text variant='heading3'>Achievement Tracker</Text>
			</HStack>
			<Divider></Divider>
			<Button leftIcon={<Plus size={18}></Plus>} variant={'addAchievement'}>
				Add an achievement
			</Button>
		</>
	);
}
