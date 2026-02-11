import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const testimonials = [
  {
    author: '@Fluxer_automações',
    avatar: '🚀',
    quote: "Dyad completely changed the way I build web interfaces. What I love the most is how intuitive and fast it is — it feels like having a design and dev partner that truly understands my ideas.",
  },
  {
    author: 'u/redditissocoolyoyo',
    avatar: '🎮',
    quote: "I built a poker game with Dyad. It worked very well. Will is working very diligently to add enhancements and fix bugs to make Dyad an even better tool. Best of all, it's local.",
  },
  {
    author: 'u/morgankhalil',
    avatar: '👨‍💻',
    quote: "Will, you're a genius. This is better than 95% of the other things I have tried, and I've tried them all going back 25 years. You're really on to something here.",
  },
  {
    author: 'u/stevilg',
    avatar: '🛠️',
    quote: "I fall into the category of a non-developer who likes to tinker with AI, and this project is amazing. Very well done.",
  },
  {
    author: 'u/Hot_Damage3335',
    avatar: '🔥',
    quote: "Honestly I was expecting a bolt.diy... but nothing to do with it, it's so much more user friendly. Your project is incredible!",
  },
  {
    author: 'u/JuanJValle',
    avatar: '💎',
    quote: "I just wanted to thank the team that is building Dyad. You have provided an excellent product that is easy to use and understandable with excellent and prompt support.",
  },
  {
    author: '@GGManera',
    avatar: '⚡',
    quote: "I'm ready to go all in on Dyad. This is hands down the most powerful tool I've ever used, and it's still in its early days. Open source, AI agnostic, runs locally... feels unreal.",
  },
  {
    author: '@goodhawk',
    avatar: '🦅',
    quote: "I do use this tool regularly. The open-source nature combined with its attractive design keeps me interested because it allows programmers and designers to express their ideas freely.",
  },
  {
    author: '@luiz_balisa',
    avatar: '⭐',
    quote: "Great app, I recommend it better than many paid ones out there.",
  },
];

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by builders worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See what users are saying about Dyad across social media and community platforms.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 flex items-center justify-center text-lg">
                  {testimonial.avatar}
                </div>
                <span className="font-medium text-gray-900 dark:text-white text-sm">
                  {testimonial.author}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div className="flex justify-center">
            <Button
              variant="secondary"
              onClick={() => setShowAll(true)}
              className="gap-2 bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700"
            >
              Show more
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
