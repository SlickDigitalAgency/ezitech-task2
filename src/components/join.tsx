import { motion } from 'framer-motion';

const Join = () => {
  return (
    <section className="bg-[#1E5BB7] py-24 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Join With Over 100K Members
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers
            ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they
            abused her for their.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 rounded-sm hover:bg-black/90 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;