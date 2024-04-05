import FaPython from "react-icons/fa";

const data = {
  about: {
    title: "About Me",
    content: [
      "I'm a Full Stack Software Developer with over eight years of programming experience. ",
      "I love solving problems and I'm always looking to learn new skills. ",
      "I received my B.Sc. in Honours Mathematics and Computer Science from McGill University, where I engaged in classes including Honours Algorithms & Data Structures, Programming Languages & Paradigms and Operating Systems. ",
      "My projects feature websites, games, computational mathematics and machine learning, and they often intersect with my other interests of classical music, visual art and film.",
    ],
  },
  experience: {
    title: "Work Experience",
    content: [
      {
        name: "DataAnnotation.tech",
        position: "Software Developer - AI Trainer",
        date: "Nov 2023 - Present",
        description: [
          "Contributing to the development of complex AI models that perform coding tasks in various programming languages.",
          "Devising creative and challenging prompts, evaluating code and producing high-quality write-ups to benchmark the performance abilities of AI models.",
        ],
        technologies: ["Python", "Java", "Javascript", "SQL"],
      },
      {
        name: "SmartCone Technologies Inc.",
        position: "Software Development Engineer",
        date: "Feb 2023 - Nov 2023",
        description: [
          "Primary developer of IoT software to collect, process and store complex environmental data from remote sensors used by companies such as Disney and United Airlines.",
          "Engineered all aspects of the project including design, feature integration, CI/CD, unit testing, remote deployment, and communication with other hardware and software project teams.",
          "Pioneered the software from the ground up to be modular, configurable and scalable.",
        ],
        technologies: [
          "Python",
          "Bash",
          "Sqlite3",
          "Azure",
          "Docker",
          "Jenkins",
          "Git",
        ],
      },
      {
        name: "Paper",
        position: "STEM Tutor",
        date: "Oct 2022 - Feb 2023",
        description: [
          "Performed virtual live-chat tutoring for students in Kindergarten through Grade 12, focusing on math, computer science, and physics.",
        ],
        technologies: ["Python", "Java"],
      },
      {
        name: "NSERC USRA - Semidefinite Programming for Graph Theory",
        position: "Summer Research",
        date: "May 2022 - Aug 2022",
        description: [
          "Used Razborov's flag algebra method to reduce bounds on small Ramsey numbers with Professor Sergey Norin.",
        ],
        technologies: ["C++"],
      },
    ],
  },
};

export default data;
