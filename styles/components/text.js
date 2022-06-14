const Text = {
	baseStyle: {
		color: 'textPrimary',
	},
	variants: {
		title: {
			as: 'h1',
			fontSize: '2xl',
			fontWeight: 'extrabold',
		},
		heading2: {
			as: 'h2',
			fontSize: 'xl',
			fontWeight: 'bold',
		},
		heading3: {
			as: 'h3',
			fontSize: 'lg',
			fontWeight: 'semibold',
		},
		heading4: {
			as: 'h4',
			fontSize: 'md',
			fontWeight: 'semibold',
		},
		body: {
			as: 'p',
			fontSize: 'md',
			fontWeight: 'normal',
		},
		support: {
			as: 'p',
			fontSize: 'sm',
			fontWeight: 'normal',
			// color: 'textSecondary',
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'p',
	},
};

export default Text;
