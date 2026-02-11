import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Github, Menu, X } from "lucide-react";

interface HeaderProps {
	isDark: boolean;
	setIsDark: (dark: boolean) => void;
}

export function Header({ isDark, setIsDark }: HeaderProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ label: "Docs", href: "#docs" },
		{ label: "Blog", href: "#blog" },
		{ label: "Hub", href: "#hub" },
		{ label: "Members", href: "#members" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<a href="/" className="flex items-center gap-2">
						<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
							<span className="text-white font-bold text-sm">L</span>
						</div>
						<span className="font-semibold text-gray-900 dark:text-white">
							OpenLovable
						</span>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-6">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
							>
								{link.label}
							</a>
						))}
					</nav>

					{/* Right Actions */}
					<div className="flex items-center gap-3">
						<a
							href="https://github.com/ishandutta2007/openlovable"
							target="_blank"
							rel="noopener noreferrer"
							className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							<Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
						</a>

						<button
							onClick={() => setIsDark(!isDark)}
							className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							{isDark ? (
								<Sun className="w-5 h-5 text-gray-300" />
							) : (
								<Moon className="w-5 h-5 text-gray-600" />
							)}
						</button>

						<Button
							variant="outline"
							className="hidden sm:inline-flex border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
						>
							OpenLovable Pro
						</Button>

						<Button className="hidden sm:inline-flex bg-purple-600 hover:bg-purple-700 text-white">
							Download
						</Button>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							{isMobileMenuOpen ? (
								<X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
							) : (
								<Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
						<nav className="flex flex-col gap-2">
							{navLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.label}
								</a>
							))}
							<div className="flex gap-2 mt-4 px-4">
								<Button
									variant="outline"
									className="flex-1 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400"
								>
									OpenLovable Pro
								</Button>
								<Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
									Download
								</Button>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
