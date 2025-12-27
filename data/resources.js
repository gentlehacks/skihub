// data/resources.js
const learningPaths = [
  {
    id: "fullstack-web-dev",
    title: "Full-Stack Web Development Roadmap",
    category: "Web Development",
    description:
      "Master web development from HTML basics to full-stack applications with JavaScript and Node.js.",
    creator: "@naijaDevPro",
    resourceCount: 6,
    difficulty: "Beginner to Intermediate",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
    modules: [
      {
        name: "1. Foundations",
        resources: [
          {
            id: 1,
            title: "HTML & CSS Full Course",
            type: "video",
            source: "YouTube - SuperSimpleDev",
            duration: "6.5 hours",
            url: "https://youtu.be/G3e-cpL7ofc",
            description:
              "Learn by building multiple real-world projects from scratch. Perfect for absolute beginners.",
          },
          {
            id: 2,
            title: "JavaScript Basics for Beginners",
            type: "video",
            source: "YouTube - freeCodeCamp",
            duration: "3 hours",
            url: "https://youtu.be/jS4aFq5-91M",
            description:
              "Comprehensive guide covering all JS fundamentals needed for frontend and backend development.",
          },
        ],
      },
      {
        name: "2. Frontend Mastery",
        resources: [
          {
            id: 3,
            title: "Learn React JS - Full Course",
            type: "video",
            source: "YouTube - freeCodeCamp",
            duration: "10 hours",
            url: "https://youtu.be/bMknfKXIFA8",
            description:
              "Build a complete application while learning React, one of the most in-demand frontend frameworks.",
          },
          {
            id: 4,
            title: "Frontend Developer Roadmap",
            type: "interactive",
            source: "roadmap.sh",
            duration: "Self-paced",
            url: "https://roadmap.sh/frontend",
            description:
              "Interactive guide showing exactly what to learn next to become a professional frontend developer.",
          },
        ],
      },
      {
        name: "3. Backend & Tools",
        resources: [
          {
            id: 5,
            title: "Node.js and Express.js - Full Course",
            type: "video",
            source: "YouTube - freeCodeCamp",
            duration: "8 hours",
            url: "https://youtu.be/Oe421EPjeBE",
            description:
              "Build a complete REST API with Node.js and Express.js through practical project-based learning.",
          },
          {
            id: 6,
            title: "Git and GitHub for Beginners",
            type: "video",
            source: "YouTube - freeCodeCamp",
            duration: "1 hour",
            url: "https://youtu.be/RGOj5yH7evk",
            description:
              "Master version control essentials that every professional developer needs for collaboration.",
          },
        ],
      },
    ],
  },
  {
    id: "zero-to-uiux-designer",
    title: "From Zero to UI/UX Designer",
    category: "Design",
    description:
      "Learn design thinking, master Figma, and build a portfolio-ready project.",
    creator: "@chiomaDesigns",
    resourceCount: 4,
    difficulty: "Beginner",
    thumbnail:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Figma", "UI Design", "UX Principles", "Prototyping"],
    modules: [
      {
        name: "1. Design Fundamentals",
        resources: [
          {
            id: 7,
            title: "Figma Tutorial for Beginners",
            type: "video",
            source: "YouTube - Bring Your Own Laptop",
            duration: "2 hours",
            url: "https://youtu.be/FTFaQWZBqQ8",
            description:
              "Step-by-step Figma tutorial starting from installation, perfect for complete beginners.",
          },
          {
            id: 8,
            title: "UI Design Principles",
            type: "video",
            source: "YouTube - AJ&Smart",
            duration: "45 min series",
            url: "https://www.youtube.com/playlist?list=PLPmnoMVpkxfi8yqdB9oKpOqNl4SgvVvTN",
            description:
              "Learn practical UI design rules to create interfaces that are both beautiful and functional.",
          },
        ],
      },
      {
        name: "2. Practical Execution",
        resources: [
          {
            id: 9,
            title: "Build a Mobile App Design - Full Project",
            type: "video",
            source: "YouTube - DesignCourse",
            duration: "3.5 hours",
            url: "https://youtu.be/HZuk6Wkx_Eg",
            description:
              "Follow along to create a complete mobile app design from scratch for your portfolio.",
          },
          {
            id: 10,
            title: "Weekly UI Design Challenges",
            type: "practice",
            source: "Sketch Community",
            duration: "Ongoing",
            url: "https://www.sketch.com/community/challenges/",
            description:
              "Participate in weekly design challenges to build consistency and grow your portfolio.",
          },
        ],
      },
    ],
  },
  {
    id: "cross-platform-mobile",
    title: "Cross-Platform Mobile App Development",
    category: "App Development",
    description: "Build iOS and Android apps with React Native and Flutter.",
    creator: "@simeonDev",
    resourceCount: 4,
    difficulty: "Intermediate",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600",
    tags: ["React Native", "Flutter", "Dart", "Mobile Development"],
    modules: [
      {
        name: "1. React Native Development",
        resources: [
          {
            id: 11,
            title: "React Native Tutorial for Beginners",
            type: "video",
            source: "YouTube - Programming with Mosh",
            duration: "2 hours",
            url: "https://youtu.be/0-S5a0eXPoc",
            description:
              "Industry-standard tutorial teaching React Native fundamentals through practical examples.",
          },
          {
            id: 12,
            title: "React Native Official Documentation",
            type: "docs",
            source: "Meta (Facebook)",
            duration: "Self-paced",
            url: "https://reactnative.dev/docs/getting-started",
            description:
              "The official documentation - essential learning for mastering React Native development.",
          },
        ],
      },
      {
        name: "2. Flutter Development",
        resources: [
          {
            id: 13,
            title: "Flutter Crash Course",
            type: "video",
            source: "YouTube - freeCodeCamp",
            duration: "1.5 hours",
            url: "https://youtu.be/1gDhl4leEzA",
            description:
              "Quick introduction to Flutter by building a basic app to understand the framework.",
          },
          {
            id: 14,
            title: "Flutter for Beginners - Interactive Tutorial",
            type: "interactive",
            source: "Dart Dev",
            duration: "Self-paced",
            url: "https://dart.dev/guides",
            description:
              "Official hands-on tutorial that lets you write and run Flutter code directly in your browser.",
          },
        ],
      },
    ],
  },
  {
    id: "data-analysis-python",
    title: "Data Analysis & Visualization with Python",
    category: "Data Science",
    description:
      "Start analyzing data, creating visualizations, and building machine learning models.",
    creator: "@dataQueen",
    resourceCount: 4,
    difficulty: "Beginner to Intermediate",
    thumbnail:
      "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Python", "Pandas", "Machine Learning", "Data Visualization"],
    modules: [
      {
        name: "1. Python & Data Analysis",
        resources: [
          {
            id: 15,
            title: "Python for Data Science - Full Course",
            type: "video",
            source: "YouTube - freeCodeCamp",
            duration: "12 hours",
            url: "https://youtu.be/LHBE6Q9XlzI",
            description:
              "Comprehensive course covering NumPy, Pandas, and Matplotlib - the essential data science toolkit.",
          },
          {
            id: 16,
            title: "Kaggle Micro-Courses",
            type: "interactive",
            source: "Kaggle",
            duration: "Self-paced",
            url: "https://www.kaggle.com/learn",
            description:
              "Hands-on courses with real datasets on the world's largest data science community platform.",
          },
        ],
      },
      {
        name: "2. Machine Learning Fundamentals",
        resources: [
          {
            id: 17,
            title: "Machine Learning for Beginners",
            type: "video",
            source: "YouTube - freeCodeCamp",
            duration: "9 hours",
            url: "https://youtu.be/i_LwzRVP7bg",
            description:
              "Gentle introduction to machine learning using Scikit-learn, the most beginner-friendly ML library.",
          },
          {
            id: 18,
            title: "Google's Machine Learning Crash Course",
            type: "interactive",
            source: "Google",
            duration: "15 hours",
            url: "https://developers.google.com/machine-learning/crash-course",
            description:
              "Professional course combining theory with practical TensorFlow exercises from Google experts.",
          },
        ],
      },
    ],
  },
  {
    id: "advanced-ui-ux-product-design",
    title: "Advanced UI/UX & Product Design",
    category: "Design",
    description:
      "Move beyond basics to master design systems, user research, prototyping, and product strategy for senior design roles.",
    creator: "@designLead",
    resourceCount: 6,
    difficulty: "Intermediate to Advanced",
    thumbnail:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: [
      "Design Systems",
      "User Research",
      "Figma Advanced",
      "Product Strategy",
    ],
    modules: [
      {
        name: "1. Advanced Design Systems",
        resources: [
          {
            id: 25,
            title: "Building Design Systems in Figma - Master Class",
            type: "video",
            source: "YouTube - Figma",
            duration: "2.5 hours",
            url: "https://youtu.be/Hx02SaL_IH0",
            description:
              "Official Figma tutorial on creating scalable design systems, components, and advanced auto-layout techniques.",
          },
          {
            id: 26,
            title: "Design Systems Handbook",
            type: "article",
            source: "DesignBetter by InVision",
            duration: "3 hour read",
            url: "https://www.designbetter.co/design-systems-handbook",
            description:
              "Comprehensive guide to planning, building, and maintaining design systems at scale in product teams.",
          },
        ],
      },
      {
        name: "2. User Research & Testing",
        resources: [
          {
            id: 27,
            title: "User Research Methods Masterclass",
            type: "video",
            source: "YouTube - NNgroup",
            duration: "1.5 hours",
            url: "https://youtu.be/Wf_s6V5jEFw",
            description:
              "Learn qualitative and quantitative research methods from the Nielsen Norman Group, UX research pioneers.",
          },
          {
            id: 28,
            title: "Usability Testing Guide",
            type: "interactive",
            source: "Maze",
            duration: "Self-paced",
            url: "https://maze.co/guides/usability-testing/",
            description:
              "Practical guide to planning, conducting, and analyzing usability tests with real case studies.",
          },
        ],
      },
      {
        name: "3. Product Design Strategy",
        resources: [
          {
            id: 29,
            title: "Product Design for Developers",
            type: "video",
            source: "YouTube - Fireship",
            duration: "20 minutes",
            url: "https://youtu.be/7C-d6tQyE_0",
            description:
              "Quick, dense guide to thinking like a product designer - great for developers wanting design skills.",
          },
          {
            id: 30,
            title: "Design Leadership & Strategy Resources",
            type: "article",
            source: "UX Collective",
            duration: "Ongoing",
            url: "https://uxdesign.cc/design-leadership-resources-8c8c8c8c8c8c",
            description:
              "Curated collection of articles on design leadership, team management, and strategic decision-making.",
          },
        ],
      },
    ],
  },
  {
    id: "digital-marketing-growth",
    title: "Mobile-First Digital Marketing & Social Media Growth",
    category: "Marketing & Business",
    description:
      "Learn to build brands, create viral content, and drive sales on Instagram, TikTok, and Facebook—starting with zero budget.",
    creator: "@growthNaija",
    resourceCount: 6,
    difficulty: "Beginner",
    thumbnail:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Social Media", "Content", "Instagram", "TikTok"],
    modules: [
      {
        name: "1. Content Strategy & Creation",
        resources: [
          {
            id: 31,
            title: "Social Media Marketing Full Course for 2024",
            type: "video",
            source: "YouTube - Simplilearn",
            duration: "7 hours",
            url: "https://youtu.be/example",
            description:
              "Comprehensive guide covering all major platforms, content planning, and algorithm hacks.",
          },
          // Add more resources...
        ],
      },
      // Add more modules...
    ],
  },
  {
    id: "cloud-devops-nigeria",
    title: "Cloud Engineering & DevOps Fundamentals",
    category: "Cloud & Infrastructure",
    description:
      "Master the tools to build, deploy, and scale applications on cloud platforms like AWS. Learn infrastructure-as-code, containers, and CI/CD pipelines highly sought after by Nigerian tech companies.",
    creator: "@cloudNaija",
    resourceCount: 7,
    difficulty: "Intermediate",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    modules: [
      {
        name: "1. Cloud Foundations with AWS",
        resources: [
          {
            id: 39,
            title: "AWS Certified Cloud Practitioner - Complete Course",
            type: "video",
            source: "YouTube - freeCodeCamp",
            duration: "14 hours",
            url: "https://youtu.be/SOTamWNgDKc",
            description:
              "Comprehensive introduction to AWS core services, pricing models, and cloud concepts. Essential foundation for any cloud role, taught with clear explanations.",
          },
          {
            id: 40,
            title: "AWS Free Tier Hands-On Labs",
            type: "interactive",
            source: "AWS Skill Builder",
            duration: "Self-paced",
            url: "https://explore.skillbuilder.aws/learn",
            description:
              "Official AWS free training with hands-on labs using their Free Tier. Practice deploying EC2 instances, S3 buckets, and other core services at no cost.",
          },
        ],
      },
      {
        name: "2. Containers & Orchestration",
        resources: [
          {
            id: 41,
            title: "Docker Crash Course for Beginners",
            type: "video",
            source: "YouTube - TechWorld with Nana",
            duration: "2 hours",
            url: "https://youtu.be/3c-iBn73dDE",
            description:
              "Practical guide to containerizing applications with Docker. Nana explains complex concepts clearly with real examples, perfect for visual learners.",
          },
          {
            id: 42,
            title: "Kubernetes for Beginners",
            type: "interactive",
            source: "Katacoda (by OReilly)",
            duration: "Self-paced",
            url: "https://www.katacoda.com/courses/kubernetes",
            description:
              "Interactive browser-based scenarios to learn Kubernetes without local setup. Hands-on practice with pods, deployments, and services.",
          },
        ],
      },
      {
        name: "3. Infrastructure as Code & CI/CD",
        resources: [
          {
            id: 43,
            title: "Terraform for Beginners",
            type: "video",
            source: "YouTube - freeCodeCamp",
            duration: "1.5 hours",
            url: "https://youtu.be/SLB_c_ayRMo",
            description:
              "Learn Infrastructure as Code (IaC) with Terraform to automate cloud provisioning. Crucial skill for modern DevOps roles.",
          },
          {
            id: 44,
            title: "GitHub Actions CI/CD Pipeline Tutorial",
            type: "video",
            source: "YouTube - Tech with Tim",
            duration: "1 hour",
            url: "https://youtu.be/mFFXuXjVgkU",
            description:
              "Build automated testing and deployment pipelines using GitHub Actions—free for public repositories and perfect for portfolio projects.",
          },
          {
            id: 45,
            title: "DevOps Roadmap & Project Ideas",
            type: "article",
            source: "roadmap.sh",
            duration: "1 hour read",
            url: "https://roadmap.sh/devops",
            description:
              "Structured learning path showing exactly what to learn next, with project suggestions to build a compelling portfolio.",
          },
        ],
      },
    ],
  },
];


export { learningPaths };
