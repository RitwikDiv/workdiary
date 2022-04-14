import React from 'react';
import { Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react';
import { BsPlusLg as Plus } from 'react-icons/bs';
import { FaMinus as Minus } from 'react-icons/fa';
import { useState } from 'react';

export default function SkillCell({ name, selected }) {
	const [selectedValue, setSelectedValue] = useState(selected);
	return (
		<Tag
			key={name}
			size={'sm'}
			onClick={(e) => setSelectedValue(!selectedValue)}
			variant={selectedValue === true ? 'subtle' : 'outline'}
			colorScheme='blue'>
			<TagLeftIcon as={selectedValue === true ? Minus : Plus} />
			<TagLabel fontWeight={'bold'}>{name}</TagLabel>
		</Tag>
	);
}
