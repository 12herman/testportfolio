import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Herman",
  initials: "DV",
  url: "https://www.linkedin.com/in/herman-e-876849264/",
  location: "Thoothukudi",
  locationLink: "https://maps.app.goo.gl/nU3mSGLA2M7gyDfD6",
  description:
    "Web developer and AI storytelling YouTuber. I love creating digital experiences and sharing knowledge. Very active on LinkedIn.",
  summary:
    "I am a passionate full-stack web developer with React JS, Angular JS, Gatsby JS, and more expertise. I have worked at Adiv Technologies as a front-end developer and currently work at Qosteq as a full-stack developer. I am dedicated to creating user-friendly, high-quality web applications.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "TailwindCss",
    "AntDesign",
    "Next.js",
    "Node.js",
    "Figma",
    "UI/UX",
    "GIMP",
    "PhotoPea",
    "Inkscape",
    "Capcut",
    "MYSQL",
    "Gatsby.js",
    "Angular.js",
    "ReactNative",
    "Electron.js",
    "Wix",
    "Puppeteer",
    "C#",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Contact" },
  ],
  contact: {
    email: "eherman810@gmail.com",
    tel: "+916369975517",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/12herman",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/herman-e-876849264/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/channel/UCwHLa9-Exc8RVJOrJ7ugE3w",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Qosteq",
      href: "https://www.qosteq.com/",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "/qosteqlogo.png",
      start: "August 2023",
      end: "Present",
      description:
        "specializing in private company projects. Full-stack developer working with React.js, MySQL, and C# (.NET Framework). Expert in web automation using Puppeteer. Skilled in UI/UX design with Figma, photo editing, logo design, and video editing. Occasionally involved in R&D.",
    },
    {
      company: "Adiv Technologies",
      badges: [],
      href: "https://adiv.tech/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/Adiv-technologics.png",
      start: "June 2022",
      end: "August 2023",
      description:
        "Adiv Technologies as a Frontend Developer and UI/UX Designer. Experienced in React.js, AngularJS, Vue.js, and UI/UX design with Figma, Photopea, and Inkscape. Also worked on book-making and publishing projects.",
    },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Tamilnadu cooperative",
      href: "https://www.tncu.tn.gov.in/",
      degree: "Diploma in Cooperative Management (D'Cop)",
      logoUrl: "/tncu-logo.png",
      start: "2020",
      end: "2021",
    },
    {
      school: "Manonmaniam-Sundaranar-University",
      href: "https://www.msuniv.ac.in/",
      degree: "Bachelor's Degree (B.sc.Physics)",
      logoUrl: "/Manonmaniam-Sundaranar-University.png",
      start: "2016",
      end: "2019",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Conexra Website",
      href: "https://chatcollect.com",
      dates: "November 2024 - December 2024",
      active: true,
      description:
        "I built a static site using React.js, Tailwind CSS, Framer Motion, and Ant Design, ensuring a sleek, responsive, and interactive user experience with smooth animations and a modern UI. 🚀",
      technologies: [
        "HTML",
        "CSS",
        "TailwindCss",
        "Reactjs",
        "Framer Motion",
        "Ant design",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.conexra.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/conexra-website-img.png",
      video:
        "",
    },
    {
      title: "Tamil Bible Free API",
      href: "https://chatcollect.com",
      dates: "June 2024 - (1 week)",
      active: true,
      description:
        "Personal Project,Developed and launched the world’s first freely available Tamil Bible API, an open-source project hosted on GitHub. Built using Puppeteer, Node.js, and JavaScript, this API automates the extraction and delivery of Tamil Bible scriptures, providing seamless access for developers and researchers. By leveraging web scraping and API development techniques, the project ensures accuracy and reliability while contributing to the open-source community. This initiative showcases expertise in backend development, automation, and open-source contributions, making valuable religious data accessible to a global audience.",
      technologies: [
        "Javascript",
        "Nodejs",
        "Puppeteer",
        "Github",
      ],
      links: [
        {
          type: "API Link",
          href: "https://ehermandeveloper.github.io/Rc_bible/Bible_Data/New%20Testament/1_%E0%AE%AE%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%87%E0%AE%AF%E0%AF%81.json",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ehermandeveloper/Rc_bible.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/free-bible-api.png",
      video:
        "",
    },
    {
      title: "YouTube Copy",
      href: "https://chatcollect.com",
      dates: "April 2024 - (1 week)",
      active: true,
      description:
        "Developed a YouTube Video Downloading Web API and Web Application from scratch, handling everything from Figma UI/UX design to full-stack development and deployment. Built the frontend using React.js, Ant Design, React Icons, and Tailwind CSS, while the backend API was developed with Node.js. The project was hosted for free on Render, though it is currently inactive due to unpaid hosting. This project highlights expertise in full-stack development, API integration, UI/UX design, and cloud deployment.",
      technologies: [
        "Figma",
        "UI/UX",
        "Nodejs",
        "React Js",
        "Render",
        "React Icon",
        "Ant Design",
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/17WIcVFr33iISuVTJAlIzH/yt_video_downloader?node-id=0-1&t=uVxhihMHrLJMbD7H-1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://ehermandeveloper.github.io/YTubeCopy/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ehermandeveloper/YTubeCopy.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Youtubecopy-webapp.png",
      video:
        "",
    },
    {
      title: "Tender Cuts",
      href: "https://www.figma.com/design/YShhvy8sFRLJ8NljCEKerS/Meat-Online?t=CYQBXKM5spv8GFhW-1",
      dates: "September 2024 - (2 weeks)",
      active: true,
      description:
        "I designed the UI/UX for Tender Cuts, a fresh meat-selling platform focused on delivering natural and organic food. The design includes separate interfaces for both customers and delivery boys, offering an intuitive and seamless user experience. A standout feature is the live cutting process display, where users can watch the fresh meat being cut, ensuring transparency and enhancing the customer experience. The project emphasizes ease of use, with a clean and modern design to showcase high-quality, fresh products.",
      technologies: [
        "Figma",
        "UI",
        "UX"
      ],
      links: [
        {
          type: "Figma Design",
          href: "https://www.figma.com/design/YShhvy8sFRLJ8NljCEKerS/Meat-Online?t=CYQBXKM5spv8GFhW-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Treandcut.jpg",
      video:
        "",
    },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    {
      title: "Addinstech",
      href: "https://www.addinstech.com/",
      dates: "October 2024 - (3days)",
      active: true,
      description:
        "I independently developed a static website using Wix in just three days as a freelance project for a company specializing in Revit Add-ins, websites, mobile apps, and desktop applications. The website was designed to be professional, user-friendly, and visually appealing, ensuring easy maintenance and scalability without coding.",
      technologies: [
        "Wix",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.addinstech.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/addinstech-web-img.png",
      video:
        "",
    },
    {
      title: "Ghilli AI",
      href: "https://chatcollect.com",
      dates: "April 2024 - (10 days)",
      active: true,
      description:
        "Developed a Chatbot Web Application from scratch, handling everything from Figma UI/UX design to full-stack development and deployment. Built the frontend using AngularJS, Material Icons, and the Gemini API, while the backend API was developed with Node.js. The project was hosted for free on Render, though it is currently inactive due to unpaid hosting. This project highlights expertise in AI integration, full-stack development, UI/UX design, and cloud deployment.",
      technologies: [
        "Figma",
        "UI/UX",
        "Nodejs",
        "Angular Js",
        "Angular Material",
        "Render",
        "Github"
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/RablseE7ABPOj4nPy54gH9/Ghilli-AI?node-id=0-1&p=f&t=y95CVK1Rdvo5pfUI-0",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://ehermandeveloper.github.io/GhilliAI/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ehermandeveloper/GhilliAI.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ghili-ai.png",
      video:
        "",
    },

    {
      title: "Insight Counselings",
      href: "https://llm.report",
      dates: "June 2023 - July 2023",
      active: true,
      description:
        " I developed a static counseling website for a client using Gatsby.js and Tailwind CSS. The project focused on creating a fast, responsive, and SEO-friendly platform to enhance user experience. I optimized performance, ensured accessibility, and implemented best practices for modern web development.",
      technologies: [
        "Gatsby.js",
        "Javascript",
        "Tailwind Css",
      ],
      links: [
        {
          type: "Website",
          href: "https://insightcounselings.com/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/insightcounselings-web-img.png",
      video: "",
    },
    
  ],
  hackathons: [
    {
      title: "Svelte-Steps (Component)",
      dates: "June 2024 - (2 hours)",
      location: "Svelte, TailwindCss, HTML, Css, Js",
      description:
        "Developed a Svelte Steps Component in just 2 hours using HTML, Tailwind CSS, CSS, JavaScript, and the Svelte framework. This project demonstrates efficiency in rapid UI development, component-based architecture, and modern frontend technologies.",
      image:
        "/Svelte.png",
      mlh: "",
      links: [{
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/ehermandeveloper/svelte_steps.git",
      },],
    },
    
    {
      title: "Loading Screen (Component)",
      dates: "July 2023 - (3 hours)",
      location: "HTML, Css, Js",
      description:
        "Developed a Loading Screen Component using HTML, CSS, and JavaScript, featuring smooth animations and optimized performance. This project highlights expertise in UI/UX design, CSS animations, and frontend development.",
      icon: "public",
      image:
        "/loading-screen-loop.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://12herman.github.io/spinner-html-css/",
        }
      ],
    },
    {
      title: "Analog Clock",
      dates: "February 2023 - (1 day)",
      location: "HTML, Css, Js",
      description:
        "Developed an Analog Clock using HTML, CSS, and JavaScript, implementing real-time functionality with dynamic styling. This project demonstrates proficiency in DOM manipulation, CSS animations, and JavaScript timing functions.",
      image:
        "/clock-project.png",
      mlh: "",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://12herman.github.io/analog-clock/",
      },{
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/12herman/analog-clock.git",
      },],
    },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
