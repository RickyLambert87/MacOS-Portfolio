const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "May 5, 2023",
    title:
      "This was my first ever attempt at HTML and CSS, My Debut in Web Development",
    image: "/images/veg.png",
    link: "https://github.com/TechsAvey2024/Living-Life-On-The-Veg",
  },
  {
    id: 2,
    date: "Sep 16, 2023",
    title: "I had to build this as it was my Grandmothers favourite game Yahtzee, made in HTML, CSS & JavaScript",
    image: "/images/yahtzee.png",
    link: "https://github.com/TechsAvey2024/Yahtzee-js?tab=readme-ov-file",
  },
  {
    id: 3,
    date: "Apr 28, 2024",
    title: "Infinite Horizons: The goal of this project is to create a Blog web application using Node.js, Express.js, and EJS.",
    image: "/images/blog1.png",
    link: "https://github.com/TechsAvey2024/infinite-horizons",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["TailwindCSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "EJS  "],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/RickyLambert87",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://Ricky-dev.co.uk/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/autisticrick87",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "www.linkedin.com/in/ricky-lambert",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/me.jpg",
  },
  {
    id: 2,
    img: "/images/me7.jpg",
  },
  {
    id: 3,
    img: "/images/me6.jpg",
  },
  {
    id: 4,
    img: "/images/me2.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Little Sprouts & Co Ecommerce Web App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Little Sprouts.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Little Sprouts eCommerce website is a sleek and modern platform designed for shopping the latest collections of natural products.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Holland&Barrets store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "little-sprouts.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/RickyLambert87/littlesproutes",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "little-sprouts.png",
          icon: "/images/sprouts.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/sprouts.png",
        },{
          id: 6,
          name: "little-sprouts1.png",
          icon: "/images/little.png",
          kind: "file",
          fileType: "img",
          position: "top-30 right-80",
          imageUrl: "/images/little.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/figma.png",
          kind: "file",
          fileType: "fig",
          href: "https://figma.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Ai Support Agent",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Customer Support Agent.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The AI B2B Customer Support Agent is a smart platform that streamlines business support using AI-driven responses.",
            "It helps companies handle customer queries faster, providing instant, context-aware answers without manual effort.",
            "Think of it like having a virtual support team—analyzing issues, suggesting solutions, and improving customer satisfaction.",
            "Built with Next.js and Tailwind, the app is fast, responsive, and looks professional across all devices."
],
        },
        {
          id: 2,
          name: "support-agent.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/RickyLambert87/Echo-ai",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "echo-agent.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/figma.png",
          kind: "file",
          fileType: "fig",
          href: "https://figma.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Youtube Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "NewTube Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "NewTube is a modern video platform that lets users upload, share, and explore content seamlessly from their desktops.",
            "It’s designed for speed and convenience, so you can watch, post, and manage videos without waiting or interruptions.",
            "Users can organize playlists, follow creators, and receive real-time notifications for new uploads.",
            "Built with NextJS, the app runs smoothly on both iOS and Android, featuring a clean, responsive interface."
          ],
        },
        {
          id: 2,
          name: "newtube.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/RickyLambert87/new-tube",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "newtube.png",
          icon: "/images/newtube.svg",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/newtube.svg",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/figma.png",
          kind: "file",
          fileType: "fig",
          href: "https://figma.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Me-and-my-friends.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me7.jpg",
    },
    {
      id: 2,
      name: "Pigging-around.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me3.jpg",
    },
    {
      id: 3,
      name: "Spontaneous-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/me2.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.jpg",
      description: [
          "Hey! I’m Ricky 👋, a full-stack and blockchain self taught student who loves building web3 projects and practical apps from scratch.",
          "I focus on JavaScript, React, Next.js, and smart contracts—and I’m all about making things run smooth, fast, and intuitive.",
          "I enjoy clean UI, good UX, and writing code that’s readable, maintainable, and actually works without pulling your hair out.",
          "When I’m not coding, you’ll find me experimenting with Ai, blockchain tech, exploring new frameworks, or geeking out over the latest dev tools 😎",
],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };