export const dataNavbar = [
	{ name: 'Home', path: '/', children: [] },
	{
		name: 'Product', path: '/products',
		children: [
			{ name: 'Phone', slug: 'phone' },
			{ name: 'Laptop', slug: 'laptop' },
			{ name: 'Headphones', slug: 'headphone' },
			{ name: 'Tablet', slug: 'tablet' },
		],
	},
	{ name: 'About Us', path: '/about', children: [] },
	{ name: 'Blog', path: '/blog', children: [] },
	{ name: 'Contact', path: '/contact', children: [] },
]
