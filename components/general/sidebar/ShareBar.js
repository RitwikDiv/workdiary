import { Button, Image, useBreakpointValue, VStack } from '@chakra-ui/react';
import { BiShareAlt as Share } from 'react-icons/bi';
import { BsTwitter as Twitter } from 'react-icons/bs';

export default function ShareBar() {
	return (
		<VStack
			width={'100%'}
			hidden={useBreakpointValue({ sm: true, md: false })}
			borderWidth={'1px'}
			rounded={'md'}
			padding={4}
			spacing={4}>
			<Image
				src='images/share.png'
				alt='Share with friends image'
				htmlHeight={'100px'}
				htmlWidth={'100px'}></Image>
			<VStack spacing={2} width={'100%'}>
				<Button
					leftIcon={<Twitter size={18} color='#00acee'></Twitter>}
					fontSize='sm'
					variant={'outline'}
					width='100%'>
					Share on Twitter
					{/* <TwitterShareButton
						title={
							'Everyone should checkout Workdiary! It is the best way to track your projects and professional achievements.'
						}
						url={'https://workdiary.app'}
						hashtags={['workdiary', 'worklife']}>
						Share on Twitter
					</TwitterShareButton> */}
				</Button>
				<Button
					leftIcon={<Share size={18}></Share>}
					fontSize='sm'
					variant={'outline'}
					width='100%'>
					Invite a friend
				</Button>
			</VStack>
		</VStack>
	);
}
