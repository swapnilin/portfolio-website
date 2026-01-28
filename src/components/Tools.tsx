import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const tools = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Numpy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
  { name: 'Tensorflow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Keras', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg' },
  { name: 'Pytorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'Anaconda', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg' },
  { name: 'Trulens', logo: 'https://www.thequalityduck.co.uk/wp-content/uploads/2024/04/trulens.jpg' },
  { name: 'Colab', logo: 'https://colab.research.google.com/img/colab_favicon_256px.png' },
  { name: 'DVC', logo: 'https://dvc.org/wp-content/uploads/2025/10/dvc-logo.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'MlFlow', logo: 'https://mlflow.org/img/mlflow-black.svg' },
  { name: 'Kubeflow', logo: 'https://www.kubeflow.org/images/logo.svg' },
  { name: 'Apache Airflow', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Ragas', logo: 'https://docs.ragas.io/en/stable/_static/imgs/logo.png' },
  { name: 'Optuna', logo: 'https://raw.githubusercontent.com/optuna/optuna/master/docs/image/optuna-logo.png' },
  { name: 'Amazon Sagemaker', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Vertex AI', logo: 'https://www.gstatic.com/bricks/image/me6u4lx8TR7uZxMdl7YC5WlyZC0P2y0LzMAYP3mICUJJz4x7eZ0AXWaXc3n9EPNxfvCoFc6Y3mmmGg.png' },
  { name: 'Prometheus', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
  { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
  { name: 'Langchain', logo: 'https://images.seeklogo.com/logo-png/61/1/langchain-icon-logo-png_seeklogo-611655.png' },
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Tools, Languages & Frameworks
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-4 group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center transition-all duration-300">
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerText = '🛠️';
                  }}
                />
              </div>
              <span className="text-gray-700 font-medium text-center">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
