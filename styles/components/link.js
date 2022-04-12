const Link = {
	baseStyle: {
		color: 'textPrimary',
		fontWeight: 'semibold',
		textDecoration: 'underline',
		_hover: {
			color: 'primary',
		},
	},
	variants: {
		footer: {
			color: 'textPrimary',
			fontWeight: 'semibold',
			fontSize: 'sm',
			textDecoration: 'none',
			_hover: {
				color: 'primary',
				textDecoration: 'underline',
			},
		},
	},
	sizes: {
		sm: {
			fontSize: 'sm',
		},
		md: {
			fontSize: 'md',
		},
	},
	defaultProps: {
		size: 'md',
	},
};

export default Link;
