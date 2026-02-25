import React, { useEffect, useState } from 'react';
import {
  Users,
  BookCheck,
  BarChart3,
  Menu,
  X,
  CheckCircle2,
  Mail,
  ChevronDown,
} from 'lucide-react';
import { DemoHeroGeometric } from './components/demo';

const FAQ_ITEMS = [
  {
    question: 'How long does it take to set up ClassBridge for our school?',
    answer: 'Most schools are up and running within a week. We handle the technical setup while you focus on getting your teachers comfortable with the new tools. Our team guides you through every step.',
  },
  {
    question: 'Do our teachers need special training to use ClassBridge?',
    answer: 'Not at all. ClassBridge is designed to feel familiar to teachers who are used to traditional methods. We provide simple training sessions, but most teachers find it intuitive from day one.',
  },
  {
    question: 'What happens to our existing student records and data?',
    answer: 'We safely transfer all your existing records into ClassBridge. Your historical data stays intact and accessible, while new information integrates seamlessly with what you already have.',
  },
  {
    question: 'How do parents access their child\'s information?',
    answer: 'Parents receive simple login details and can access updates through any web browser or our mobile app. They get automatic notifications about attendance, grades, and school announcements.',
  },
  {
    question: 'What if we need help or have technical issues?',
    answer: 'Our support team is always ready to help. We offer phone support, email assistance, and can even provide on-site help when needed. You\'re never left to figure things out alone.',
  },
] as const;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {/* Enhanced Navigation */}
      <nav aria-label="Main navigation" className={`fixed w-full z-50 transition-all duration-300 border-b border-blue-200/30 shadow-lg shadow-blue-100/20 backdrop-blur-xl ${isScrolled ? 'bg-white/95' : 'bg-white/90'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ClassBridge
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8">
                {['Features', 'Benefits', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden text-slate-600 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-blue-200/30 py-4 animate-fade-in shadow-lg">
              {['Features', 'Benefits', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-6 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main id="main-content">
      {/* New Animated Hero Section */}
      <DemoHeroGeometric />

      {/* Enhanced Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Everything Your School Needs
          </h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Streamline your educational institution with our comprehensive suite of tools
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Users className="h-12 w-12 text-stratos-500" />,
                title: 'Student Management',
                description:
                  'Manage student information and daily activities with our intuitive digital tools that simplify school operations.',
              },
              {
                icon: <BookCheck className="h-12 w-12 text-stratos-500" />,
                title: 'Learning Resources',
                description:
                  'Provide students with access to educational resources and materials to support their learning journey.',
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-stratos-500" />,
                title: 'Complete Management',
                description:
                  'Streamline every aspect of school management—fees, grades, and communication—in one simple platform.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/30 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-blue-100/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section id="benefits" className="py-24 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/20"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Why Schools Choose ClassBridge
          </h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Experience the difference that thoughtful technology makes in education
          </p>
          <div className="grid md:grid-cols-2 gap-8 relative">
            {[
              'Works with your current school routines—no disruption, just enhancement',
              'Teachers love how simple it is to manage daily tasks and engage students',
              'Parents stay connected with real-time updates on their child\'s progress',
              'Save hours each week on administrative tasks that used to take forever',
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-200/30 hover:bg-white/80 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-100/20 transition-all duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-700 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/20 blur-3xl"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Get started in minutes, not months. Here's how simple it is:
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Quick Setup',
                description: 'We help you set up your school profile and import your class lists. Takes just a few minutes.',
              },
              {
                step: '02',
                title: 'Start Teaching',
                description: 'Teachers begin taking attendance and sharing interactive content with students right away.',
              },
              {
                step: '03',
                title: 'Watch It Work',
                description: 'Parents receive updates, administrators see insights, and everyone stays connected effortlessly.',
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/20"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Key Features
          </h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Everything you need to modernize your school, all in one place
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Daily Operations',
                description: 'Streamline daily school activities with simple, efficient digital tools.',
              },
              {
                title: 'Learning Resources',
                description: 'Provide students with access to helpful educational materials and resources.',
              },
              {
                title: 'Parent Updates',
                description: 'Keep parents informed with automatic progress reports and announcements.',
              },
              {
                title: 'Grade Management',
                description: 'Record and track student grades with easy-to-use gradebooks.',
              },
              {
                title: 'Fee Tracking',
                description: 'Manage school fees and payments with clear, organized records.',
              },
              {
                title: 'Communication Hub',
                description: 'Connect teachers, parents, and administrators in one secure platform.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-200/30 hover:bg-white/80 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-100/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-indigo-100/30 blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to see how ClassBridge can transform your school? Let's start the conversation.
          </p>
          <a
            href="mailto:contact@classbridge.in"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-300 transform hover:scale-105 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <Mail className="h-6 w-6" />
            <span>Contact Us Today</span>
          </a>
          <p className="text-sm text-slate-500 mt-4">
            Email us at contact@classbridge.in to schedule a demo
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/20"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Common questions from schools just like yours
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = faqOpenIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-200/30 bg-white/60 backdrop-blur-sm overflow-hidden hover:bg-white/80 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-100/20 transition-all duration-300"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-2xl"
                    onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                  >
                    <h3 className="text-xl font-semibold text-slate-800">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-6 w-6 flex-shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    hidden={!isOpen}
                    className={`${isOpen ? 'block' : 'hidden'} px-6 pb-6`}
                  >
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-16 border-t border-blue-200/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-700/20"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 relative">
            <div className="mb-8 md:mb-0">
              <span className="text-3xl font-bold text-white">ClassBridge™</span>
              <p className="text-white/60 text-sm mt-1">by Operium Technologies Pvt Ltd</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#" className="text-white/70 hover:text-stratos-200 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded" aria-label="Privacy Policy (page coming soon)">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-stratos-200 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded" aria-label="Terms of Service (page coming soon)">
                Terms of Service
              </a>
              <a href="mailto:contact@classbridge.in" className="text-white/70 hover:text-stratos-200 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center relative">
            <div className="text-white/60 font-medium">
              © {new Date().getFullYear()} Operium Technologies Pvt Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;