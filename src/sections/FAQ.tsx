import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Is Dyad free? What\'s the catch?',
    answer: 'Dyad is completely free and open-source. There\'s no catch—you can use it forever without paying anything. The only costs are if you choose to use paid AI API keys, but you can also use free models from Google, OpenRouter, or run local models with Ollama at zero cost.',
  },
  {
    question: 'What can you build with Dyad?',
    answer: 'You can build full-stack web applications with React, Next.js, or vanilla JavaScript. Dyad supports database integration with Supabase, authentication, API endpoints, and deployment to GitHub and Vercel. From simple landing pages to complex SaaS applications, Dyad can handle it all.',
  },
  {
    question: 'Can you build desktop apps with Dyad?',
    answer: 'Yes! Dyad supports building desktop applications using Capacitor. You can create cross-platform desktop apps for Windows, macOS, and Linux from your web codebase. Mobile app support is also available for iOS and Android.',
  },
  {
    question: 'How is Dyad different from Bolt or Lovable?',
    answer: 'Dyad runs locally on your machine, giving you complete privacy and control over your code. Unlike cloud-based tools, your code never leaves your computer unless you choose to deploy it. Dyad is also fully open-source, so you can inspect, modify, and extend the codebase.',
  },
  {
    question: 'Do I need coding experience to use Dyad?',
    answer: 'No coding experience is required! Dyad uses natural language prompts to generate working applications. Just describe what you want to build, and Dyad will create the code for you. However, having some basic understanding of web development can help you write better prompts.',
  },
  {
    question: 'Can I use Dyad offline?',
    answer: 'Absolutely! If you set up local AI models using Ollama, you can use Dyad completely offline. This is perfect for working on airplanes, in areas with poor internet, or when you want maximum privacy for your projects.',
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-4">
            <HelpCircle className="w-3 h-3" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 dark:border-gray-800 rounded-xl px-6 data-[state=open]:border-purple-200 dark:data-[state=open]:border-purple-800 transition-colors"
            >
              <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
