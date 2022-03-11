const Button = {
	baseStyle: {
		fontWeight: 'bold',
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
		menu: {
			color: 'textPrimary',
			fontSize: 'semibold',
			justifyContent: 'flex-start',
			_hover: {
				borderColor: 'gray.300',
				bg: 'purple.50',
			},
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'outline',
	},
};

export default Button;
