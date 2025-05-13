import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#EDF2F7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-left">Get In Touch</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Write a Message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-sm hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-left space-y-8 pt-4"
          >
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase mb-2">EMAIL</h3>
              <p className="text-gray-600">probootstrap@gmail.com</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase mb-2">PHONE</h3>
              <p className="text-gray-600">+39 976 1382 9921</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase mb-2">FAX</h3>
              <p className="text-gray-600">+39 976 1382 9922</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase mb-2">ADDRESS</h3>
              <p className="text-gray-600">San Francisco, CA</p>
              <p className="text-gray-600">4th Floor8 Lower</p>
              <p className="text-gray-600">San Francisco street, M1 50F</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
