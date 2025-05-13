import { motion } from 'framer-motion';

const features = [
  {
    title: 'Big Benefits for Small Business',
    description: 'Provide your users with the content they need, exactly when they need it. Highlight features that matter.',
    image: './img_showcase_1.jpg',
    bullets: [
      'Writing Your Business Plan',
      'Credit Card Processing Made Easy',
      'Reward loyal customers with points',
    ],
  },
  {
    title: 'How Frame is different',
    description: 'Focus on creating tools that help you build better websites for your clients. Highlight features that matter.',
    image: 'img_showcase_2.jpg',
    bullets: [
      'Writing Your Business Plan',
      'Credit Card Processing Made Easy',
      'Reward loyal customers with points',
    ],
  },
  {
    title: 'All in One Place',
    description: 'Focus on creating tools that help you build better websites for your clients. Highlight features that matter.',
    image: './img_showcase_1.jpg',
    bullets: [
      'Writing Your Business Plan',
      'Credit Card Processing Made Easy',
      'Reward loyal customers with points',
    ],
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#EDF2F7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="text-gray-600 max-w-2xl">
            Powerful and easy to use tools that help you build better websites for your clients.
            Focus on creating tools that help you build better websites.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
