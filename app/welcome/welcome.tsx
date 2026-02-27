import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome({ message }: { message: string }) {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<header className="flex flex-col items-center gap-9">
					<div className="w-[500px] max-w-[100vw] p-4">
						<img
							src={logoLight}
							alt="React Router"
							className="block w-full dark:hidden"
						/>
						<img
							src={logoDark}
							alt="React Router"
							className="hidden w-full dark:block"
						/>
					</div>
				</header>
				<div className="max-w-[300px] w-full space-y-6 px-4">
					<nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
						<p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
							Welcome to Aiden&apos;s Server!
						</p>
						<ul>
							{resources.map(({ href, text, icon }) => (
								<li key={href}>
									<a
										className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
										href={href}
										target="_blank"
										rel="noreferrer"
									>
										{icon}
										{text}
									</a>
								</li>
							))}
							<li className="self-stretch p-3 leading-normal">{message}</li>
						</ul>
					</nav>
				</div>
			</div>
		</main>
	);
}

const resources = [
	{ type: "header", text: "Links" },
	{ type: "separator" },
	{
		href: "https://tv.aidensserver.win",
		text: "Jellyfin (Movies & TV)",
		icon: "📺",
		type: "link",
	},
	{
		href: "https://music.aidensserver.win",
		text: "Music",
		icon: "🎧",
		type: "link",
	},
	{
		href: "https://jelly.aidensserver.win",
		text: "Add Movies/Shows",
		icon: "🎬",
		type: "link",
	},
	{ type: "separator" },
	{ type: "header", text: "Admin Tools" },
	{ type: "separator" },
	{
		href: "https://lidarr.aidensserver.win",
		text: "Lidarr(Admin)",
		type: "link",
	},
	{
		href: "https://sonarr.aidensserver.win",
		text: "Sonarr(Admin)",
		type: "link",
	},
	{
		href: "https://radarr.aidensserver.win",
		text: "Radarr(Admin)",
		type: "link",
	},	
	{
		href: "https://prowl.aidensserver.win",
		text: "Prowlarr(Admin)",
		type: "link",
	},
	{
		href: "https://qbit.aidensserver.win",
		text: "Qbittorrent(Admin)",
		type: "link",
	},
];
