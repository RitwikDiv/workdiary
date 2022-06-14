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
			fontWeight: 'semibold',
			fontSize: 'sm',
		},
		solid: {
			bg: 'primary',
			color: 'gray.100',
			_hover: {
				bg: 'secondary',
			},
		},
	},
	defaultProps: {
		variant: 'outline',
	},
};

export default Button;
