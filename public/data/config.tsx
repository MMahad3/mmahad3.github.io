import {
  Box,
  BrainCircuit,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
} from "lucide-react";
//import { desc } from "motion/react-client";

export const UserData = {
  name: "Mahad",
  lastname: "Munir",
  email: "mahadmunir6@gmail.com",
  phone: "+92 334 3005859",
  profession: "Software Developer | AI Engineer | Data Scientist ",
  about:
    "I'm a final year Computer Science student at FAST University passionate about building scalable and user-friendly applications. With a solid foundation in AI, Data Science, and Quantum Computing, I enjoy solving complex problems and creating innovative solutions. Currently, I am working on a computer vision-based anomaly detection system for public safety in my final-year project.",
  github: "https://github.com/MMahad3",
  linkedin: "https://www.linkedin.com/in/mahad-munir/",
};
export const MySkills = {
  name: "Skills",
  icon: <BrainCircuit className="scale-[60%]" />,
  href: "/Skills",
  content: [
    {
      group: "Programming Languages",
      content: [
        { name: "C", imgpath: "/data/images/c.svg", proficiency: 1 },
        { name: "C++", imgpath: "/data/images/cpp.svg", proficiency: 1 },
        { name: "C#", imgpath: "/data/images/csharp.svg", proficiency: 1 },
        { name: "Javascript", imgpath: "/data/images/js.png", proficiency: 1 },
        { name: "Typescript", imgpath: "/data/images/ts.png", proficiency: 1 },
        { name: "Python", imgpath: "/data/images/python.png", proficiency: 1 },
        {
          name: "Assembly Script",
          imgpath: "/data/images/assembly.svg",
          proficiency: 1,
        },
        {
          name: "Shell Script",
          imgpath: "/data/images/bash.svg",
          proficiency: 1,
        },
      ],
    },
    {
      group: "Scripting & Markup",
      content: [
        { name: "LaTeX", imgpath: "/data/images/latex.svg", proficiency: 1 },
    
        { name: "Yaml", imgpath: "/data/images/yaml.svg", proficiency: 1 },
      ],
    },
    {
      group: "Frontend Development",
      content: [
        { name: "HTML5", imgpath: "/data/images/html.svg", proficiency: 1 },
        { name: "CSS3", imgpath: "/data/images/css.svg", proficiency: 1 },
        
        { name: "React", imgpath: "/data/images/react.svg", proficiency: 1 },
        { name: "NextJS", imgpath: "/data/images/nextjs.svg", proficiency: 1 },
        {
          name: "TailwindCSS",
          imgpath: "/data/images/tailwind.svg",
          proficiency: 1,
        },
        {
          name: "ShadCN/UI",
          imgpath: "/data/images/shadcn.svg",
          proficiency: 1,
        },
        // { name: "Flutter", imgpath: "/data/images/flutter.svg", proficiency: 1 },
        // { name: "Sycamore", imgpath: "/data/images/sycamore.svg", proficiency: 1 },
        { name : "React-Native" ,imgpath: "/data/images/react.svg", proficiency: 1},
        { name: "Blazor", imgpath: "/data/images/blazor.svg", proficiency: 1 },
      ],
    },
    {
      group: "Backend Development",
      content: [
        {
          name: "FastAPI",
          imgpath: "/data/images/fastapi.svg",
          proficiency: 1,
        },
        {
          name: "Django",
          imgpath: "/data/images/django.svg",
          proficiency: 1,
        },
        // { name: "Actix", imgpath: "/data/images/actix.svg", proficiency: 1 },
        { name: "NodeJS", imgpath: "/data/images/node.png", proficiency: 1 },
        {
          name: "ExpressJS",
          imgpath: "/data/images/express.png",
          proficiency: 1,
        },
         { name: ".NET", imgpath: "/data/images/dotnet.svg", proficiency: 1 },
        
        
      ],
    },
    {
      group: "DevOps & Cloud",
      content: [
        { name: "Azure", imgpath: "/data/images/azure.svg", proficiency: 1 },
        { name: "AWS", imgpath: "/data/images/aws.svg", proficiency: 1 },
    
        { name: "Terraform", imgpath: "/data/images/terraform.svg", proficiency: 1 },
        { name: "Kubernetes", imgpath: "/data/images/kubernetes.svg", proficiency: 1 },
        {
          name: "Github Actions",
          imgpath: "/data/images/githubactions.svg",
          proficiency: 1,
        },
        { name: "Docker", imgpath: "/data/images/docker.svg", proficiency: 1 },
        
        
      ],
    },
    {
      group: "Databases",
      content: [
        {
          name: "MongoDB",
          imgpath: "/data/images/mongodb.svg",
          proficiency: 1,
        },
        {
          name: "PostgreSQL",
          imgpath: "/data/images/postgres.png",
          proficiency: 1,
        },
        // { name: "SurrealDB", imgpath: "/data/images/surrealdb.svg", proficiency: 1 },
        // { name: "Neo4J", imgpath: "/data/images/neo4j.svg", proficiency: 1 },
      
        {
          name: "Firebase",
          imgpath: "/data/images/firebase.png",
          proficiency: 1,
        },
        
        // {
        //   name: "Pinecone",
        //   imgpath: "/data/images/Pinecone.svg",
        //   proficiency: 1,
        // },
        { name: "MySQL", imgpath: "/data/images/mysql.svg", proficiency: 1 },
      ],
    },
    {
      group: "ORM",
      content: [
        // {
        //   name: "DrizzleORM",
        //   imgpath: "/data/images/DrizzleORM.svg",
        //   proficiency: 1,
        // },
      ],
    },
    {
      group: "Payment Systems",
      content: [
        // { name: "Stripe", imgpath: "/data/images/Stripe.svg", proficiency: 1 },
      ],
    },
    {
      group: "Data Science & Machine Learning",
      content: [
        { name: "Keras", imgpath: "/data/images/keras.svg", proficiency: 1 },
        {
          name: "Tensorflow",
          imgpath: "/data/images/tensorflow.svg",
          proficiency: 1,
        },
        {
          name: "PyTorch",
          imgpath: "/data/images/pytorch.svg",
          proficiency: 1,
        },
        
        {
          name: "Scikit-Learn",
          imgpath: "/data/images/scikit-learn.svg",
          proficiency: 1,
        },
        {
          name: "Matplotlib",
          imgpath: "/data/images/matplotlib.svg",
          proficiency: 1,
        },
        { name: "Power Bi", imgpath: "/data/images/powerbi.svg", proficiency: 1 },
        { name: "Numpy", imgpath: "/data/images/numpy.svg", proficiency: 1 },
        { name: "Pandas", imgpath: "/data/images/pandas.svg", proficiency: 1 },
        { name: "Scipy", imgpath: "/data/images/scipy.svg", proficiency: 1 },
        { name: "OpenCV", imgpath: "/data/images/opencv.svg", proficiency: 1 },
        { name: "Transformers", imgpath: "/data/images/transformers.png", proficiency: 1},
      ],
    },
    {
      group: "Automation, Testing, & Debugging",
      content: [
        {
          name: "Selenium",
          imgpath: "/data/images/selenium.svg",
          proficiency: 1,
        },
        
      ],
    },
    {
      group: "Others",
      content: [
      
        { name: "NPM", imgpath: "/data/images/npm.svg", proficiency: 1 },
       
        // { name: "Celery", imgpath: "/data/images/celery.svg", proficiency: 1 },
        // { name: "ElectronJS", imgpath: "/data/images/electron.png", proficiency: 1 },
       
        
        { name: "Cuda", imgpath: "/data/images/cuda.svg", proficiency: 1 },
        
        
        
        { name: "Qiskit", imgpath: "/data/images/qiskit.svg", proficiency: 1 },
        
    
        
        { name: "Canva", imgpath: "/data/images/canva.svg", proficiency: 1 },
        { name: "Figma", imgpath: "/data/images/figma.svg", proficiency: 1 },
        
      
      ],
    },
  ],
};

