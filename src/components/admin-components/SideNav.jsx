import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sideNav.css";

const SideNav = ({ navMenus }) => {
	const [open, setOpen] = useState(false);

	const navigate = useNavigate();

	return (
		<div
			className={`min-h-screen ${
				!open ? "w-16" : "w-72"
			} bg-slate-900 transition-all duration-500`}
		>
			<div
				className="flex py-3 px-5 delay-500 justify-end text-gray-100 duration-700 transition-all"
				onClick={() => setOpen(!open)}
			>
				{open ? (
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 24 24"
						height="1.5em"
						width="1.5em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="none"
							// stroke='#000'
							strokeWidth="2"
							d="M3,3 L21,21 M3,21 L21,3"
						></path>
					</svg>
				) : (
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 24 24"
						height="1.5em"
						width="1.5em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							<path fill="none" d="M0 0h24v24H0z"></path>
							<path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"></path>
						</g>
					</svg>
				)}
			</div>
			{navMenus.map((navlink, i) => {
				const { title, icon, link } = navlink;
				return (
					<div
						className="mt-4 group flex flex-col gap-4 relative text-gray-100 cursor-pointer"
						key={title}
						onClick={() => {
							navigate(link);
							setOpen(false);
						}}
					>
						<div className="flex items-center gap-4 tracking-wider px-6 py-2 hover:bg-gray-800 rounded-md">
							<div>{icon}</div>
							<h3
								style={{
									transitionDelay: `${i + 3}00ms`,
								}}
								className={`whitespace-pre duration-300 text-sm ${
									!open && "opacity-0 translate-x-28 overflow-hidden"
								}`}
							>
								{title}
							</h3>
							<h3
								className={` ${
									open && "hidden"
								}  absolute left-48 whitespace-pre w-0 overflow-hidden text-sm  py-0 px-0 group-hover:px-2 group-hover:py-1 group-hover:left-[4.4rem] group-hover:w-fit group-hover:duration-300 font-medium rounded-md drop-shadow-lg text-gray-900 z-30`}
							>
								{title}
							</h3>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SideNav;
