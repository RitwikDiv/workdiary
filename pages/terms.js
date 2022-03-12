import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Container,
	Image,
	Link,
	ListItem,
	Text,
	UnorderedList,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SimpleNav from '../components/navbars/SimpleNav';

export default function PrivacyPolicy() {
	return (
		<>
			<Head>
				<title>Terms & Conditions | WorkDiary</title>
				<meta
					name='description'
					content='Terms & Conditions for Workdiary.app'></meta>
				<meta
					name='keywords'
					content='Workdiary, Terms, Conditions, terms of service'></meta>
			</Head>
			<Container maxWidth={'container.lg'}>
				<SimpleNav />
				<VStack align='start' spacing={4}>
					<VStack align={'center'} spacing={2}>
						<Text variant={'title'}>Terms & Conditions</Text>
						<Text variant={'support'}>Last updated: March 11, 2022</Text>
						<Image
							src='terms.png'
							alt='Terms & Conditions Image'
							htmlHeight={'200px'}
							htmlWidth={'250px'}></Image>
						<Text variant='body'>
							These terms and conditions (“Agreement”) set forth the general
							terms and conditions of your use of the{' '}
							<Link href='https://workdiary.app' isExternal>
								workdiary.app
							</Link>{' '}
							website (“Website” or “Service”) and any of its related products
							and services (collectively, “Services”). This Agreement is legally
							binding between you (“User”, “you” or “your”) and this Website
							operator (“Operator”, “we”, “us” or “our”). If you are entering
							into this agreement on behalf of a business or other legal entity,
							you represent that you have the authority to bind such entity to
							this agreement, in which case the terms “User”, “you” or “your”
							shall refer to such entity. If you do not have such authority, or
							if you do not agree with the terms of this agreement, you must not
							accept this agreement and may not access and use the Website and
							Services. By accessing and using the Website and Services, you
							acknowledge that you have read, understood, and agree to be bound
							by the terms of this Agreement. You acknowledge that this
							Agreement is a contract between you and the Operator, even though
							it is electronic and is not physically signed by you, and it
							governs your use of the Website and Services. This terms and
							conditions policy was created with the help of the{' '}
							<Link
								isExternal
								href='https://www.websitepolicies.com/terms-and-conditions-generator'>
								terms and conditions generator
							</Link>
							.
						</Text>
					</VStack>
					<Accordion allowToggle width={'100%'}>
						<AccordionItem>
							<AccordionButton
								_expanded={{ bg: useColorModeValue('gray.100', 'gray.700') }}>
								<Text variant={'heading2'}>Accounts and membership</Text>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<Text variant='body'>
									You must be at least 18 years of age to use the Website and
									Services. By using the Website and Services and by agreeing to
									this Agreement you warrant and represent that you are at least
									18 years of age. If you create an account on the Website, you
									are responsible for maintaining the security of your account
									and you are fully responsible for all activities that occur
									under the account and any other actions taken in connection
									with it. We may, but have no obligation to, monitor and review
									new accounts before you may sign in and start using the
									Services. Providing false contact information of any kind may
									result in the termination of your account. You must
									immediately notify us of any unauthorized uses of your account
									or any other breaches of security. We will not be liable for
									any acts or omissions by you, including any damages of any
									kind incurred as a result of such acts or omissions. We may
									suspend, disable, or delete your account (or any part thereof)
									if we determine that you have violated any provision of this
									Agreement or that your conduct or content would tend to damage
									our reputation and goodwill. If we delete your account for the
									foregoing reasons, you may not re-register for our Services.
									We may block your email address and Internet protocol address
									to prevent further registration.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton
								_expanded={{ bg: useColorModeValue('gray.100', 'gray.700') }}>
								<Text variant={'heading2'}>Links to other resources</Text>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<Text variant='body'>
									Although the Website and Services may link to other resources
									(such as websites, mobile applications, etc.), we are not,
									directly or indirectly, implying any approval, association,
									sponsorship, endorsement, or affiliation with any linked
									resource, unless specifically stated herein. Some of the links
									on the Website may be “affiliate links”. This means if you
									click on the link and purchase an item, the Operator will
									receive an affiliate commission. We are not responsible for
									examining or evaluating, and we do not warrant the offerings
									of, any businesses or individuals or the content of their
									resources. We do not assume any responsibility or liability
									for the actions, products, services, and content of any other
									third parties. You should carefully review the legal
									statements and other conditions of use of any resource which
									you access through a link on the Website. Your linking to any
									other off-site resources is at your own risk.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton
								_expanded={{ bg: useColorModeValue('gray.100', 'gray.700') }}>
								<Text variant={'heading2'}>Prohibited uses</Text>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<Text variant='body'>
									In addition to other terms as set forth in the Agreement, you
									are prohibited from using the Website and Services or Content:
									(a) for any unlawful purpose; (b) to solicit others to perform
									or participate in any unlawful acts; (c) to violate any
									international, federal, provincial or state regulations,
									rules, laws, or local ordinances; (d) to infringe upon or
									violate our intellectual property rights or the intellectual
									property rights of others; (e) to harass, abuse, insult, harm,
									defame, slander, disparage, intimidate, or discriminate based
									on gender, sexual orientation, religion, ethnicity, race, age,
									national origin, or disability; (f) to submit false or
									misleading information; (g) to upload or transmit viruses or
									any other type of malicious code that will or may be used in
									any way that will affect the functionality or operation of the
									Website and Services, third party products and services, or
									the Internet; (h) to spam, phish, pharm, pretext, spider,
									crawl, or scrape; (i) for any obscene or immoral purpose; or
									(j) to interfere with or circumvent the security features of
									the Website and Services, third party products and services,
									or the Internet. We reserve the right to terminate your use of
									the Website and Services for violating any of the prohibited
									uses.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton
								_expanded={{ bg: useColorModeValue('gray.100', 'gray.700') }}>
								<Text variant={'heading2'}>Intellectual property rights</Text>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<Text variant='body'>
									“Intellectual Property Rights” means all present and future
									rights conferred by statute, common law or equity in or in
									relation to any copyright and related rights, trademarks,
									designs, patents, inventions, goodwill and the right to sue
									for passing off, rights to inventions, rights to use, and all
									other intellectual property rights, in each case whether
									registered or unregistered and including all applications and
									rights to apply for and be granted, rights to claim priority
									from, such rights and all similar or equivalent rights or
									forms of protection and any other results of intellectual
									activity which subsist or will subsist now or in the future in
									any part of the world. This Agreement does not transfer to you
									any intellectual property owned by the Operator or third
									parties, and all rights, titles, and interests in and to such
									property will remain (as between the parties) solely with the
									Operator. All trademarks, service marks, graphics and logos
									used in connection with the Website and Services, are
									trademarks or registered trademarks of the Operator or its
									licensors. Other trademarks, service marks, graphics and logos
									used in connection with the Website and Services may be the
									trademarks of other third parties. Your use of the Website and
									Services grants you no right or license to reproduce or
									otherwise use any of the Operator or third party trademarks.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton
								_expanded={{ bg: useColorModeValue('gray.100', 'gray.700') }}>
								<Text variant={'heading2'}>Limitation of liability</Text>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<Text variant='body'>
									To the fullest extent permitted by applicable law, in no event
									will the Operator, its affiliates, directors, officers,
									employees, agents, suppliers or licensors be liable to any
									person for any indirect, incidental, special, punitive, cover
									or consequential damages (including, without limitation,
									damages for lost profits, revenue, sales, goodwill, use of
									content, impact on business, business interruption, loss of
									anticipated savings, loss of business opportunity) however
									caused, under any theory of liability, including, without
									limitation, contract, tort, warranty, breach of statutory
									duty, negligence or otherwise, even if the liable party has
									been advised as to the possibility of such damages or could
									have foreseen such damages. To the maximum extent permitted by
									applicable law, the aggregate liability of the Operator and
									its affiliates, officers, employees, agents, suppliers and
									licensors relating to the services will be limited to an
									amount no greater than one dollar or any amounts actually paid
									in cash by you to the Operator for the prior one month period
									prior to the first event or occurrence giving rise to such
									liability. The limitations and exclusions also apply if this
									remedy does not fully compensate you for any losses or fails
									of its essential purpose.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton
								_expanded={{ bg: useColorModeValue('gray.100', 'gray.700') }}>
								<Text variant={'heading2'}>Changes and amendments</Text>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<Text variant='body'>
									We reserve the right to modify this Agreement or its terms
									related to the Website and Services at any time at our
									discretion. When we do, we will revise the updated date at the
									bottom of this page. We may also provide notice to you in
									other ways at our discretion, such as through the contact
									information you have provided.
								</Text>
								An updated version of this Agreement will be effective
								immediately upon the posting of the revised Agreement unless
								otherwise specified. Your continued use of the Website and
								Services after the effective date of the revised Agreement (or
								such other act specified at that time) will constitute your
								consent to those changes.<Text variant='body'></Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton
								_expanded={{ bg: useColorModeValue('gray.100', 'gray.700') }}>
								<Text variant={'heading2'}>Acceptance of these terms</Text>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<Text variant='body'>
									You acknowledge that you have read this Agreement and agree to
									all its terms and conditions. By accessing and using the
									Website and Services you agree to be bound by this Agreement.
									If you do not agree to abide by the terms of this Agreement,
									you are not authorized to access or use the Website and
									Services.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton
								_expanded={{ bg: useColorModeValue('gray.100', 'gray.700') }}>
								<Text variant={'heading2'}>Contacting us</Text>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<Text variant='body'>
									If you have any questions, concerns, or complaints regarding
									this Agreement, we encourage you to contact us using the
									details below:
									terms.w&#111;r&#107;&#100;i&#97;r&#121;&#64;&#103;m&#97;&#105;&#108;.co&#109;
								</Text>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</VStack>
			</Container>
		</>
	);
}
