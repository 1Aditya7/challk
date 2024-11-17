## Challk - A College Learning Management System (LMS) using NextJS

### 1. Introduction  
This project involves building a Learning Management System (LMS) for colleges using NextJS. The LMS is designed to facilitate interaction between students and faculty, offering essential features like course management, attendance tracking, internal exam marks, and more. The frontend has been developed using **NextJS** and styled with **[shadcn](https://ui.shadcn.com/)** to provide a modern, responsive user interface. <br><br> The project is hosted on Vercel, and you can explore the live demo [here](https://challk.vercel.app/home).

![]()

This was a **Hackathon Project** built collaboratively with:
- [**Aditya Verghese Cherian**](https://github.com/Aditya1864)
- [**Akshaye Aaron Azariah**](https://github.com/akxhayx)
- [**Param Khandelwal**](https://github.com/paramk26)

### 2. Project Setup Locally  
To set up the project locally on your machine, follow these steps:

#### Prerequisites  
- Make sure you have [Node.js](https://nodejs.org/) installed (preferably the latest LTS version).

#### Clone the Repository  
```bash
git clone https://github.com/yourusername/lms-nextjs.git
cd lms-nextjs
```

#### Install Dependencies  
```bash
npm install
```

#### Run the Development Server  
```bash
npm run dev
```

Once the server is running, you can open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Features Implemented  
- **Dashboard**: A central hub that provides an overview of the student’s courses, assignments, attendance, and academic information.
- **LMS Home**: The landing page that serves as an introduction and navigation point for users to access core LMS functionalities.
- **Courses**: A section displaying available courses, where students can view detailed information and interact with course materials.
- **Student Passbook**: A feature that enables students to track their academic progress, including grades and performance in assignments and exams.
- **Attendance**: A page for tracking and displaying student attendance records for each course.
- **Internal Exam Marks**: A feature for students and faculty to access and manage marks for internal exams.

### 4. Approach  
- **Frontend Framework**: Built using [Next.js](https://nextjs.org/), which supports server-side rendering and static site generation to improve performance and SEO.
- **Styling**: The user interface has been styled with **[shadcn](https://github.com/shadcn)**, a modern UI component library that ensures a clean, visually appealing experience.
- **Routing**: NextJS's built-in routing system handles navigation between different pages and components of the LMS.

### 5. Demo  
You can explore the live version of the LMS here: [**LMS Demo**](https://challk.vercel.app/home)

### 6. Results  
- The application is live and functional with key sections like Dashboard, Courses, and Attendance implemented.
- The user interface is intuitive and responsive, making it easy for students and faculty to interact with the system.

### 7. Limitations and Future Scope  
**Limitations**:  
1. **Incomplete Backend**: The backend is yet to be integrated, and the application currently lacks a database connection for data storage.  
2. **Mock Data**: The application uses mock data, and there is no real-time data fetching or API integration yet.  
3. **Limited Pages**: Although the frontend structure is in place, many of the core LMS features are still under development.

**Future Scope**:  
1. **Backend Development**: Implement backend services (Node.js/Express or other) to manage course content, attendance records, and student grades.
2. **Authentication & Authorization**: Implement user authentication with role-based access (students, faculty, admins) for secure login and data access.
3. **Advanced Course Features**: Add functionality for course materials, discussion boards, quizzes, and multimedia content.
4. **Mobile Responsiveness**: Improve mobile support to ensure the LMS is fully responsive and user-friendly across devices.

### 10. Conclusions  
This project represents the foundational work for a Learning Management System for colleges. The frontend, built with NextJS and styled using shadcn, provides basic functionality for viewing courses, attendance, and exam marks. Moving forward, the scope includes backend integration, real-time data handling, and additional features to enhance the user experience and functionality of the LMS.

---

This version includes your team credits and the necessary changes. Let me know if you need any more adjustments!
