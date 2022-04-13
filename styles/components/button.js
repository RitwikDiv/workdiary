const Button = {
	baseStyle: {
		fontWeight: 'bold',
		boxShadow: 'xs',
		rounded: 'md',
	},

	variants: {
		outline: {
			default: {
				borderColor: 'gray.300',
				color: 'textSecondary',
			},
			_dark: {
				borderColor: 'gray.600',
				color: 'textSecondary',
			},
		},
		menu: {
			color: 'textPrimary',
			_hover: {
				bg: 'gray.700',
				color: 'gray.200',
			},
		},
		solid: {
			bg: 'primary',
			color: 'gray.100',
			_hover: {
				bg: 'purple.600',
			},
		},
	},
	defaultProps: {
		variant: 'outline',
	},
};

export default Button;
