import FaPython from "react-icons/fa";

const data = {
  about: {
    title: "About Me",
    content: [
      "I'm a Toronto/Ottawa-based Software Developer with over eight years of programming experience. ",
      "I love solving problems and I'm always looking to learn new skills. ",
      "In 2022, I received my B.Sc. in Honours Mathematics and Computer Science from McGill University, where I engaged in classes including Honours Algorithms & Data Structures, Programming Languages & Paradigms and Operating Systems. ",
      "My projects feature websites, games, computational mathematics and machine learning, and they often intersect with my other interests of classical music, visual art, trivia, and film.",
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
        technologies: [],
      },
      {
        name: "NSERC USRA",
        position: "Summer Researcher",
        date: "May 2022 - Aug 2022",
        description: [
          "Engaged in combinatorics research utilizing computational mathematics which focused on semidefinite programming for graph theory.",
          "Used Razborov's flag algebra method to reduce bounds on small Ramsey numbers with Professor Sergey Norin.",
        ],
        technologies: ["C++"],
      },
    ],
  },
  projects: {
    title: "Projects",
    content: [
      {
        name: "Movie Trivia Bot",
        date: "Mar 2024 - Present",
        link: "https://discord.com/oauth2/authorize?client_id=1221230338815033535",
        desc: "Discord bot which displays film stills for users to guess",
        git: "",
        image: "/projects/moviebot.png",
        tags: ["Python", "PIL", "BeautifulSoup"],
      },

      {
        name: "Evolutionary Painter",
        date: "Feb 2024",
        link: "https://github.com/kaisjessa/EvolutionaryPainter/blob/main/data/blue.gif",
        desc: "Reproduces paintings with geometric shapes",
        git: "https://github.com/kaisjessa/EvolutionaryPainter/tree/main",
        image: "/projects/evpaint.png",
        tags: ["Java", "Processing", "AI"],
      },
      {
        name: "Painting Trivia Bot",
        date: "Sep 2023",
        link: "https://discord.com/oauth2/authorize?client_id=1006026011378462800",
        desc: "Discord bot which displays paintings for users to guess",
        git: "https://github.com/kaisjessa/PaintingTriviaBot",
        image: "/projects/paintingbot.png",
        tags: ["Python", "PIL", "BeautifulSoup"],
      },
      {
        name: "Pentago Twist Bot",
        date: "Apr 2021",
        link: "https://github.com/kaisjessa/Pentago-Twist-Bot/blob/main/report.pdf",
        desc: "Modified Monte Carlo tree search to play Pentago-Twist",
        git: "https://github.com/kaisjessa/Pentago-Twist-Bot",
        image: "/projects/pentago.png",
        tags: ["Java", "AI"],
      },
      {
        name: "Perfect Practice",
        date: "Jan 2021",
        link: "https://devpost.com/software/perfect-practice-7beprc",
        desc: "Tracks and reports mistakes while practicing an instrument",
        git: "https://github.com/kaisjessa/McHacks-Project",
        image: "/projects/practice.png",
        tags: ["Python", "AI", "Tensorflow"],
      },
      {
        name: "Blissful Browsing",
        date: "May 2020",
        link: "https://devpost.com/software/blissfulbrowsing",
        desc: "Chrome extension that filters out toxicity and hate speech from webpages",
        git: "https://github.com/kaisjessa/BlissfulBrowsing",
        image: "/projects/bb.png",
        tags: ["JavaScript", "AI", "Tensorflow"],
      },
      {
        name: "Project Euler",
        date: "Sep 2018 - Present",
        link: "https://projecteuler.net/archives",
        desc: "Solving Project Euler problems in Python",
        git: "https://github.com/kaisjessa/Project-Euler",
        image: "/projects/euler.png",
        tags: ["Python", "Math"],
      },
      {
        name: "Event Bot",
        date: "Oct 2017",
        link: "https://devpost.com/software/discordbot",
        desc: "Discord bot to create and manage group events",
        git: "",
        image: "/projects/eventbot.png",
        tags: ["JavaScript", "Firebase"],
      },
    ],
  },
};

export default data;
