import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	Icon,
	Image,
	SimpleGrid,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Stat,
	StatArrow,
	StatGroup,
	StatHelpText,
	StatLabel,
	StatNumber,
	Tag,
	TagLabel,
	TagLeftIcon,
	Text,
	useBreakpointValue,
	VStack,
	Stack,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Spacer,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
	BsAwardFill as Award,
	BsBarChartLineFill as Chart,
	BsBookFill as Book,
	BsBookmarksFill as Books,
	BsBriefcaseFill as Briefcase,
	BsCheckSquareFill as Check,
	BsFillChatFill as Chat,
	BsPlusLg as Plus,
	BsStars as Party,
} from 'react-icons/bs';
import { FaMinus as Minus, FaUserCircle as User } from 'react-icons/fa';
import { RiPlantFill as Plant } from 'react-icons/ri';
import { SiTarget as Target } from 'react-icons/si';
import SimpleFooter from '../components/footers/SimpleFooter';
import HomeNav from '../components/navbars/HomeNav';
import SkillCell from '../components/skill/SkillCell';

export default function Home() {
	const router = useRouter();
	const [sliderValue, setSliderValue] = useState(3);
	const [checked, setChecked] = useState(false);
	const [totalTasks, setTotalTasks] = useState(68);

	useEffect(() => {
		if (checked) setTotalTasks(69);
		else setTotalTasks(68);
	}, [checked, totalTasks]);

	const [skills, setSkills] = useState([
		{ name: 'Customer Journey Mapping', selected: true },
		{ name: 'Figma', selected: true },
		{ name: 'Adobe XD', selected: false },
	]);
	return (
		<div>
			<Head>
				<title>WorkDiary</title>
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
					minWidth={'container.xs'}
					centerContent
					marginTop={20}
					marginBottom={20}>
					<VStack spacing={12}>
						<VStack maxWidth={'container.lg'} align={'center'} spacing={4}>
							<Image
								src='images/home.png'
								alt='Home Image'
								htmlHeight={'300px'}
								htmlWidth={'300px'}></Image>
							<Text
								variant='body'
								fontSize={'lg'}
								fontWeight={'semibold'}
								color={'textPrimary'}
								textAlign={'center'}>
								<Text as='span' color='purple.500'>
									WorkDiary
								</Text>{' '}
								is a free app for students & professionals to{' '}
								<Text as='span' color='textTeritiary'>
									✔️ track their projects
								</Text>
								,{' '}
								<Text as='span' color='textTeritiary'>
									📈 monitor custom metrics
								</Text>
								, &{' '}
								<Text as='span' color='textTeritiary'>
									📝 receive personal guidance
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
						<VStack maxWidth={'container.xl'} align={'center'} spacing={4}>
							<Text fontSize='xs' color='primary' fontWeight={'extrabold'}>
								FEATURES
							</Text>
							<Text
								variant={'title'}
								fontSize='xl'
								color={'textPrimary'}
								align={'center'}>
								Everything you need to get ahead in your career!
							</Text>
							<SimpleGrid
								columns={useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3 })}
								spacing={4}>
								<Box borderWidth={0.5} boxShadow={'xs'} borderRadius={'md'}>
									<VStack p={4} spacing={2} align={'start'}>
										<Icon as={Check} h={6} w={6} color='purple.500' />
										<Text
											variant='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Keep track of all your work
										</Text>
										<Text variant='support' align={'start'}>
											A task-manager helps you break down your projects into
											sub-tasks to help you stay organized
										</Text>
										<Divider></Divider>
										<Stack direction='row' variant='support' align={'start'}>
											<Checkbox
												colorScheme={'purple'}
												isChecked={checked}
												as={checked === true ? 's' : ''}
												onChange={(e) => setChecked(!checked)}>
												<Text variant='support'>
													Create a pull-request into the main git branch
												</Text>
											</Checkbox>
										</Stack>
									</VStack>
								</Box>
								<Box borderWidth={0.5} boxShadow={'xs'} borderRadius={'md'}>
									<VStack p={4} spacing={2} align={'start'}>
										<Icon as={Books} h={6} w={6} color='blue.500' />
										<Text
											as='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Track your skill progression
										</Text>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Identify the hard and soft skills you employed to finish a
											task and observe your progression over time
										</Text>
										<Divider></Divider>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											{skills.map((skillItem) => {
												return (
													<>
														<SkillCell
															name={skillItem.name}
															selected={skillItem.selected}
														/>{' '}
													</>
												);
											})}
										</Text>
									</VStack>
								</Box>
								<Box borderWidth={0.5} boxShadow={'xs'} borderRadius={'md'}>
									<VStack p={4} spacing={2} align={'start'}>
										<Icon as={Award} h={6} w={6} color='yellow.500' />
										<Text
											as='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Celebrate all of your achievements
										</Text>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Celebrate accomplishments to increase motivation and
											satisfaction in your role
										</Text>
										<Divider></Divider>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											<Tag size={'sm'} variant='subtle' colorScheme='yellow'>
												<TagLeftIcon as={Briefcase} />
												<TagLabel fontWeight={'semibold'}>Promotion</TagLabel>
											</Tag>{' '}
											<Tag size={'sm'} variant='subtle' colorScheme='purple'>
												<TagLeftIcon as={Award} />
												<TagLabel fontWeight={'semibold'}>Award</TagLabel>
											</Tag>{' '}
											<Tag size={'sm'} variant='subtle' colorScheme='pink'>
												<TagLeftIcon as={Chat} />
												<TagLabel fontWeight={'semibold'}>Compliment</TagLabel>
											</Tag>{' '}
											<Tag size={'sm'} variant='subtle' colorScheme='blue'>
												<TagLeftIcon as={Book} />
												<TagLabel fontWeight={'semibold'}>Grant</TagLabel>
											</Tag>{' '}
										</Text>
									</VStack>
								</Box>
								<Box borderWidth={0.5} boxShadow={'xs'} borderRadius={'md'}>
									<VStack p={4} spacing={2} align={'start'}>
										<Icon as={Chart} h={6} w={6} color='red.500' />
										<Text
											as='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											View your productivity statistics
										</Text>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Unique metrics make it easy to view how you&apos;re doing
											on a daily basis
										</Text>
										<Divider></Divider>
										<StatGroup w={'full'}>
											<Stat>
												<StatLabel fontWeight={'bold'}>
													Completed Tasks
												</StatLabel>
												<StatNumber>{totalTasks}</StatNumber>
												<StatHelpText>
													<StatArrow type='increase' />
													April 2022
												</StatHelpText>
											</Stat>
											<Stat>
												<StatLabel fontWeight={'bold'}>Closed Ratio</StatLabel>
												<StatNumber>
													{((totalTasks / 94) * 100).toFixed(0)} %
												</StatNumber>
												<StatHelpText>
													<StatArrow type='decrease' />
													April 2022
												</StatHelpText>
											</Stat>
										</StatGroup>
									</VStack>
								</Box>
								<Box borderWidth={0.5} boxShadow={'xs'} borderRadius={'md'}>
									<VStack p={4} spacing={2} align={'start'}>
										<Icon as={Target} h={6} w={6} color='tomato' />
										<Text
											as='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Quantify your progress with custom metrics
										</Text>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Create dynamic sliders for every task to actively keep
											track of your progress
										</Text>
										<Divider marginBottom={5}></Divider>
										<Slider
											aria-label='slider-ex-2'
											min={0}
											size={'lg'}
											max={15}
											step={1}
											onChange={(val) => setSliderValue(val)}
											defaultValue={sliderValue}>
											<SliderTrack bg='red.100'>
												<SliderFilledTrack bg='tomato' />
											</SliderTrack>
											<SliderThumb boxSize={6}>
												<Box color='tomato' as={User} />
											</SliderThumb>
										</Slider>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Conduct 15 User Interviews: {sliderValue.toLocaleString()}{' '}
											/ 15
										</Text>
									</VStack>
								</Box>
								<Box borderWidth={0.5} boxShadow={'xs'} borderRadius={'md'}>
									<VStack p={4} spacing={2} align={'start'}>
										<Icon as={Plant} h={6} w={6} color='green.500' />
										<Text
											as='body'
											fontWeight={'semibold'}
											color='textPrimary'
											align={'start'}>
											Get feedback for personal growth
										</Text>
										<Text variant='support' lineHeight={'tall'} align={'start'}>
											Step-by-step solutions for your specific needs
										</Text>
										{/* <Divider></Divider> */}
										<Tabs
											variant='soft-rounded'
											size={'sm'}
											isFitted
											p={1.5}
											borderWidth={1}
											rounded={'md'}
											colorScheme='green'>
											<TabList size='sm'>
												<Tab fontWeight={'semibold'}>Conflict Resolution</Tab>
												<Tab fontWeight={'semibold'}>Running Meetings</Tab>
											</TabList>
											<TabPanels size='sm'>
												<TabPanel>
													<Text marginTop={'-2'} variant='support'>
														Conflicts arise for a variety of reasons. Follow
														these steps ...
													</Text>
												</TabPanel>
												<TabPanel>
													<Text marginTop={'-2'} variant='support'>
														Running meetings is no easy work. You need to do the
														following ...{' '}
													</Text>
												</TabPanel>
											</TabPanels>
										</Tabs>
									</VStack>
								</Box>
							</SimpleGrid>
						</VStack>
						<Divider></Divider>
						<VStack
							maxWidth={'container.xl'}
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
								align={'center'}>
								Still got any more questions?
							</Text>
							<Accordion
								defaultIndex={[0, 1, 2]}
								minWidth={'container.xs'}
								maxWidth={'container.lg'}>
								<AccordionItem p={1}>
									<AccordionButton>
										<Text variant={'body'} fontWeight={'extrabold'}>
											Why is it free?
										</Text>
									</AccordionButton>
									<AccordionPanel>
										<Text variant='body'>
											We&apos;re building WorkDiary for ourselves, because we
											feel something is missing as we enter the workforce. We
											need a holistic application that helps us fully capture
											and communicate our work.{' '}
											<Text as='span'>
												<u>We don&apos;t sell your information to anyone.</u>
											</Text>
										</Text>
									</AccordionPanel>
								</AccordionItem>
								<AccordionItem p={1}>
									<AccordionButton>
										<Text variant={'body'} fontWeight={'extrabold'}>
											Why do I need WorkDiary?
										</Text>
									</AccordionButton>
									<AccordionPanel>
										<Text variant='body'>
											WorkDiary helps you stay on top of our tasks and perform
											better each day, making you feel more prepared and
											confident at work. It also guides you to develop the
											sustainable habit of reflecting and gaining feedback,
											increasing self-awareness. It&apos;s extremely easy to
											track past achievements and personal development. And the
											best part – everything is accurately tracked through
											metrics, making it easy to craft the perfect resume and
											shine during the end-of-year evaluations, putting you a
											leg above the competition for future interviews.
										</Text>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</VStack>
					</VStack>
				</Container>
				<SimpleFooter></SimpleFooter>
			</main>
		</div>
	);
}
