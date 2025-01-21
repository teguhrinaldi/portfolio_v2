import React from 'react';
import Skilsitem from './Skilsitem';
import SkilsLanguange from './SkilsLanguange';

const Skills = () => {
	return (
		<div className="pt-[4rem] md:pt[-8rem] pb-[5rem] bg-[#09101a]">
			<h1 className="heading">
				Education & <span className="text-yellow-400">Skill</span>
			</h1>
			<div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
				<div>
					<Skilsitem title="Sma Negeri 2 Cianjur" year="2016 - 2018" />
					<Skilsitem title="mysql developer intern" year="2022 - 2023" />
					<SkilsLanguange
						skill1="html"
						skill2="css"
						skill3="javascript"
						skill4="Typescript"
						skill5="React Native"
						level1="w-[91%]"
						level2="w-[88%]"
						level3="w-[80%]"
						level4="w-[80%]"
						level5="w-[70%]"
					/>
				</div>
				<div>
					<Skilsitem title="Itenas Bandung" year="2018 - 2024" />
					<Skilsitem title="React Developer intern" year="2021 - 2022" />
					<SkilsLanguange
						skill1="React js"
						skill2="Next js"
						skill3="Mysql"
						skill4="Git"
						skill5="Tailwind css"
						level1="w-[81%]"
						level2="w-[78%]"
						level3="w-[60%]"
						level4="w-[80%]"
						level5="w-[75%]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
