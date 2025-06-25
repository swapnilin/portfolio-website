import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "GenAI - Custom Receipe Generator",
    description:
      "A personal receipe generator app using OpenAI API",
    image: "receipeG_app.png",
    tech: ["Python", "GenAI", "OpenAI", "Flask", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/swapnilin/GenAI_Receipe_Generator/tree/main",
    live: "",
    details: {
      "problem": "Finding recipes based on available ingredients can be time-consuming and inefficient",
      "solution": "Developed a custom recipe generator app that suggests meals based on user-input ingredients using an Open API",
      "features": [
        "Ingredient-based recipe recommendations",
        "AI-powered meal suggestions",
        "Customizable dietary preferences",
        "User-friendly interface for quick inputs"
      ],
      "impact": "Helping users reduce food waste and discover new meal ideas effortlessly."
    },
  },
  {
    title: "Credit Eligibility Predictor",
    description: "A Calendly clone for seamless meeting scheduling",
    image: "credit.png",
    tech: ["Python", "Streamlit", "Pandas", "Scikit-Learn"],
    github: "https://github.com/swapnilin/Credit_Eligibility_Application_with_Streamlit?tab=readme-ov-file",
    live: "https://loan-application-app.streamlit.app/",
    details: {
      "problem": "Assessing credit risk accurately is crucial for financial institutions to minimize defaults",
      "solution": "Developed a predictive model using the German credit risk dataset to classify applicants as low or high risk",
      "features": [
        "Machine learning-based credit risk prediction",
        "Feature engineering for improved model accuracy",
        "Model evaluation with precision-recall metrics",
        "Explainability of risk factors for transparency"
      ],
      "impact": "Enhancing decision-making in credit risk assessment, reducing default rates, and improving financial inclusion."
    },
  },
  {
    title: "Text Summarizer using BART",
    description: "Summarize large texts concisely with AI instantly.",
    image: "text.png",
    tech: ["Python", "GenAI", "HuggingFace", "Transformers", "Large Language Model (LLM)"],
    github: "https://github.com/swapnilin/Text-Summarization-with-BART",
    live: "https://huggingface.co/spaces/swapnilforcat/text-summarizer",
    details: {
      "problem": "Manually summarizing large text documents is time-consuming and inefficient",
      "solution": "Developed a text summarization app using BART on Hugging Face Spaces for quick and accurate summaries",
      "features": [
        "AI-powered text summarization with BART",
        "Supports multiple input formats (articles, reports, etc.)",
        "Adjustable summary length for customization",
        "Deployed on Hugging Face Spaces for easy access"
      ],
      "impact": "Helping users save time by generating concise, high-quality summaries instantly"
    },
  },
  {
    title: "Object Detection & Text-to-Speech",
    description: "A minimalist Object Detection application for impaired vision",
    image: "object.png",
    tech: ["Python", "Transformers", "Large Language Models", "HuggingFace", "AI"],
    github: "https://github.com/swapnilin/Object-Identification-using-HuggingFace/tree/main",
    live: "https://huggingface.co/spaces/swapnilforcat/object_detection",
    details: {
      problem:
      "Traditional image recognition apps lack accessibility features for impaired vision",
      solution:
        "Developed an image-to-description app using advanced AI models for object recognition and audio transcription for enhanced accessibility",
      features: [
        "Object identification with DETR-ResNet-50",
        "Image description generation",
        "Audio transcript for impaired vision with vits-ljs",
        "AI-powered visual understanding",
      ],
      impact: "Empowering individuals with impaired vision by providing accessible image descriptions and insights.",
    },
  },
];