export const MyProjects = {
  name: "Projects",
  icon: <Box className="scale-[60%]" />,
  href: "/Projects",
  content: [
    {
      title: "Fake News Detection",
      Logo: null,
      type: "CLI Application",
      description:
        "Deep Learning NLP tasks focused on text classification using RNN, LSTM, Bi-RNN, and Bi-LSTM models with additional feature engineering like sentiment, readability, and structure.",
      startDate: "Mar 2025",
      endDate: "Apr 2025",
      link: "https://github.com/MMahad3/Fake-News-Detection",
      tech: ["Python","Tensorflow","Pandas","Scikit-Learn","PyTorch","OpenCV"],
    },
    {
      title: "Anomaly Detection in CCTV Footages",
      Logo: null,
      type: "Web Application",
      description:
        "This project focuses on detecting anomalies in human behavior from CCTV footage to enhance public safety. It uses AI techniques and hybrid vision transformers to identify abnormal activities. The repository includes model training scripts and data labeling tools, with a mobile app integration.",
      startDate: "Sep 2024",
      endDate: "Dec 2024",
      link: "https://github.com/MMahad3/anomaly-detection-CV",
      tech: ["Python","Tensorflow","Pandas","React","Transformers","Javascript","Scikit-Learn","PyTorch","OpenCV"],
    },
    {
      title: "Fifa World Cup Predictions",
      Logo: null,
      type: "CLI Application",
      description:
        "A data science project predicting FIFA World Cup outcomes using a Kaggle dataset and machine learning techniques like linear and logistic regression. The project involves data preprocessing, feature engineering, and model evaluation to analyze team performance and predict match results.",
      startDate: "Apr 2024",
      endDate: "May 2024",
      link: "https://github.com/MMahad3/Fifa-World-Cup-Predictions",
      tech: ["Python","Power Bi","Pandas","Scikit-Learn","PyTorch"],
    },
    {
      title: "Convex Hull Generator",
      Logo: null,
      type: "Web Application",
      description:
        "Generates convex hulls using different algorithms. Also implemented an algorithm explained in a research paper.",
      startDate: "Nov 2023",
      endDate: "Dec 2023",
      link: "https://github.com/MMahad3/ConvexHull_Generator",
      tech: ["Javascript","CSS3","HTML5"],
    },

    {
      title: "E-Commerce Website",
      Logo: null,
      type: "Web Application",
      description:
        "This e-commerce website is built with React.js, Node.js, and SQL, featuring product listings, user authentication, and a shopping cart. It provides a seamless shopping experience with a responsive UI and efficient backend architecture.",
      startDate: "Oct 2023",
      endDate: "Dec 2023",
      link: "https://github.com/MMahad3/E-Commerce-Website-MaadBazaar-",
      tech: ["React","NodeJS","MySQL"],
    },
    {
      title: "Variational Quantum Classifier",
      Logo: null,
      type: "CLI Application",
      description:
        "Implementation of a Variational Quantum Classifier (VQC) using Qiskit, exploring quantum machine learning concepts like quantum neural networks, feature mapping, and optimization techniques.",
      startDate: "Sep 2024",
      endDate: "Oct 2024",
      link: "https://github.com/MMahad3/Quantum-Computing---Variational-Quantum-Classifier-VQC-",
      tech: ["Python","Qiskit"],
    },
    {
      title: "Quantum Secure Communication",
      Logo: null,
      type: "CLI Application",
      description:
        "Simulated QSDC using Qiskit to securely transmit quantum-encoded messages and detect eavesdropping through quantum state discrepancies.",
      startDate: "Oct 2024",
      endDate: "Dec 2024",
      link: "https://github.com/MMahad3/Quantum-Secure-Direct-Communication-QSDC-",
      tech: ["Python","Qiskit"],
    },
    {
      title: "Parallel File Compression",
      Logo: null,
      type: "CLI Application",
      description:
        "A file compression application that is based on PDC concepts created in C++. It can only encode .txt and .bmp files and is completely CLI based.",
      startDate: "Oct 2023",
      endDate: "Dec 2023",
      link: "https://github.com/MMahad3/Parallelized_File_Compression",
      tech: ["C++"],
    },
    {
      title: "Image Classifier",
      Logo: null,
      type: "Web Application",
      description:
        "An image classification model using deep learning and CNNs to detect the freshness of fruits and vegetables.",
      startDate: "Apr 2024",
      endDate: "May 2024",
      link: "https://github.com/MMahad3/Image-classifier",
      tech: ["Tensorflow","Python"],
    },
  ],
};
export const MyExperiences = {
  name: "Experience",
  icon: <BriefcaseBusiness className="scale-[60%]" />,
  href: "/Experience",
  content: [
    
    {
      logo: "/data/images/sbp.png",
      title: "State Bank of Pakistan",
      positions: ["Machine Learning Intern"],
      location: "Karachi, Pakistan",
      startDate: "Jun 2024",
      endDate: "Aug 2024",
      desc: "Researched fake and genuine currency note detection using machine learning, focusing on computer vision techniques for authentication. Due to mobile camera limitations, the project shifted to a research-based approach. Collaborated with mentors to explore algorithmic solutions and documented key findings on enhancing currency verification methods.",
    },
    
  
  ],
};
export const MyEducations = {
  name: "Education",
  icon: <GraduationCap className="scale-[60%]" />,
  href: "/Education",
  content: [
    {
      logo: "/data/logos/FAST.png",
      title: "Bachelor Degree of Computer Science",
      location: "FAST NUCES, Karachi, Pakistan",
      startDate: "Sep 2021",
      endDate: "Jun 2025",
      desc:"",
    },
    {
      logo: "/data/images/bckk.jpeg",
      title: "Intermediate",
      location: "Bahria College Karsaz, Karachi, Pakistan",
      startDate: "Jul 2019",
      endDate: "Sept 2021",
      desc:"",
    },
    {
      logo: "/data/images/aps.jpeg",
      title: "Matriculation",
      location: "Army Public School, Karachi, Pakistan",
      startDate: "Aug 2007",
      endDate: "Apr 2019",
      desc:"",
    },
  ],
};
export const MyResume = {
  name: "Resume",
  icon: <FileText className="scale-[60%]" />,
  href: "/Resume",
  resumePath: "/data/MahadResume.pdf",
};
export const NavItems = {
  MySkills,
  MyProjects,
  MyExperiences,
  MyEducations,
  MyResume,
};
