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

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
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
              <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary">
                <Book className="h-4 w-4" />
                Courses
              </Link>
              <Link href="/passbook" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Users className="h-4 w-4" />
                Passbook
              </Link>
              <Link href="#" className="flex items-center gap-3 text-primary bg-muted rounded-lg px-3 py-2 transition-all hover:text-primary">
                <LineChart className="h-4 w-4" />
                Attendance
              </Link>
            </nav>
            <Link href="/cie"
                className="flex items-center gap-3 rounded-lg bg-active px-7 py-2 text-muted-foreground transition-all hover:text-primary"  >
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
        <main className="grid flex-1 items-start mr-8 ml-8 mt-8">
          <Tabs defaultValue="dsa">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="dsa" >Data Structures and Algorithms</TabsTrigger>
                <TabsTrigger value="data base" >Data base management systems</TabsTrigger>
                <TabsTrigger value="python" >Python</TabsTrigger>
                <TabsTrigger value="math" >Mathematics</TabsTrigger>
                <TabsTrigger value="soft skills" >Soft skills</TabsTrigger>
                <TabsTrigger value="aptitude">Aptitude Training</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1 hover:bg-primary hover:text-white" >
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap" >
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Date
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Time</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Percentage
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1 hover:bg-primary hover:text-white">
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="dsa">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Attendence</CardTitle>
                  <CardDescription>
                    Detailed attendence report
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead >Percentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="data base">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Attendence</CardTitle>
                  <CardDescription>
                    Detailed attendence report
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead >Percentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          23-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          22-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          70%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          21-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          85%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="python">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Attendence</CardTitle>
                  <CardDescription>
                    Detailed attendence report
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead >Percentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          19-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Absent
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          50%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          19-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          60%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          13-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Absent
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          45%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="math">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Attendence</CardTitle>
                  <CardDescription>
                    Detailed attendence report
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead >Percentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="soft skills">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Attendence</CardTitle>
                  <CardDescription>
                    Detailed attendence report
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead >Percentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="aptitude">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Attendence</CardTitle>
                  <CardDescription>
                    Detailed attendence report
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead >Percentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                          24-04-2023
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">11:00 am</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Present
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          80%
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>      
        </div>
    </div>
  );
}

export default Dashboard;
