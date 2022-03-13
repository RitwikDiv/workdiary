const Button = {
	baseStyle: {
		fontWeight: 'bold',
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
