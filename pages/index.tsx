import About from '@/Components/About';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import Projects from '@/Components/Projects';
import Services from '@/Components/Services';
import Skills from '@/Components/Skills';
import Contact from '@/Components/Contacts';
import Social from '@/Components/Social';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	useEffect(() => {
		AOS.init({
			offset: 120,
			duration: 1000,
			easing: 'ease',
			once: true,
		});
	}, []);

	return (
		<div className="overflow-x-hidden">
			<div>
				<MobileNav nav={nav} closeNav={closeNav} />
				<Nav openNav={openNav} />
				<div id="hero">
					<Hero />
				</div>
				<div className="relative z-[30]">
					<div id="about">
						<About />
					</div>
					<div id="services">
						<Services />
					</div>
					<div id="skills">
						<Skills />
					</div>
					<div id="projects">
						<Projects />
					</div>
					<div id="contact">
						<Contact />
					</div>
					<Social />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
