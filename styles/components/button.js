const Button = {
	baseStyle: {
		fontWeight: 'bold',
		rounded: 'md',
	},

	variants: {
		outline: {
			default: {
				width: '1px',
				color: 'textSecondary',
			},
			_dark: {
				default: {
					color: 'textSecondary',
				},
			},
		},
		solid: {
			bg: 'primary',
			color: 'textInverse',
			_hover: {
				bg: 'secondary',
			},
		},
		danger: {
			borderWidth: '1px',
			borderColor: 'danger',
			color: 'danger',
			_hover: {
				backgroundColor: 'red.100',
				color: 'red.700',
				_dark: { backgroundColor: 'red.900', color: 'red.100' },
			},
			leftIconColor: 'danger',
		},
		success: {
			borderWidth: '1px',
			borderColor: 'success',
			color: 'success',
			_hover: {
				backgroundColor: 'green.100',
				color: 'green.700',
				_dark: { backgroundColor: 'green.900', color: 'green.100' },
			},
			leftIconColor: 'success',
		},
		add: {
			borderWidth: '1px',
			borderColor: 'primary',
			color: 'primary',
			_hover: {
				backgroundColor: 'purple.100',
				_dark: { backgroundColor: 'purple.900', color: 'purple.100' },
			},
			leftIconColor: 'primary',
		},
		addAchievement: {
			borderWidth: '1px',
			borderColor: 'orange.500',
			color: 'orange.500',
			_hover: {
				backgroundColor: 'orange.100',
				_dark: { backgroundColor: 'orange.900', color: 'orange.100' },
			},
			leftIconColor: 'orange.500',
		},
	},
	defaultProps: {
		variant: 'outline',
		size: 'sm',
	},
};

export default Button;
