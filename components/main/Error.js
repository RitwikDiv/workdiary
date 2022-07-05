import { Text, VStack, Image } from '@chakra-ui/react';

export default function Error() {
	return (
		<VStack spacing={4} width='350px' margin={'auto'}>
			<Image
				src='images/500.png'
				alt='Error Image'
				htmlHeight={'250px'}
				htmlWidth={'250px'}></Image>
			<VStack spacing={2}>
				<Text variant={'title'}>How did you even get here?</Text>
				<Text variant={'body'} textAlign='center'>
					You weren&apos;t meant to see this. Please let us know so that we can
					fix it!
				</Text>
			</VStack>
		</VStack>
	);
}
