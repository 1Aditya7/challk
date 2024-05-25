// lib/courses.ts

// Define the course type
export interface Course {
    id: string;
    name: string;
  }
  
  // Dummy course data
  const coursesData: Course[] = [
    { id: '1', name: 'Data Structures and Algorithms' },
    { id: '2', name: 'Database Management Systems' },
    { id: '3', name: 'Python' },
    // Add more courses as needed
  ];
  
  // Function to fetch course details by ID
  export async function fetchCourseDetails(courseId: string): Promise<Course | undefined> {
    // Simulate fetching course details from an API or database
    return new Promise<Course | undefined>((resolve) => {
      setTimeout(() => {
        const course = coursesData.find((course) => course.id === courseId);
        resolve(course);
      }, 500); // Simulating a delay of 500 milliseconds
    });
  }
  