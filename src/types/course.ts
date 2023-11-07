export interface SyllabusItem {
  week: string;
  topic: string;
  content: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor?: string;
  rating?: string;
  enrollmentStatus?: "Open" | "Closed" | "In Progress";
  thumbnail?: string;
  duration?: string;
  schedule?: string;
  location?: string;
  prerequisites?: string[];
  syllabus?: {}[];
  students?: {}[];
}
