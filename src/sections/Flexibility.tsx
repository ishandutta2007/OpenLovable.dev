import { Cpu, FolderOpen, Puzzle } from "lucide-react";

const flexibilityFeatures = [
	{
		icon: Cpu,
		title: "Use any AI model",
		description:
			"Works with OpenAI, Google, Anthropic, and free models. Add almost any model in seconds.",
	},
	{
		icon: FolderOpen,
		title: "Your code stays yours",
		description:
			"Import existing apps or export anytime. Switch freely between OpenLovable and other tools.",
	},
	{
		icon: Puzzle,
		title: "Bring your own tools",
		description:
			"Extend with any MCP server. Use any template or JavaScript framework.",
	},
];

export function Flexibility() {
	return (
		<section className="py-24 bg-gray-50 dark:bg-gray-900/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left - Screenshot */}
					<div className="relative order-2 lg:order-1">
						<div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
							{/* Browser chrome */}
							<div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center gap-2">
								<div className="flex gap-1.5">
									<div className="w-3 h-3 rounded-full bg-red-400" />
									<div className="w-3 h-3 rounded-full bg-yellow-400" />
									<div className="w-3 h-3 rounded-full bg-green-400" />
								</div>
							</div>

							{/* App content */}
							<div className="p-6 bg-white dark:bg-gray-950">
								<div className="flex gap-6">
									{/* Sidebar */}
									<div className="w-16 flex flex-col items-center gap-4">
										<div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
											<span className="text-purple-600 dark:text-purple-400 text-lg font-bold">
												d
											</span>
										</div>
										<div className="w-10 h-10 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
											<span className="text-gray-400">📁</span>
										</div>
										<div className="w-10 h-10 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
											<span className="text-gray-400">💬</span>
										</div>
										<div className="w-10 h-10 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
											<span className="text-gray-400">⚙️</span>
										</div>
									</div>

									{/* Model selector */}
									<div className="flex-1">
										<div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
											<div className="p-4 border-b border-gray-200 dark:border-gray-700">
												<p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
													o3 mini
												</p>
												<p className="text-xs text-gray-500">openai</p>
											</div>
											<div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-purple-50 dark:bg-purple-900/20">
												<p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
													Claude 3.7 Sonnet
												</p>
												<p className="text-xs text-gray-500">anthropic</p>
											</div>
											<div className="p-4 border-b border-gray-200 dark:border-gray-700">
												<div className="flex items-center justify-between">
													<div>
														<p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
															Gemini 2.5 Pro
														</p>
														<p className="text-xs text-gray-500">google</p>
													</div>
													<span className="px-2 py-1 text-[10px] bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
														Recommended
													</span>
												</div>
											</div>
											<div className="p-4 border-b border-gray-200 dark:border-gray-700">
												<p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
													DeepSeek v3 (free)
												</p>
												<p className="text-xs text-gray-500">openrouter</p>
											</div>
											<div className="p-4 border-b border-gray-200 dark:border-gray-700">
												<p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
													Auto
												</p>
												<p className="text-xs text-gray-500">auto</p>
											</div>
											<div className="p-4 bg-gray-50 dark:bg-gray-800/50">
												<p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
													Local models (Ollama)
												</p>
												<p className="text-xs text-gray-500 mb-3">4 models</p>
												<div className="space-y-2">
													<div className="flex items-center justify-between text-xs">
														<span className="text-gray-600 dark:text-gray-400">
															gemma3:12b-it-qat
														</span>
													</div>
													<div className="flex items-center justify-between text-xs">
														<span className="text-gray-600 dark:text-gray-400">
															Gemma 3
														</span>
														<span className="text-gray-400">
															gemma3:27b-it-qat
														</span>
													</div>
													<div className="flex items-center justify-between text-xs">
														<span className="text-gray-600 dark:text-gray-400">
															Deepcoder
														</span>
														<span className="text-gray-400">
															deepcoder:latest
														</span>
													</div>
													<div className="flex items-center justify-between text-xs">
														<span className="text-gray-600 dark:text-gray-400">
															Qwq
														</span>
														<span className="text-gray-400">qwq:latest</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Decorative elements */}
						<div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40" />
						<div className="absolute -bottom-6 -right-6 w-40 h-40 bg-violet-200 dark:bg-violet-900/20 rounded-full blur-3xl opacity-40" />
					</div>

					{/* Right - Content */}
					<div className="order-1 lg:order-2">
						<span className="inline-block px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
							Flexibility
						</span>
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Zero lock-in,{" "}
							<span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
								maximum freedom
							</span>
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
							OpenLovable never traps you in a proprietary ecosystem—your
							models, your tools, your code.
						</p>

						<div className="space-y-6">
							{flexibilityFeatures.map((feature, index) => (
								<div key={index} className="flex gap-4">
									<div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
										<feature.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 dark:text-white mb-1">
											{feature.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-400 text-sm">
											{feature.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
