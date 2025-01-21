import React from 'react';

interface Props {
	skill1: string;
	skill2: string;
	skill3: string;
	skill4: string;
	skill5: string;
	level1: string;
	level2: string;
	level3: string;
	level4: string;
	level5: string;
}

const SkilsLanguange = ({
	skill1,
	skill2,
	skill3,
	skill4,
	skill5,
	level1,
	level2,
	level3,
	level4,
	level5,
}: Props) => {
	return (
		<div>
			<div className="relative mb-[3rem]">
				<h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
					{skill1}
				</h1>
				<span className={`block ${level1} h-[6px] bg-[#55e6a5]`}></span>
			</div>
			<div className="relative mb-[3rem]">
				<h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
					{skill2}
				</h1>
				<span className={`block ${level2} h-[6px] bg-[#55e6a5]`}></span>
			</div>
			<div className="relative mb-[3rem]">
				<h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
					{skill3}
				</h1>
				<span className={`block ${level3} h-[6px] bg-[#55e6a5]`}></span>
			</div>
			<div className="relative mb-[3rem]">
				<h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
					{skill4}
				</h1>
				<span className={`block ${level4} h-[6px] bg-[#55e6a5]`}></span>
			</div>
			<div className="relative mb-[3rem]">
				<h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
					{skill5}
				</h1>
				<span className={`block ${level5} h-[6px] bg-[#55e6a5]`}></span>
			</div>
		</div>
	);
};

export default SkilsLanguange;
