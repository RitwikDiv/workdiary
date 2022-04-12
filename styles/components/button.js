const Button = {
	baseStyle: {
		fontWeight: 'bold',
		boxShadow: 'xs',
		rounded: 'lg',
	},

	variants: {
		outline: {
			default: {
				border: '1px solid',
				borderColor: 'gray.300',
				color: 'textSecondary',
			},
			_dark: {
				border: '1px solid',
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
