import { Github, Code, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const openSourceFeatures = [
  {
    icon: Globe,
    title: 'Runs locally',
    description: 'Build as many apps as you want. Never worry about a platform cutting you off.',
  },
  {
    icon: Code,
    title: 'Open-source & transparent',
    description: 'Inspect, fork, and extend the codebase for personal or non-competing use.',
  },
  {
    icon: Users,
    title: 'Built with a global community',
    description: 'Participate through code, bug reports, and feature requests.',
  },
];

export function OpenSource() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mb-4">
              <Code className="w-3 h-3" />
              Control
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Local &{' '}
              <span className="text-cyan-500">open-source</span>
            </h2>

            {/* GitHub Stars */}
            <a
              href="https://github.com/ishandutta2007/openlovable"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mb-8"
            >
              <Github className="w-4 h-4" />
              <span>20k stars on GitHub</span>
              <span className="text-yellow-500">⭐</span>
            </a>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              The most popular open-source AI app builder—you get ownership, transparency, and control.
            </p>

            <div className="space-y-6">
              {openSourceFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
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

          {/* Right - GitHub Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              {/* GitHub header */}
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">openlovable-sh / openlovable</span>
                </div>
                <div className="flex-1" />
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>Code</span>
                  <span>Issues 289</span>
                  <span>Pull requests 30</span>
                </div>
              </div>

              {/* GitHub content */}
              <div className="p-6 bg-white dark:bg-gray-950">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">d</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">openlovable</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Public</p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Local, open-source AI app builder for power users
                  <br />
                  <span className="text-gray-500 dark:text-gray-400">v0 / Lovable / Replit / Bolt alternative</span>
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-blue-400" />
                    <span>TypeScript 97.6%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span>JavaScript 1.8%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span>CSS 0.6%</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-gray-500">⭐</span>
                    Star
                    <span className="text-gray-400">19.3k</span>
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>+2.2k stars</span>
                    <span>this month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
