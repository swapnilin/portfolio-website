import { Code, Database, BrainCircuit, History } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const skills = [
  {
    category: 'Machine Learning | Artificial Intelligence | Generative AI',
    icon: BrainCircuit,
    skills: [
      'Supervised Learning & Unsupervised Learning: Random Forest, XGBoost, SVM',
      'Deep Learning: CNN, LSTM, Tensorflow, Pytorch','Time Series Forecasting: ARIMA, Prophet',
      'Reinforcement Learning: Q-learning, Thompson Sampling, Contextual Bandits',
      'Statistics & Calculus: Maxima, Minima, Vector Calculus, Gradient Descent, Learning rate, Cost/Loss function, Distributions, Probability, Bagging and Bootstrapping',
      'GenAI: Object Detection, Object Identification, Text-to-Speech, Fine Tuned Conversational AI',
      'Natural Language Processing: NLTK, TextBlob', 'Explainable AI (XAI): SHAP, LIME', 
      'MLOps', 'A/B Testing','Langchain', 'Huggingface','Prompt Engineering'
    ],
    tools:['Tableau', 'PowerBI', 'Palantir', 'IBM SPSS Modeller', ' Alteryx', 'Azure ML', 'AWS Sagemaker', 'Google Vertex AI']
  },
  {
    category: 'Project Management',
    icon: History,
    skills: ['Initiating', 'Stakeholder Management', 'Requirement gathering', 'Planning', 'Estimating', 'Scoping'],
    tools: ['Microsoft Project, Jira, Confluence']
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['Teradata', 'MongoDB', 'Oracle', 'BigQuery'],
    tools: ['Teradata Studio, MongoDB Compass, Oracle SQL Developer'],
  },
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'SQL'],
    tools: ['Visual Studio Code, Jupyter Notebook, Teradata Studio, Oracle SQL Developer'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-1"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.h3 className="text-center mb-6">
          Things I've picked up over the years
        </motion.h3>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            const isMachineLearning = category.category === "Machine Learning | Artificial Intelligence | Generative AI";
            return (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md flex flex-col ${
                  isMachineLearning ? "md:col-span-3" : "md:col-span-1"
                }`}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon & Title (Side by Side) */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Tools Section */}
                {category.tools && (
                  <div className="mt-auto pt-4 border-gray-200">
                   <p className="text-indigo-800 text-sm mt-3">
                    <strong>Tools:</strong> {category.tools.join(', ')}
                  </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
