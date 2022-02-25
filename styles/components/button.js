const Button = {
	baseStyle: {
		fontWeight: 'bold',
		boxShadow: 'sm',
	},
	sizes: {
		sm: {
			fontSize: 'sm',
			px: 4,
			py: 3,
		},
		md: {
			fontSize: 'md',
			px: 6,
			py: 4,
		},
	},
	variants: {
		outline: {
			border: '1px solid',
			borderColor: 'gray.200',
			color: 'gray.700',
		},
		solid: {
			bg: 'purple.500',
			color: 'white',
			_hover: {
				bg: 'purple.600',
			},
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'outline',
	},
};

export default Button;
