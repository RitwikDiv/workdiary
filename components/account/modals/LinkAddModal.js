import {
	Button,
	FormControl,
	FormLabel,
	Input,
	VStack,
	Modal,
	ModalOverlay,
	ModalBody,
	ModalHeader,
	ModalContent,
	ModalFooter,
	ModalCloseButton,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function LinkAddModal({ isOpen, onClose, setData }) {
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setData({ id: Math.floor(Math.random() * 10), title, url });
		setTitle('');
		setUrl('');
		onClose();
	};
	const handleClear = (e) => {
		e.preventDefault();
		setTitle('');
		setUrl('');
		onClose();
	};

	return (
		<>
			<Modal
				size={'md'}
				borderWidth={'1px'}
				blockScrollOnMount={false}
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create a new link</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack padding={1} spacing={4} rounded={'md'} wid>
							<FormControl isRequired>
								<FormLabel
									htmlFor='name'
									fontSize={'sm'}
									fontWeight={'semibold'}>
									Title
								</FormLabel>
								<Input
									id='name'
									type='text'
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</FormControl>
							<FormControl isRequired>
								<FormLabel
									htmlFor='url'
									fontSize={'sm'}
									fontWeight={'semibold'}>
									URL
								</FormLabel>
								<Input
									id='url'
									type='text'
									value={url}
									onChange={(e) => setUrl(e.target.value)}
								/>
							</FormControl>
						</VStack>
					</ModalBody>
					<ModalFooter gap={2}>
						<Button variant='danger' onClick={handleClear}>
							Delete
						</Button>
						<Button variant='success' onClick={handleSubmit}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
