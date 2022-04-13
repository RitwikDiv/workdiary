import {
	Box,
	Button,
	Container,
	Divider,
	Icon,
	Image,
	SimpleGrid,
	Tag,
	TagLabel,
	TagLeftIcon,
	Text,
	useBreakpointValue,
	VStack,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
	BsAlarmFill as Alarm,
	BsAwardFill as Award,
	BsBarChartLineFill as Chart,
	BsBookmarksFill as Books,
	BsFillChatFill as Chat,
	BsStars as Party,
	BsCheckCircleFill as Check,
	BsPlusLg as Plus,
	BsCurrencyDollar as Dollar,
} from 'react-icons/bs';
import { FaGraduationCap as Scholar, FaMinus as Minus } from 'react-icons/fa';
import { RiPlantFill as Plant } from 'react-icons/ri';
import SimpleFooter from '../components/footers/SimpleFooter';
import HomeNav from '../components/navbars/HomeNav';
import { useState } from 'react';

export default function Home() {
	const router = useRouter();
	const [sliderValue, setSliderValue] = useState(10000);
	const [skills, setSkills] = useState([
		{
			name: 'Python',
			selected: false,
		},
		{
			name: 'Design Thinking',
			selected: true,
		},
		{ name: 'Figma', selected: true },
	]);
	return (
		<div>
			<Head>
				<title>WorkDiary Home</title>
				<meta name='description' content='Track your work properly' />
				<meta
					name='description'
					content='Free to use app to keep track of your work life and to map your career trajectory'></meta>
				<meta
					name='keywords'
					content='track work, professional growth, work skills, work logging, work diary,career mapping, resume generation'></meta>
			</Head>

			<main>
				<HomeNav></HomeNav>
				<Container
					maxWidth={'container.xl'}
					centerContent
					marginTop={20}
					marginBottom={20}>
					<VStack spacing={12}>
						<VStack maxWidth={'container.lg'} align={'center'} spacing={4}>
							<Image
								src='images/home.png'
								alt='Home Image'
								htmlHeight={'225px'}
								htmlWidth={'225px'}></Image>
							<Text
								variant='body'
								fontSize={'xl'}
								fontWeight={'semibold'}
								color={'textPrimary'}
								textAlign={'center'}>
								<Text as='span' color='purple.500'>
									WorkDiary
								</Text>{' '}
								is a free app for students & young professionals to{' '}
								<Text as='span' color='textTeritiary'>
									✔️ <u>track their projects</u>
								</Text>
								,{' '}
								<Text as='span' color='textTeritiary'>
									📈<u> monitor custom metrics</u>
								</Text>
								, and{' '}
								<Text as='span' color='textTeritiary'>
									📝<u> receive the proper feedback</u>
								</Text>{' '}
								to succeed in the corporate world.
							</Text>
							<Button
								leftIcon={<Party color='orange' />}
								variant={'outline'}
								onClick={(e) => {
									router.push('/login');
								}}>
								Get started for free!
							</Button>
						</VStack>
						<Divider></Divider>
						<VStack
							maxWidth={'container.xl'}
							align={'center'}
							spacing={4}
							marginBottom={20}>
							<Text fontSize='xs' color='primary' fontWeight={'extrabold'}>
								FEATURES
							</Text>
							<Text
								variant={'title'}
								fontSize='xl'
								color={'textPrimary'}
								width={400}
								align={'center'}>
								All the features you need to get ahead in your career!
							</Text>
							<SimpleGrid
								columns={useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3 })}
								spacing={10}
								padding={5}>
								<Box borderWidth={0.5} boxShadow={'sm'} borderRadius={'lg'}>
									<VStack spacing={2} align={'start'} p={5}>
										<Icon as={Check} h={6} w={6} color='purple.500' />
										<Text
											variant='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Keep track of all of your work!
										</Text>
										<Text as='del' variant='support' align={'start'}>
											A task-manager helps you keep track of your tasks and
											sub-tasks for each project!
										</Text>
									</VStack>
								</Box>
								<Box borderWidth={0.5} boxShadow={'sm'} borderRadius={'lg'}>
									<VStack p={5} spacing={2} align={'start'}>
										<Icon as={Alarm} h={6} w={6} color='red.500' />
										<Text
											as='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Keep your project deadlines
										</Text>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Worried about forgetting a task? Have us remind you!{' '}
											<Tag size={'sm'} variant='subtle' colorScheme='red'>
												<TagLeftIcon as={Alarm} />
												<TagLabel fontWeight={'semibold'}>Due today</TagLabel>
											</Tag>
										</Text>
									</VStack>
								</Box>
								<Box borderWidth={0.5} boxShadow={'sm'} borderRadius={'lg'}>
									<VStack p={5} spacing={2} align={'start'}>
										<Icon as={Books} h={6} w={6} color='blue.500' />
										<Text
											as='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Keep track of your skill progression
										</Text>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Track of all the technical/soft skills you used{' '}
											{skills.map((skillItem) => {
												return (
													<>
														<Tag
															key={skillItem.name}
															size={'sm'}
															variant={
																skillItem.selected === true
																	? 'subtle'
																	: 'outline'
															}
															colorScheme='blue'>
															<TagLeftIcon
																as={skillItem.selected === true ? Minus : Plus}
															/>
															<TagLabel fontWeight={'bold'}>
																{skillItem.name}
															</TagLabel>
														</Tag>{' '}
													</>
												);
											})}
										</Text>
									</VStack>
								</Box>
								<Box borderWidth={0.5} boxShadow={'sm'} borderRadius={'lg'}>
									<VStack p={5} spacing={2} align={'start'}>
										<Icon as={Award} h={6} w={6} color='yellow.500' />
										<Text
											as='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Celebrate <u>all</u> of your achievements
										</Text>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Doesn&apos;t matter how big or small{'  '}
											<Tag size={'sm'} variant='subtle' colorScheme='yellow'>
												<TagLeftIcon as={Scholar} />
												<TagLabel fontWeight={'semibold'}>Scholarship</TagLabel>
											</Tag>{' '}
											<Tag size={'sm'} variant='subtle' colorScheme='purple'>
												<TagLeftIcon as={Award} />
												<TagLabel fontWeight={'semibold'}>Award</TagLabel>
											</Tag>{' '}
											<Tag size={'sm'} variant='subtle' colorScheme='pink'>
												<TagLeftIcon as={Chat} />
												<TagLabel fontWeight={'semibold'}>Compliment</TagLabel>
											</Tag>{' '}
										</Text>
									</VStack>
								</Box>
								<Box borderWidth={0.5} boxShadow={'sm'} borderRadius={'lg'}>
									<VStack p={5} spacing={2} align={'start'}>
										<Icon as={Chart} h={6} w={6} color='tomato' />
										<Text
											as='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Quantify your impact with custom metrics
										</Text>
										<Slider
											aria-label='slider-ex-3'
											min={0}
											size={'md'}
											max={50000}
											step={5000}
											mt={'-10'}
											onChange={(val) => setSliderValue(val)}
											defaultValue={10000}>
											<SliderTrack bg='red.100'>
												<SliderFilledTrack bg='tomato' />
											</SliderTrack>
											<SliderThumb boxSize={4}>
												<Box color='tomato' as={Dollar} />
											</SliderThumb>
										</Slider>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Quarterly Sales Goal: {sliderValue.toLocaleString()}$ /
											50,000$
										</Text>
									</VStack>
								</Box>
								<Box borderWidth={0.5} boxShadow={'sm'} borderRadius={'lg'}>
									<VStack p={5} spacing={2} align={'start'}>
										<Icon as={Plant} h={6} w={6} color='teal.500' />
										<Text
											as='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Get personal feedback for growth
										</Text>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Guides to help you with your weaknesses like{' '}
											<Tag size={'sm'} variant='subtle' colorScheme='teal'>
												<TagLabel fontWeight={'semibold'}>
													Building Trust
												</TagLabel>
											</Tag>{' '}
											<Tag size={'sm'} variant='subtle' colorScheme='teal'>
												<TagLabel fontWeight={'semibold'}>
													Running Meetings
												</TagLabel>
											</Tag>{' '}
										</Text>
									</VStack>
								</Box>
							</SimpleGrid>
						</VStack>
						<Divider></Divider>
						<VStack
							maxWidth={'container.md'}
							align={'center'}
							spacing={4}
							marginBottom={20}>
							<Text fontSize='xs' color='primary' fontWeight={'extrabold'}>
								FAQ
							</Text>
							<Text
								variant={'title'}
								fontSize='xl'
								color={'textPrimary'}
								width={400}
								align={'center'}>
								Still got any more questions?
							</Text>
						</VStack>
					</VStack>
				</Container>
				<SimpleFooter></SimpleFooter>
			</main>
		</div>
	);
}
