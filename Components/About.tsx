/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const About = () => {
	return (
		<div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
			<div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
				<div>
					<h1 className="text-[20px] font-bold uppercase text-yellow-400 mb-[1rem]">
						About Me
					</h1>
					<h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
						Transforming <span className="text-yellow-400">Visions</span>
					</h2>
					<div className="mb-[3rem] flex items-center md:space-x-10">
						<span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
						<p className="text-[19px] text-slate-300 w-[80%]">
							Hey there! I'm Teguh Rinaldi, a dedicated Web developer fueled by
							creativity and a knack for tackling challenges head-on. With a
							fusion of technical expertise and a user-focused mindset, I'm
							committed to crafting seamless digital solutions that resonate
							with your audience. Let's team up and turn your ideas into
							reality!
						</p>
					</div>
					{/* <button className="px-[2rem] hover:bg-yellow-800 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-yellow-400 text-black flex items-center space-x-2  ">
						<p>Download Cv</p>
						<ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
					</button> */}
				</div>
				<div
					data-aos="fade-left"
					className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative md:translate-x-[6rem] lg:translate-x-[12rem]"
				>
					<Image
						src="/images/teguh123.jpg"
						alt="user"
						layout="fill"
						objectFit="contain"
						className="relative z-[11] w-[100%] h-[100%] obeject-contain"
					/>
					<div className="absolute w-[80%] h-[100%] z-[10] bg-yellow-600 top-[-2.5rem] md:right-[-2rem] lg:right-[-0.5rem]"></div>
				</div>
			</div>
		</div>
	);
};

export default About;
