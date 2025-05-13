import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  {
    question: "What is Frame?",
    answer: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name."
  },
  {
    question: "Is this available in my country?",
    answer: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name."
  },
  {
    question: "How much time does Frame last?",
    answer: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name."
  },
  {
    question: "I have technical problem what do I do?",
    answer: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name."
  }
];

const TryItToday = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Try It Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One
            day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-sm hover:bg-blue-700 transition-colors"
          >
            Start Now
          </motion.button>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <img
              src="./laptop_1.jpg"
              alt="Dashboard Preview"
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 text-left"
              >
                <Check className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.question}</h3>
                  <p className="text-gray-600 text-sm">{feature.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryItToday;