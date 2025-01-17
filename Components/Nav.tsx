import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
	openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
	return (
		<div className="w-[100%] fixed z-[10000] top-0 h-[10vh] bg-[black] shadow-md">
			<div className="flex justify-between items-center w-[80%] mx-auto h-[100%]">
				<h1 className="flex-[0.6] cursor-pointer text-[white] text-[25px] font-bold">
					TEGUH
					<span className="text-yellow-400">RINALDI</span>
				</h1>
				<div className="nav-link">Home</div>
				<div className="nav-link">Services</div>
				<div className="nav-link">About</div>
				<div className="nav-link">Project</div>
				<div className="nav-link">Blog</div>
				<div className="nav-link">Contact</div>
				<div onClick={openNav}>
					<Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
				</div>
			</div>
		</div>
	);
};

export default Nav;
