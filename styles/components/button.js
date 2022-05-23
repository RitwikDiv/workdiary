const Button = {
	baseStyle: {
		fontWeight: 'bold',
		rounded: 'md',
	},

	variants: {
		outline: {
			default: {
				width: '2px',
				color: 'textSecondary',
			},
			_dark: {
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
