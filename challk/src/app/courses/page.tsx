import Link from 'next/link';
import React from 'react';
import {
  CircleUser,
  Grid,
  Home,
  LineChart,
  Menu,
  Book,
  Clipboard,
  Search,
  BookOpenCheck,
  ShoppingCart,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

function Dashboard() {
  const courses = [
    { id: '22CS41A', name: 'Design and Analysis of Algorithms' },
    { id: '22CS42A', name: 'Software Engineering and Project Management' },
    { id: '22CS44A', name: 'Database Management System' },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 fixed">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Clipboard className="h-6 w-6" />
              <span className="">NMIT LMS</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Grid className="h-4 w-4" />
                Dashboard
              </Link>
              <Link href="/home" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Home className="h-4 w-4" />
                LMS Home
              </Link>
              <Link href="#" className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
                <Book className="h-4 w-4" />
                Courses
              </Link>
              <Link href="/passbook" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Users className="h-4 w-4" />
                Passbook
              </Link>
              <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <LineChart className="h-4 w-4" />
                Attendance
              </Link>
            </nav>
            <Link href="/cie"
                className="flex items-center gap-3 rounded-lg bg-active px-3 py-2 text-muted-foreground transition-all hover:text-primary"  >
                <BookOpenCheck className="h-4 w-4" />
                Continous Internal Evaluation
              </Link>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Class Schedule</CardTitle>
                <CardDescription>
                  Click below for class schedule.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                  <Clipboard className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link href="#" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Grid className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link href="#" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
                  <ShoppingCart className="h-5 w-5" />
                  LMS HOME
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link href="#" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Book className="h-5 w-5" />
                  Courses
                </Link>
                <Link href="#" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Users className="h-5 w-5" />
                  Passbook
                </Link>
                <Link href="#" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <LineChart className="h-5 w-5" />
                  Attendance
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>CLASS SCHEDULE</CardTitle>
                    <CardDescription>
                      Click below to see Class Schedule.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      schedule
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search Courses" className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <h1 className="text-lg font-semibold mt-4 ml-4 md:text-2xl">Your Enrolled Courses</h1>
        <h1 className="text-sm font-normal ml-4 md:text-sm text-muted-foreground">For the 4th semester, AY 2023 - 2024</h1>
        <a href="/courses"><Button  variant="ghost" className="absolute top-16 right-1/4 mt-4 hover:bg-primary bg-opacity-50">View All Courses</Button></a>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 ml-4 mr-4">
            <Card>
              <CardHeader>
                <CardTitle>Data Visualisation with Python</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Course Code: 22CS412A
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="mt-auto">View Course</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Introduction to Software Technologies</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Course Code: 22CS413A
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="mt-auto">View Course</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Image Processing</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Course Code: 22CS414A
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="mt-auto">View Course</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Design & Analysis of Algorithms</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Course Code: 22CS415A
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="mt-auto">View Course</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Software Engineering</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Course Code: 22CS415A
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="mt-auto">View Course</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Discreet Mathematics</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Course Code: 22MAT31A
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="mt-auto">View Course</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Course Code: 22CDC12A
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="mt-auto">View Course</Button>
              </CardFooter>
            </Card>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
