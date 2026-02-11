import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Github, Twitter, ArrowRight } from "lucide-react";

const communityLinks = [
	{
		icon: MessageCircle,
		name: "r/openlovablebuilders",
		description: "3,000+ builders",
		href: "https://reddit.com/r/openlovablebuilders",
		color: "bg-orange-500",
	},
	{
		icon: Github,
		name: "Star on GitHub",
		description: "Open source",
		href: "https://github.com/ishandutta2007/openlovable",
		color: "bg-gray-900 dark:bg-gray-800",
	},
	{
		icon: Twitter,
		name: "Follow on X",
		description: "@openlovable_sh",
		href: "https://x.com/openlovable_sh",
		color: "bg-black",
	},
];

export function Community() {
	return (
		<section className="py-24 bg-white dark:bg-gray-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12">
					<span className="inline-block px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
						Community
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Join thousands of builders
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Your feedback shapes our software—every release includes
						improvements and features you asked for.
					</p>
				</div>

				{/* Community Links */}
				<div className="grid sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
					{communityLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col items-center p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-purple-200 dark:hover:border-purple-800 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
						>
							<div
								className={`w-14 h-14 rounded-xl ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
							>
								<link.icon className="w-6 h-6 text-white" />
							</div>
							<h3 className="font-semibold text-gray-900 dark:text-white mb-1">
								{link.name}
							</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								{link.description}
							</p>
						</a>
					))}
				</div>

				{/* Newsletter */}
				<div className="max-w-xl mx-auto">
					<div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-100 dark:border-purple-800/30 text-center">
						<div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mx-auto mb-4">
							<span className="text-white text-xl">✨</span>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
							Stay in the loop
						</h3>
						<p className="text-gray-600 dark:text-gray-400 mb-6">
							Get updates on new releases and features—no spam, we promise.
						</p>
						<form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
							<div className="relative flex-1">
								<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
									✉️
								</span>
								<Input
									type="email"
									placeholder="Enter your email"
									className="pl-10 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
								/>
							</div>
							<Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
								Subscribe
								<ArrowRight className="w-4 h-4" />
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
