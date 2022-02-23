import { useToast } from '@chakra-ui/toast';

const toast = ({ status, title, description }) => {
	const toast = useToast();
	return toast({
		title: title,
		description: description,
		status: status,
		variant: 'left-accent',
		position: 'top-right',
		duration: 20000,
		isClosable: true,
	});
};

export default toast;
