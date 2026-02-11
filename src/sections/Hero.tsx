import { Button } from '@/components/ui/button';
import { Download, ChevronDown, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/30 dark:via-gray-950 dark:to-gray-950" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            New here? Build your first app in 5 minutes
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              Flexible, local & open-source
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">AI app builder</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Use your favorite AI models and tools.{' '}
            <span className="font-semibold text-gray-900 dark:text-white">Zero lock-in.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Dyad for macOS (Apple Silicon)
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-6 text-base font-medium rounded-xl"
            >
              More platforms
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Download count */}
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-16">
            1 Million+ Downloads
          </p>

          {/* App Screenshot */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-gray-200 dark:border-gray-800">
              {/* Browser chrome */}
              <div className="bg-gray-100 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-md px-4 py-1 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-[8px]">d</span>
                    gentle-fox-chat...
                    <span className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-[10px] rounded">Pro 1412 credits</span>
                  </div>
                </div>
              </div>
              
              {/* App content mock */}
              <div className="bg-white dark:bg-gray-950 flex h-[400px] sm:h-[500px]">
                {/* Sidebar */}
                <div className="w-16 sm:w-20 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-4 gap-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 text-xs">🏠</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                    <span className="text-white text-xs">💬</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">⚙️</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">📚</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">🛒</span>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 flex">
                  {/* Chat panel */}
                  <div className="w-1/2 border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-gray-500">New Chat</span>
                      <span className="text-xs text-gray-400">Version 2</span>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Weddings, Corporate Events, and Private Parties.</span>
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Client Social Proof:</span> A refined testimonials section to build trust with potential clients.
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Event Inquiry Form:</span> A fully styled contact form specifically designed for catering requests.
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Mobile-First Design:</span> Optimized for seamless browsing on tablets and smartphones.
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4">
                      <div className="flex items-center justify-between text-xs text-green-600 dark:text-green-400 mb-2">
                        <span>✓ All tasks completed (4/4)</span>
                      </div>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Ask Dyad to build..." 
                          className="w-full px-3 py-2 pr-20 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                          <span className="text-[10px] text-gray-400">Agent</span>
                          <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Gemini 3 Flash</span>
                          <span className="text-[10px] px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded">Pro</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preview panel */}
                  <div className="w-1/2 p-4">
                    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden h-full">
                      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🍽️</span>
                          <span className="font-semibold text-gray-900 dark:text-white">SavoryPalate</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 text-xs border border-gray-200 dark:border-gray-700 rounded-full">Appetizers</span>
                          <span className="px-3 py-1 text-xs border border-gray-200 dark:border-gray-700 rounded-full">Main Course</span>
                          <span className="px-3 py-1 text-xs bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full">Desserts</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 flex items-center justify-center">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center cursor-pointer hover:bg-black/60 transition-colors">
                              <Play className="w-6 h-6 text-white ml-1" />
                            </div>
                          </div>
                          <span className="text-6xl">🍰</span>
                        </div>
                        <div className="absolute top-4 right-4 px-2 py-1 bg-white dark:bg-gray-800 rounded-md text-sm font-semibold">
                          $14
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Dark Chocolate Lava</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Vanilla bean gelato, berry coulis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-violet-200 dark:bg-violet-900/20 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
