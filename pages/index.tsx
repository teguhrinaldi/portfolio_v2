import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import React, { useState } from 'react';

const HomePage = () => {
	const [nav, setnav] = useState(false);
	const openNav = () => setnav(true);
	const closeNav = () => setnav(false);

	return (
		<div className="overflow-x-hidden">
			<div>
				{/* navbar */}
				<MobileNav nav={nav} closeNav={closeNav} />
				<Nav openNav={openNav} />
				{/* hero */}
				<Hero />
			</div>
		</div>
	);
};

export default HomePage;
