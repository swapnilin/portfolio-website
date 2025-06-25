import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch" // ✅ Ensures equal height alignment
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Adjusted Image Container (Same Height as Bio) */}
          <motion.div
            className="flex items-stretch" // ✅ Ensures it stretches fully
            variants={fadeInUp}
          >
            <img src="/portfolio-website/swapnil_bio.JPEG" alt="Swapnil Kangralkar" className="w-full h-full object-cover rounded-2xl" />
          
          </motion.div>

          {/* Bio Section (Takes 2 Columns, Aligns with Image) */}
          <motion.div className="md:col-span-2 flex flex-col justify-between space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-700" variants={fadeInUp}>
              Hello there, my name is Swapnil Kangralkar. I am a Data Scientist based in Toronto, Canada.<br/><br/>
              <strong>Fun fact</strong> - I was born on 04/20 (April 20) at 4:20 pm<br/><br/>
              I am a lifelong learner and I am currently in the journey of learning everything there is to Machine Learning and Artificial Intelligence. One technology at a time. <br/>
              My portfolio of projects is a representation of all the practical knowledge that I have gained and applied over time.
              To view my projects portfolio visit the Github repository by clicking the button below.
              <br/><br/>
              Join me in this journey.
            </motion.p>

            {/* Experience & LinkedIn Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">12+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">1400+</h3>
                <p className="text-gray-600">LinkedIn Followers</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
