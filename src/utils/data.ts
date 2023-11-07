import { Course } from "src/types/course";

export const courses: Course[] = [
  {
    id: 1,
    title: "Algorith & Data Structures",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    instructor: "John Erivona",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    rating: "4.24",
    schedule: "Tue&Thur, 6:00PM-8:00PM",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    thumbnail:
      "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 2,
    title: "Engineering Mathematics II",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    instructor: "Frank Mendez",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    rating: "4.24",
    schedule: "Tue&Thur, 6:00PM-8:00PM",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    thumbnail:
      "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 103,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 104,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 105,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 106,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 3,
    title: "Intro To Psychology",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    instructor: "Alison Throwey",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    rating: "4.24",
    schedule: "Tue&Thur, 6:00PM-8:00PM",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    thumbnail:
      "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 104,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 103,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 4,
    title: "Java Complete Course",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    instructor: "Richard Zuck",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    rating: "4.24",
    schedule: "Tue&Thur, 6:00PM-8:00PM",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    thumbnail:
      "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 103,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
];

export const enrolledCourses: Course[] = [];
