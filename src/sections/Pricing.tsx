import { Button } from "@/components/ui/button";
import {
	Check,
	Zap,
	Download,
	Key,
	MessageSquare,
	Star,
	Rocket,
	Users,
	RefreshCw,
} from "lucide-react";

const plans = [
	{
		name: "OpenLovable Free",
		price: "Free",
		description: "Perfect for getting started and building apps.",
		features: [
			{ icon: Zap, text: "Local, open-source AI App Builder" },
			{ icon: Download, text: "Downloadable for macOS & Windows" },
			{ icon: Key, text: "No sign-up required" },
			{ icon: Key, text: "Bring your own API key" },
			{ icon: MessageSquare, text: "Community support" },
		],
		cta: "Get Started",
		ctaVariant: "outline" as const,
		href: "#docs",
		highlighted: false,
	},
	{
		name: "OpenLovable Pro",
		price: "$20",
		period: "/month",
		description: "Unlock powerful AI modes and exclusive Pro features.",
		badge: "RECOMMENDED",
		features: [
			{ icon: Check, text: "Everything in OpenLovable Free plus..." },
			{ icon: Star, text: "Exclusive Pro modes to work on large codebases" },
			{ icon: Zap, text: "200 AI credits/month" },
			{ icon: Rocket, text: "Full OpenLovable Academy access" },
		],
		cta: "Subscribe to Pro",
		ctaVariant: "default" as const,
		href: "#pro",
		highlighted: true,
		note: "After signing up, you'll be redirected to checkout.",
	},
	{
		name: "OpenLovable Max",
		price: "$79",
		period: "/month",
		description: "For building large, complex apps.",
		features: [
			{ icon: Check, text: "Everything in OpenLovable Pro plus..." },
			{ icon: Zap, text: "900 AI credits/month" },
			{ icon: Users, text: "Prioritized access to office hours" },
			{ icon: RefreshCw, text: "Reload credits at any time (same price)" },
		],
		cta: "Available as upgrade",
		ctaVariant: "outline" as const,
		href: "#max",
		highlighted: false,
		disabled: true,
	},
];

export function Pricing() {
	return (
		<section className="py-24 bg-gray-50 dark:bg-gray-900/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Simple, transparent pricing
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Choose the plan that fits your needs. Upgrade or downgrade
						anytime—no lock-in, ever.
					</p>
				</div>

				{/* Pricing Cards */}
				<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{plans.map((plan, index) => (
						<div
							key={index}
							className={`relative rounded-2xl p-6 ${
								plan.highlighted
									? "bg-white dark:bg-gray-900 border-2 border-purple-500 shadow-xl shadow-purple-500/10"
									: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
							}`}
						>
							{/* Badge */}
							{plan.badge && (
								<div className="absolute -top-3 left-1/2 -translate-x-1/2">
									<span className="px-3 py-1 text-xs font-medium bg-purple-600 text-white rounded-full">
										{plan.badge}
									</span>
								</div>
							)}

							{/* Plan Header */}
							<div className="mb-6">
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									{plan.name}
								</h3>
								<div className="flex items-baseline gap-1 mb-2">
									<span className="text-3xl font-bold text-gray-900 dark:text-white">
										{plan.price}
									</span>
									{plan.period && (
										<span className="text-gray-500 dark:text-gray-400">
											{plan.period}
										</span>
									)}
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									{plan.description}
								</p>
							</div>

							{/* Features */}
							<ul className="space-y-3 mb-8">
								{plan.features.map((feature, featureIndex) => (
									<li key={featureIndex} className="flex items-start gap-3">
										<feature.icon
											className={`w-5 h-5 mt-0.5 ${
												plan.highlighted
													? "text-purple-600 dark:text-purple-400"
													: "text-gray-500 dark:text-gray-400"
											}`}
										/>
										<span className="text-sm text-gray-700 dark:text-gray-300">
											{feature.text}
										</span>
									</li>
								))}
							</ul>

							{/* CTA */}
							<Button
								variant={plan.ctaVariant}
								className={`w-full ${
									plan.highlighted
										? "bg-purple-600 hover:bg-purple-700 text-white"
										: "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
								} ${plan.disabled ? "opacity-60 cursor-not-allowed" : ""}`}
								disabled={plan.disabled}
							>
								{plan.cta}
							</Button>

							{/* Note */}
							{plan.note && (
								<p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
									{plan.note}
								</p>
							)}
						</div>
					))}
				</div>

				{/* Creator Quote */}
				<div className="mt-20 max-w-2xl mx-auto">
					<div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
						<div className="flex items-start gap-4">
							<div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center text-2xl shrink-0">
								👨‍💻
							</div>
							<div>
								<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
									I built OpenLovable as a local, open-source AI app builder
									because you should feel like an{" "}
									<span className="font-semibold text-gray-900 dark:text-white">
										owner
									</span>
									, not a renter. We believe in flexibility, not lock-in. We
									want users who{" "}
									<span className="font-semibold text-gray-900 dark:text-white">
										choose us
									</span>
									, not ones who are stuck with us.
								</p>
								<div>
									<p className="font-semibold text-gray-900 dark:text-white">
										Will Chen
									</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Creator of OpenLovable
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
