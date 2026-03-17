import logoDark from "./Dark.png";
import logoLight from "./light.png";

export function Welcome({ message }: { message: string }) {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<header className="flex flex-col items-center gap-9">
					<div className="w-[300px] max-w-[30vw] p-4">
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
				<div className="max-w-[300px] w-full space-y-4 px-4">
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
		text: "Add Movies/Shows/ and now MUSIC",
		icon: "🎬",
		type: "link",
	},
	{
		href: "https://chat.aidensserver.win",
		text: "School Chat Room",
		icon: "💬",
		type: "link",
	},
	{
		href: "https://ai.aidensserver.win",
		text: "AI Chat",
		icon: "🤖",
		type: "link",
	},
	{ type: "separator" },
	{ text: "Admin Links" },
	{ type: "separator" },
	{
		href: "https://dash.cloudflare.com",
		text: "Cloudflare",
		icon: "🌥",
		type: "link",
	},
	{
		href: "https://port.aidensserver.win",
		text: "Portainer",
		icon: "📦",
		type: "link",
	},
	{
		href: "https://immich.aidensserver.win",
		text: "Immich",
		icon: "📷",
		type: "link",
	},
	{
		href: "https://files.aidensserver.win",
		text: "Files",
		icon: "🗂️",
		type: "link",
	},
	{
		href: "https://cnvx.aidensserver.win",
		text: "File Converter",
		icon: "🔄",
		type: "link",
	},
	{ type: "separator" },
	{ text: "Admin Tool's" },
	{ type: "separator" },
	{
		href: "https://lidarr.aidensserver.win",
		text: "Lidarr",
		type: "link",
	},
	{
		href: "https://sonarr.aidensserver.win",
		text: "Sonarr",
		type: "link",
	},
	{
		href: "https://radarr.aidensserver.win",
		text: "Radarr",
		type: "link",
	},	
	{
		href: "https://prowl.aidensserver.win",
		text: "Prowlarr",
		type: "link",
	},
	{
		href: "https://qbit.aidensserver.win",
		text: "Qbittorrent",
		type: "link",
	},
	{
		href: "https://ssh.aidensserver.win",
		text: "Remote Terminal",
		type: "link",
	},
	{
		href: "https://gotif.aidensserver.win",
		text: "Gotify",
		type: "link",
	},
];
