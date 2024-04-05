import FaPython from "react-icons/fa";

const data = {
  about: {
    title: "About Me",
    content:
      "I'm a Full Stack Software Developer with over eight years of programming experience. I love solving problems and I'm always looking to learn new skills. My projects feature websites, games, computational mathematics and machine learning, and they often intersect with my other interests of classical music, visual art and film.",
  },
  experience: {
    title: "Experience",
    content: [
      {
        name: "DataAnnotation.tech",
        position: "Software Developer - AI Trainer",
        date: "Nov 2023 - Present",
        description: [
          "Contributing to the development of complex AI models that perform coding tasks in languages such as Python, Java, Javascript, and SQL",
          "Devising creative and challenging prompts, evaluating code and producing high-quality write-ups to benchmark the performance abilities of AI models",
        ],
      },
      {
        name: "SmartCone Technologies Inc.",
        position: "Software Development Engineer",
        date: "Feb 2023 - Nov 2023",
        description: [
          "Primary developer of IoT software to collect, process and store complex environmental data from remote sensors used by companies such as Disney and United Airlines",
          "Engineered all aspects of the project including design, feature integration, CI/CD, unit testing, remote deployment, and communication with other hardware and software project teams",
          "Pioneered the software from the ground up to be modular, configurable and scalable using Python, Bash, Sqlite3, Azure, Docker, Jenkins, and Git",
        ],
      },
    ],
  },
};

export default data;
