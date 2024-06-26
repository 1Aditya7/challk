import Link from "next/link" 
import { useTheme } from "next-themes"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

import {
  CircleUser,
  Grid,
  Home,
  LineChart,
  Menu,
  Book,
  Clipboard,
  BookOpenCheck,
  ShoppingCart,
  Search,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block ">
        <div className="flex h-full max-h-screen flex-col gap-2 fixed">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <div className="h-6 w-6" />
              <span className="">NMIT LMS</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Grid className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/home"
                className="flex items-center gap-3 rounded-lg px-3 py-2 bg-secondary text-primary transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                LMS Home
              </Link>
              <Link
                href="/courses"
                className="flex items-center gap-3 rounded-lg bg-active px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Book className="h-4 w-4" />
                Courses
              </Link>
              <Link
                href="/passbook"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Passbook
              </Link>
              <Link
                href="/attendance"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Attendance
              </Link>
              <Link
                  href="/cie"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <BookOpenCheck className="h-4 w-4" />
                  Continous Internal Evaluation
                </Link>
            </nav>
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
            <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <div className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Grid className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  LMS HOME
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Book className="h-5 w-5" />
                  Courses
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Passbook
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Attendance
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  CIE
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
                <Input
                  type="search"
                  placeholder="Search Courses"
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
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
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div
            className="flex flex-1 justify-items-start items-stretch mt-2" x-chunk="dashboard-02-chunk-1"
          >
            <h1 className="font-bold text-3xl items-center justify-center">Welcome to the Home of <span className="text-primary">NMIT LMS</span></h1>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm text-muted-foreground">
              </p>
            </div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
                <CardHeader>
                    <CardTitle>College Annoucements</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">
                <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 hover:border-primary hover:cursor-pointer">
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>AA</AvatarFallback>
                      </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Akshaye Aaron Azariah (Dept. CSE)</p>
                        <p className="text-sm text-muted-foreground truncate w-128">
                        Reminder: There will be a mandatory meeting for all faculty members of CSE Dept. on 12/12/24          
                        </p>
                    </div>
                    </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 hover:border-primary hover:cursor-pointer">
                    <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none"> Aditya Parthiban (Dept. CSE)</p>
                        <p className="text-sm text-muted-foreground truncate w-128">
                        ReReminder: There will be a mandatory meeting for all faculty members of CSE Dept. on 12/12/24
                        </p>
                    </div>
                    </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 hover:border-primary hover:cursor-pointer">
                    <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Aditva Verghese (Dept. AI&DS)</p>
                        <p className="text-sm text-muted-foreground truncate w-128">
                        Requesting all departmental faculty to complete CO attainment.
                        </p>
                    </div>
                    </div>
                    </div>
                    <Button variant="outline" className="hover:bg-primary">View All</Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Department Annoucements</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">
                <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 hover:border-primary hover:cursor-pointer">
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>AA</AvatarFallback>
                      </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Akshaye Aaron Azariah (Dept. CSE)</p>
                        <p className="text-sm text-muted-foreground truncate w-128">
                        Reminder: There will be a mandatory meeting for all faculty members of CSE Dept. on 12/12/24          
                        </p>
                    </div>
                    </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 hover:border-primary hover:cursor-pointer">
                    <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none"> Aditya Parthiban (Dept. CSE)</p>
                        <p className="text-sm text-muted-foreground truncate w-128">
                        ReReminder: There will be a mandatory meeting for all faculty members of CSE Dept. on 12/12/24
                        </p>
                    </div>
                    </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 hover:border-primary hover:cursor-pointer">
                    <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Aditva Verghese (Dept. AI&DS)</p>
                        <p className="text-sm text-muted-foreground truncate w-128">
                        Requesting all departmental faculty to complete CO attainment.
                        </p>
                    </div>
                    </div>
                    </div>
                    <Button variant="outline" className="hover:bg-primary">View All</Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Class Annoucements</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">
                <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 hover:border-primary hover:cursor-pointer">
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>AA</AvatarFallback>
                      </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Akshaye Aaron Azariah (Dept. CSE)</p>
                        <p className="text-sm text-muted-foreground truncate w-128">
                        Reminder: There will be a mandatory meeting for all faculty members of CSE Dept. on 12/12/24          
                        </p>
                    </div>
                    </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 hover:border-primary hover:cursor-pointer">
                    <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none"> Aditya Parthiban (Dept. CSE)</p>
                        <p className="text-sm text-muted-foreground truncate w-128">
                        ReReminder: There will be a mandatory meeting for all faculty members of CSE Dept. on 12/12/24
                        </p>
                    </div>
                    </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 hover:border-primary hover:cursor-pointer">
                    <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Aditva Verghese (Dept. AI&DS)</p>
                        <p className="text-sm text-muted-foreground truncate w-128">
                        Requesting all departmental faculty to complete CO attainment.
                        </p>
                    </div>
                    </div>
                    </div>
                    <Button variant="outline" className="hover:bg-primary">View All</Button>
                </CardContent>
            </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-2">
        <h1 className="font-bold text-2xl">Browse Courses for the Academic Year 2023 - 2024</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Aeronuatical Engineering</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in Aeronuatical Engineering, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Artificial Intelligence & Data Science</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in AI & DS, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Artifical Intelligence & Machine Learning</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in AI & ML, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Civil Engineering</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in Civil Engineering, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Computer Science & Business Systems</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in CS & BS, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Computer Science & Engineering</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in CS & E, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Electrical & Electronics Engineering</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in EEE, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Electronics & Communication Engineering</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in ECE, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Electronics Engineering (VLSI)</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in VLSI, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Information Science & Engineering</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in ISE, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Mechanical Engineering</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        All courses for B.E in Mechanical Engineering, semesters one to eight
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="mt-auto">View Courses</Button>
    </CardFooter>
  </Card>
  </div>
</div>

    </main>
        </div>
    </div>
  )
}
export default Dashboard;
