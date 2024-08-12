const experiences = [
  {
    title: "Data Analyst",
    company_name: "Divvy bikeshare",
    icon: "nah",
    iconBg: "#E6DEDD",
    date: "July 2024 ",
    points: [
      "Utilized advanced data cleaning techniques and analytical methods to process publicly available Divvy Bikeshare data, ensuring accuracy and reliability for informed decision-making.",
      "Created compelling visualizations that highlighted key trends and patterns, effectively demonstrating to stakeholders that promoting subscriptions is a more advantageous choice for the bikeshare program's growth and sustainability.",
      "Documented the entire process meticulously in a Kaggle notebook, providing a transparent and reproducible workflow that showcases the project's depth and thoroughness."
    ],
  },
  {
    title: "Developer",
    company_name: "Aeon ecommerce",
    icon: "nah",
    iconBg: "#E6DEDD",
    date: "November 2023 ",
    points: [
      "Conceptualized, designed, and developed a highly modular and configurable e-commerce website and an intuitive admin dashboard for efficient management.",
      "Ensured code maintainability and reusability by implementing a flexible architecture that allows users to easily customize the platform to meet their specific needs.",
      "Developed with React.js and Next.js, utilizing a component-based architecture for easy modification and extension and utilized Styled Components for styling, allowing for seamless theming and styling adjustments.",
    ],
  },
  {
    title: "Developer",
    company_name: "Article summarizer",
    icon: "nah",
    iconBg: "#383E56",
    date: "Mar 2023",
    points: [
      "Developed an AI-powered summarizer using advanced NLP techniques to extract key information and create concise summaries, enhancing readability and saving time. The system efficiently handles diverse content, providing accurate and coherent summaries across various topics and domains.",
    ],
  },
  {
    title: "React Developer",
    company_name: "ArtiGenious",
    icon: "nah",
    iconBg: "#E6DEDD",
    date: "Apr 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Data Analysis for Divvy the bikeshare",
    description:
      "Conducted a comprehensive analysis of Divvy Bikeshare data to uncover usage patterns, identify trends, and optimize subscription strategies.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "cross-platform",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: "nah",
    source_code_link: "https://www.kaggle.com/code/arunjithts/case-study",
    deployment_link: "https://www.kaggle.com/code/arunjithts/case-study",
    download_link: "",
  },
  {
    name: "Aeon Ecommerce",
    description:
      "Developed a comprehensive e-commerce platform from the ground up. React.js frontend with a robust backend for seamless shopping experiences and it comes with payment gateway integration.",
    tags: [
      {
        name: "mvc",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: "nah",
    source_code_link: "https://gitlab.com/arunjith.official/movieticketbookingusingmongodbandmvc",
    deployment_link: "",
    download_link: "",
  },
  {
    name: "Digestify",
    description:
      "An article summarizer which uses openAI API as backend. Built with Redux and Rapid API as API client",
    tags: [
      {
        name: "openaiapi",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "vite-react",
        color: "pink-text-gradient",
      },
    ],
    image: "nah",
    source_code_link: "https://gitlab.com/arunjith.official/summerizer/",
    deployment_link: "https://summarizer-amber.vercel.app/",
    download_link: "",
  },
  {
    name: "ArtiGenius",
    description:
      "An AI image generation tool with it's own community.Built with MERN stack and openAI API",
    tags: [
      {
        name: "openaiapi",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "nah",
    source_code_link: "https://gitlab.com/arunjith.official/ai-image-generator-mern",
    deployment_link: "https://artigenius.vercel.app/",
    download_link: "",
  },


];

export { experiences, projects };
