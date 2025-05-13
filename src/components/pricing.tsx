import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    price: '22.99',
    features: [
      'Everything has no content',
      'A small chat related Cookie fixed',
      'Provided parts of sentences fly into your mouth',
    ],
  },
  {
    name: 'BUSINESS',
    price: '69.99',
    features: [
      'Everything has no content',
      'A small chat related Cookie fixed',
      'Provided parts of sentences fly into your mouth',
    ],
    highlighted: true,
  },
  {
    name: 'PREMIUM',
    price: '224.99',
    features: [
      'Everything has no content',
      'A small chat related Cookie fixed',
      'Provided parts of sentences fly into your mouth',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Choose the plan that's right for
            <br />
            your business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name of Lorem
            Ipsum decided to leave for the far World of Grammar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-lg bg-white p-8 shadow-lg ${
                plan.highlighted ? 'transform scale-105 shadow-xl' : ''
              }`}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-4xl font-bold text-blue-600">
                    ${plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  This is a monthly recurring payment.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-600 text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-black text-white hover:bg-gray-900'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;