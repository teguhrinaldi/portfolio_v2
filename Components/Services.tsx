import {
	CodeBracketSquareIcon,
	CommandLineIcon,
	RocketLaunchIcon,
} from '@heroicons/react/20/solid';
import React from 'react';

const Services = () => {
	return (
		<div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
			<p className="heading">
				My <span className="text-yellow-400">Services</span>
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
				<div data-aos="fade-right">
					<div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
						<CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
						<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
							FrontEnd
						</h1>
						<p className="text-[15px] text-[#d3d2d2] font-normal">
							I build fast, responsive, and visually stunning websites using
							React, Next.js, TypeScript, and Tailwind CSS. With proven
							freelance experience, I deliver reliable and innovative solutions
							to elevate your business.
						</p>
					</div>
				</div>
				<div data-aos="zoom-in" data-aos-delay="300">
					<div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
						<RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
						<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
							BackEnd
						</h1>
						<p className="text-[15px] text-[#d3d2d2] font-normal">
							I design and build scalable, secure, and efficient backend systems
							using Node.js and MySQL. With expertise in API development and
							database management, I ensure seamless and reliable performance
							for your applications.
						</p>
					</div>
				</div>
				<div data-aos="fade-left" data-aos-delay="500">
					<div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
						<CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
						<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
							FullStack
						</h1>
						<p className="text-[15px] text-[#d3d2d2] font-normal">
							I develop and deliver scalable, secure, and responsive fullstack
							solutions using Node.js and MySQL. With proficiency in both
							frontend and backend technologies, I ensure a smooth and seamless
							experience for your applications.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
