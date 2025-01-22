/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffects';
import Image from 'next/image';
// import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

const Hero = () => {
	return (
		<div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center relative">
			<Particle />
			<div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
				<div>
					<h1 className="text-[35px] md:text-[50px] font-bold text-white">
						Hi, I'm <span className="text-yellow-400">Teguh!</span>
					</h1>
					<TextEffect />
					<p className="mt-[1.6rem] text-[20px] text-[#ffffff92]">
						An enthusiastic Web developer, breathing life into code with my
						skills and creativity, crafting interfaces that not only captivate
						attention but also mesmerize with their beauty. With a fiery
						passion, I turn every project into a stage to express innovation and
						inspiration.
					</p>
					{/* <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6">
						<button className="px-[2rem] hover:bg-yellow-800 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-yellow-400 text-black flex items-center space-x-2  ">
							<p>Download Cv</p>
							<ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
						</button>
					</div> */}
				</div>
				<div className="flex justify-center lg:justify-end items-center">
					<div
						data-aos="zoom-in"
						className="w-[500px] hidden h-[500px] bg-[#2b2928] relative lg:flex items-center rounded-full"
					>
						<Image
							src="/images/teguh21.jpg"
							alt="user"
							layout="fill"
							className="object-cover rounded-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
