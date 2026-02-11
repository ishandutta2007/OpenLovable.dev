import { Database, Shield, Globe } from "lucide-react";

const features = [
	{
		icon: Database,
		title: "Build full-stack with Supabase",
		description:
			"Connect your accounts and get instant database, auth, and server function support.",
	},
	{
		icon: Shield,
		title: "Security reviews built-in",
		description:
			"Scan for critical security issues and get clear fixes before they become headaches.",
	},
	{
		icon: Globe,
		title: "Publish anywhere",
		description:
			"Deploy to GitHub and Vercel in a few clicks—or bring your own cloud.",
	},
];

export function Features() {
	return (
		<section className="py-24 bg-white dark:bg-gray-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-16">
					<span className="inline-block px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
						End-to-End
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Create apps from
						<br />
						<span className="text-gray-400">start to finish</span>
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
						OpenLovable gives you deep customization with just enough structure
						so you never feel lost.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-purple-200 dark:hover:border-purple-800 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
						>
							<div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
								<feature.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
								{feature.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
