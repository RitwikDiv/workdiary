import { Text, VStack, Image, useBreakpointValue } from '@chakra-ui/react';

export default function EmptyCondition() {
	return (
		<VStack
			spacing={4}
			width={useBreakpointValue({ base: '100%', md: '50%' })}
			margin={'auto'}>
			<Image
				src='images/achievements.png'
				alt='Error Image'
				htmlHeight={'200px'}
				htmlWidth={'200px'}></Image>
			<VStack spacing={2}>
				<Text variant={'title'}>Cherish your progress</Text>
				<Text variant={'body'} textAlign={'center'}>
					Making a note of even the smallest achivements will boost your
					self-confidence!
				</Text>
			</VStack>
		</VStack>
	);
}
