const mockResults = [
  {
    id: 1,
    title: "Advanced React Patterns",
    category: "Frontend",
    content:
      "Delve into advanced patterns and techniques to improve the scalability and performance of your React applications...",
    date: "2023-05-15",
    author: "Alice Johnson",
    readTime: "18 min",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    category: "Backend",
    content:
      "Learn how to design and build highly scalable and performant APIs using Node.js, with best practices for security...",
    date: "2023-06-02",
    author: "Bob Smith",
    readTime: "22 min",
  },
  {
    id: 3,
    title: "Data Analysis with Pandas and NumPy",
    category: "Data Science",
    content:
      "Master data manipulation and analysis using Pandas and NumPy, essential tools in any data scientist's toolkit...",
    date: "2023-06-10",
    author: "Charlie Davis",
    readTime: "28 min",
  },
  {
    id: 4,
    title: "AI for Customer Support Automation",
    category: "AI",
    content:
      "Explore the role of AI in automating customer support functions, improving response times, and customer satisfaction...",
    date: "2023-06-18",
    author: "Dana White",
    readTime: "20 min",
  },
  {
    id: 5,
    title: "Mastering CSS Grid Layouts",
    category: "Frontend",
    content:
      "A deep dive into CSS Grid Layouts, showcasing how to create complex, responsive grid systems for modern web applications...",
    date: "2023-06-25",
    author: "Eve Parker",
    readTime: "14 min",
  },
  {
    id: 6,
    title: "Efficient Microservices with Express.js",
    category: "Backend",
    content:
      "Learn how to efficiently structure microservices using Express.js, focusing on building lightweight and scalable services...",
    date: "2023-06-02",
    author: "Franklin Lee",
    readTime: "24 min",
  },
  {
    id: 7,
    title: "Deep Learning with TensorFlow",
    category: "AI",
    content:
      "Dive into deep learning with TensorFlow, an open-source machine learning framework, to build powerful AI models...",
    date: "2023-07-12",
    author: "Grace Williams",
    readTime: "30 min",
  },
  {
    id: 8,
    title: "Data Visualization with D3.js",
    category: "Data Science",
    content:
      "Unlock the power of D3.js for creating dynamic, interactive data visualizations that bring insights to life...",
    date: "2023-07-18",
    author: "Hannah Scott",
    readTime: "35 min",
  },
  {
    id: 9,
    title: "Building Real-Time Applications with Node.js and Socket.IO",
    category: "Backend",
    content:
      "Learn how to create real-time applications such as chat apps or live notifications using Node.js and Socket.IO...",
    date: "2023-06-10",
    author: "Isaac Martin",
    readTime: "25 min",
  },
  {
    id: 10,
    title: "Progressive Web Apps with React",
    category: "Frontend",
    content:
      "Discover how to build Progressive Web Apps (PWAs) using React, providing a native app-like experience on the web...",
    date: "2023-07-25",
    author: "Jack Taylor",
    readTime: "20 min",
  },
  {
    id: 11,
    title: "Creating RESTful APIs with Django",
    category: "Backend",
    content:
      "Learn how to create powerful and secure RESTful APIs using Django and Django REST Framework for rapid development...",
    date: "2023-08-01",
    author: "Kathy Moore",
    readTime: "21 min",
  },
  {
    id: 12,
    title: "Building Interactive Dashboards with React and Chart.js",
    category: "Frontend",
    content:
      "Create interactive and visually appealing dashboards with React and Chart.js to display dynamic data in real-time...",
    date: "2023-08-05",
    author: "Louis Evans",
    readTime: "18 min",
  },
  {
    id: 13,
    title: "Data Cleaning Techniques for Machine Learning",
    category: "Data Science",
    content:
      "Learn effective data cleaning techniques to prepare datasets for machine learning algorithms, ensuring accurate results...",
    date: "2023-08-10",
    author: "Mia Brooks",
    readTime: "22 min",
  },
  {
    id: 14,
    title: "Serverless Architectures with AWS Lambda",
    category: "Backend",
    content:
      "Explore how to build and deploy serverless applications using AWS Lambda, reducing infrastructure management...",
    date: "2023-09-01",
    author: "Nathan Young",
    readTime: "26 min",
  },
  {
    id: 15,
    title: "Creating Voice Assistants with Dialogflow",
    category: "AI",
    content:
      "Learn how to create voice-based AI assistants using Dialogflow, a platform for building conversational interfaces...",
    date: "2023-09-10",
    author: "Olivia Carter",
    readTime: "19 min",
  },
  {
    id: 16,
    title: "Designing with Figma: A Complete Guide",
    category: "Frontend",
    content:
      "Master Figma, a powerful design tool, to create stunning UI/UX designs, prototyping, and collaboration with your team...",
    date: "2023-09-15",
    author: "Paul Thomas",
    readTime: "23 min",
  },
  {
    id: 17,
    title: "Automating Data Pipelines with Apache Airflow",
    category: "Data Science",
    content:
      "Automate your data workflows with Apache Airflow, an open-source tool for scheduling and monitoring data pipelines...",
    date: "2023-09-18",
    author: "Quinn Hernandez",
    readTime: "30 min",
  },
  {
    id: 18,
    title: "Building E-Commerce Platforms with Node.js",
    category: "Backend",
    content:
      "Learn how to build scalable e-commerce platforms using Node.js, integrating with payment systems and inventory management...",
    date: "2023-09-22",
    author: "Rachel Adams",
    readTime: "27 min",
  },
  {
    id: 19,
    title: "Natural Language Processing with Python",
    category: "AI",
    content:
      "Master the concepts and techniques behind natural language processing (NLP) using Python's powerful libraries...",
    date: "2023-09-30",
    author: "Sam Peterson",
    readTime: "32 min",
  },
  {
    id: 20,
    title: "Mastering SQL for Data Analysis",
    category: "Data Science",
    content:
      "Learn SQL techniques and queries that are essential for efficient data analysis, including joins, aggregations, and subqueries...",
    date: "2023-10-05",
    author: "Tina Garcia",
    readTime: "29 min",
  },
  {
    id: 51,
    title: "Serverless Computing with AWS Lambda",
    category: "Cloud",
    content:
      "A guide on using AWS Lambda for building scalable serverless applications with minimal overhead and cost.",
    date: "2023-07-10",
    author: "Liam Scott",
    readTime: "22 min",
  },
  {
    id: 52,
    title: "Introduction to Kubernetes",
    category: "DevOps",
    content:
      "An introductory guide to Kubernetes, explaining its key components and how it simplifies container orchestration.",
    date: "2023-07-12",
    author: "Sophia Carter",
    readTime: "18 min",
  },
  {
    id: 53,
    title: "Mastering TypeScript for Frontend Development",
    category: "Frontend",
    content:
      "Learn how to use TypeScript in frontend development to build robust and scalable applications.",
    date: "2023-07-14",
    author: "Jacob Lee",
    readTime: "16 min",
  },
  {
    id: 54,
    title: "Blockchain and Cryptocurrencies: An Overview",
    category: "Blockchain",
    content:
      "Understand the principles of blockchain technology and its applications in cryptocurrencies and beyond.",
    date: "2023-07-16",
    author: "Ethan Davis",
    readTime: "20 min",
  },
  {
    id: 55,
    title: "Building Real-Time Applications with WebSockets",
    category: "Frontend",
    content:
      "Explore how to implement real-time features in web applications using WebSockets and Node.js.",
    date: "2023-07-18",
    author: "Olivia Brown",
    readTime: "14 min",
  },
  {
    id: 56,
    title: "Artificial Intelligence in Healthcare",
    category: "AI",
    content:
      "Learn about the applications of artificial intelligence in the healthcare industry and its impact on patient care.",
    date: "2023-07-20",
    author: "James Wilson",
    readTime: "19 min",
  },
  {
    id: 57,
    title: "Building RESTful APIs with Flask",
    category: "Backend",
    content:
      "Learn how to build efficient and scalable RESTful APIs using Flask, a lightweight Python framework.",
    date: "2023-07-22",
    author: "Daniel Harris",
    readTime: "15 min",
  },
  {
    id: 58,
    title: "Getting Started with Docker and Containers",
    category: "DevOps",
    content:
      "A beginner's guide to Docker, covering containerization, Docker Compose, and creating Dockerfiles.",
    date: "2023-07-24",
    author: "Mason Clark",
    readTime: "18 min",
  },
  {
    id: 59,
    title: "Exploring GraphQL for API Development",
    category: "Backend",
    content:
      "An introduction to GraphQL, focusing on its advantages over traditional REST APIs and how to implement it.",
    date: "2023-07-26",
    author: "Charlotte Mitchell",
    readTime: "21 min",
  },
  {
    id: 60,
    title: "Responsive Web Design with Flexbox and Grid",
    category: "Frontend",
    content:
      "Learn the ins and outs of Flexbox and CSS Grid to create responsive web layouts that adapt to any screen size.",
    date: "2023-07-28",
    author: "Aiden Turner",
    readTime: "17 min",
  },
  {
    id: 61,
    title: "Optimizing SQL Queries for Performance",
    category: "Database",
    content:
      "Master SQL query optimization techniques to improve the performance of your database-heavy applications.",
    date: "2023-07-30",
    author: "Ella Lewis",
    readTime: "20 min",
  },
  {
    id: 62,
    title: "Deep Dive into Cloud-Native Development",
    category: "Cloud",
    content:
      "Learn about cloud-native development practices, microservices, and how to architect applications for the cloud.",
    date: "2023-08-01",
    author: "Lucas Harris",
    readTime: "23 min",
  },
  {
    id: 63,
    title: "Server-Side Rendering with React and Next.js",
    category: "Frontend",
    content:
      "Learn how to improve the performance and SEO of your React apps using server-side rendering with Next.js.",
    date: "2023-08-03",
    author: "Isabella Thompson",
    readTime: "19 min",
  },
  {
    id: 64,
    title: "Data Engineering with Apache Spark",
    category: "Data Science",
    content:
      "Explore how to use Apache Spark for big data processing and analytics, handling massive datasets in real time.",
    date: "2023-08-05",
    author: "Michael Martinez",
    readTime: "22 min",
  },
  {
    id: 65,
    title: "The Future of 5G and Its Impact on Mobile Development",
    category: "Mobile",
    content:
      "Explore how 5G networks are transforming mobile development and the opportunities they bring for app developers.",
    date: "2023-08-07",
    author: "Amelia Robinson",
    readTime: "16 min",
  },
  {
    id: 66,
    title: "Introduction to Machine Learning with Python",
    category: "AI",
    content:
      "A beginner-friendly guide to machine learning concepts, using Python and popular libraries like scikit-learn.",
    date: "2023-08-09",
    author: "Benjamin Young",
    readTime: "25 min",
  },
  {
    id: 67,
    title: "Design Patterns for JavaScript Developers",
    category: "Frontend",
    content:
      "Learn about common design patterns in JavaScript that help solve repetitive problems and improve code quality.",
    date: "2023-08-11",
    author: "Zoe King",
    readTime: "18 min",
  },
  {
    id: 68,
    title: "Optimizing Frontend Performance with Lazy Loading",
    category: "Frontend",
    content:
      "Learn how to implement lazy loading in your web applications to improve performance and user experience.",
    date: "2023-08-13",
    author: "Gabriel Perez",
    readTime: "14 min",
  },
  {
    id: 69,
    title: "DevOps Automation with Jenkins",
    category: "DevOps",
    content:
      "A comprehensive guide to automating continuous integration and delivery pipelines using Jenkins.",
    date: "2023-08-15",
    author: "Charlotte Wilson",
    readTime: "20 min",
  },
  {
    id: 70,
    title: "Ethical Hacking and Penetration Testing",
    category: "Security",
    content:
      "Learn the basics of ethical hacking and penetration testing to identify vulnerabilities in your systems.",
    date: "2023-08-17",
    author: "Matthew Scott",
    readTime: "23 min",
  },
];

export default mockResults;
