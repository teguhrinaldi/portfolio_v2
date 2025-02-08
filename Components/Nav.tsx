import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
	openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
	// Fungsi untuk scroll ke elemen tertentu berdasarkan id
	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="w-[100%] fixed z-[10000] top-0 h-[10vh] bg-[black] shadow-md">
			<div className="flex justify-between items-center w-[80%] mx-auto h-[100%]">
				{/* Logo */}
				<h1 className="flex-[0.6] cursor-pointer text-[white] text-[25px] font-bold">
					TEGUH<span className="text-yellow-400">RINALDI</span>
				</h1>
				<div
					className="nav-link cursor-pointer text-white"
					onClick={() => scrollToSection('hero')}
				>
					Home
				</div>
				<div
					className="nav-link cursor-pointer text-white"
					onClick={() => scrollToSection('services')}
				>
					Services
				</div>
				<div
					className="nav-link cursor-pointer text-white"
					onClick={() => scrollToSection('about')}
				>
					About
				</div>
				<div
					className="nav-link cursor-pointer text-white"
					onClick={() => scrollToSection('projects')}
				>
					Projects
				</div>
				<div
					className="nav-link cursor-pointer text-white"
					onClick={() => scrollToSection('contact')}
				>
					Contact
				</div>
				<div onClick={openNav}>
					<Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
				</div>
			</div>
		</div>
	);
};

export default Nav;
