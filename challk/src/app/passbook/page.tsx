"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Link from "next/link" 
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
BookOpenCheck,
Menu,
Book,
Clipboard,
Search,
ShoppingCart,
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



const App: React.FC = () => {
const [flip, setFlip] = useState<boolean>(false);

return (
<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
  <div className="hidden border-r bg-muted/40 md:block ">
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
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Grid className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/home"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Home className="h-4 w-4" />
            LMS HOME
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
            className="flex items-center gap-3 rounded-lg px-3 py-2 bg-secondary text-primary transition-all hover:text-primary"
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
            href="/attendance"
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
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Clipboard className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="/dashboard"
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
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Book className="h-5 w-5" />
              Courses
            </Link>
            <Link
              href="/passbook"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Users className="h-5 w-5" />
              Passbook
            </Link>
            <Link
              href="/attendance"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
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
        className="flex flex-1 justify-items-start items-stretch mt-2 w-150 p-10 " x-chunk="dashboard-02-chunk-1"
      >
        <h1 className="font-semibold text-3xl">Your Personal <span className="text-primary">Passbook</span></h1>
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-sm text-muted-foreground">
          </p>
        </div>
      </div>
<div className="flex flex-row gap-4 mx-10 color:primary mt-2 items-stretch">
    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div className="h-100 w-80 ">
            <Card className=" auto-rows-auto">
                    <CardHeader className="text-center">
                        <CardTitle className="text-primary"> College ID</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <button onClick={() => setFlip(!flip)} >
                        <div className="bg-white p-6 r items-center" >
                            <img src="https://flxt.tmsimg.com/assets/p13923677_n1103251_cc_v9_aa.jpg"/>
                        </div> 
                        </button>                    
                        <div className="rounded-lg border bg-card text-card-foreground shadow p-4 w-full h-full">
                        <div className="flex items-center gap-4">
                        <div className="grid gap-1 h-100">
                            <p className="text-sm font-medium leading-none"> Name:  Sheldon Cooper</p>
                            <p className="text-sm text-muted-foreground truncate w-64">
                            USN: 1NT23CS022
                            </p>
                            <p className="text-sm text-muted-foreground truncate w-64">
                            Sec: A
                            </p>
                            <p className="text-sm text-muted-foreground truncate w-64">
                            DOB: 13/05/2004
                            </p>         
                        </div>
                        </div>
                        </div>
                    </CardContent>
            </Card>
        </div>
        <div className="h-300 w-200">
            <Card className=" auto-rows-auto">
                <CardHeader className="text-center">
                    <CardTitle className="text-primary"> ID Card</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">

                    <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 ">
                    <div className="flex items-center gap-4">
                    <div className="grid gap-3">
                    <div className="bg-white p-6 rounded-lg items-center h-[250px] w-[370px]">
                    <img src="https://flxt.tmsimg.com/assets/p13923677_n1103251_cc_v9_aa.jpg" className="object-contain h-full w-full" />
                    </div>
                    <p className="text-sm font-medium leading-none"> Name: Sheldon Cooper </p> 
                        <p className="text-sm font-medium leading-none"> Father name: George Cooper </p>
                        <p className="text-sm font-medium leading-none"> Mother name: Mary Cooper </p>
                        <p className="text-sm font-medium leading-none"> Address: 5501 Grant Ave, Medford, Texas, 88597 </p>
                        <p className="text-sm font-medium leading-none"> Phone number: +1 2345 67890 </p>
                        <p className="text-sm font-medium leading-none"> Blood Group: AB +ve </p>
                    </div>
                    </div>
                    </div>
                    <button onClick={() => setFlip(!flip)}>
                        Flip
                    </button>
                </CardContent>
            </Card>
        </div>    
    </ReactCardFlip>

    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div className="h-100 w-80 ">
            <Card className=" auto-rows-auto">
                    <CardHeader className="text-center">
                        <CardTitle className="text-primary"> Vehicle Pass </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <button onClick={() => setFlip(!flip)} >
                    <div className="bg-white p-6 r items-center" style={{ height: '345px', width: '270px' }}>
                        <img src="https://i.pinimg.com/736x/e0/7d/be/e07dbe97a6ed2b601f2f1f87e4b913bf.jpg" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>

                        </button>                    
                        <div className="rounded-lg border bg-card text-card-foreground shadow p-4 w-full h-full">
                        <div className="flex items-center gap-4">
                        <div className="grid gap-1 h-100">
                            <p className="text-sm font-medium leading-none"> Vehicle:  Bat Mobile</p>
                            <p className="text-sm text-muted-foreground truncate w-64">
                            Vehicle Number: DC 1939
                            </p>
                            <p className="text-sm text-muted-foreground truncate w-64">
                            Type: 4 Wheeler
                            </p>
                            <p className="text-sm text-muted-foreground truncate w-64">
                            Access Type: Student Access
                            </p>         
                        </div>
                        </div>
                        </div>
                    </CardContent>
            </Card>
        </div>
        <div className="h-300 w-200">
            <Card className=" auto-rows-auto">
                <CardHeader className="text-center">
                    <CardTitle className="text-primary"> Vehicle Pass</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">

                    <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 ">
                    <div className="flex items-center gap-4">
                    <div className="grid gap-3">
                    <div className="bg-white p-6 rounded-lg items-center h-[250px] w-[370px]">
                    <img src="https://i.pinimg.com/736x/e0/7d/be/e07dbe97a6ed2b601f2f1f87e4b913bf.jpg" className="object-contain h-full w-full" />
                    </div>
                    <p className="text-sm font-medium leading-none"> Vehicle: Bat Mobile </p> 
                        <p className="text-sm font-medium leading-none"> Pass Validity: 26/05/2025  </p>
                        <p className="text-sm font-medium leading-none"> Owner Name: Sheldon Cooper </p>
                        <p className="text-sm font-medium leading-none"> Address: 5501 Grant Ave, Medford, Texas, 88597 </p>
                        <p className="text-sm font-medium leading-none"> Phone number: +1 2345 67890 </p>
                        <p className="text-sm font-medium leading-none"> Blood Group: AB +ve </p>
                    </div>
                    </div>
                    </div>
                    <button onClick={() => setFlip(!flip)}>
                        Flip
                    </button>
                </CardContent>
            </Card>
        </div>    
    </ReactCardFlip>

    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div className="h-100 w-80 ">
            <Card className=" auto-rows-auto">
                    <CardHeader className="text-center">
                        <CardTitle className="text-primary"> Library Pass </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <button onClick={() => setFlip(!flip)} >
                    <div className="bg-white p-6 r items-center" style={{ height: '345px', width: '270px' }}>
                        <img src="https://images.shiksha.com/mediadata/images/1675333508phptKq8N5.jpeg" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                    </div>

                        </button>                    
                        <div className="rounded-lg border bg-card text-card-foreground shadow p-4 w-full h-full">
                        <div className="flex items-center gap-4">
                        <div className="grid gap-1 h-100">
                            <p className="text-sm font-medium leading-none"> Name: Aditya Verghese</p>
                            <p className="text-sm text-muted-foreground truncate w-64">
                            USN: 1NT23CS022
                            </p>
                            <p className="text-sm text-muted-foreground truncate w-64">
                            Library Subscription: Standard
                            </p>
                            <p className="text-sm text-muted-foreground truncate w-64">
                            Books Issued Currently: 2
                            </p>         
                        </div>
                        </div>
                        </div>
                    </CardContent>
            </Card>
        </div>
        <div className="h-300 w-200">
            <Card className=" auto-rows-auto">
                <CardHeader className="text-center">
                    <CardTitle className="text-primary">Library Pass</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">

                    <div className="rounded-lg border bg-card text-card-foreground shadow auto-rows-auto p-4 ">
                    <div className="flex items-center gap-4">
                    <div className="grid gap-3">
                    <div className="bg-white p-6 rounded-lg items-center h-[250px] w-[370px]">
                    <img src="https://images.shiksha.com/mediadata/images/1675333508phptKq8N5.jpeg" className="object-contain h-full w-full" />
                    </div>
                    <p className="text-sm font-medium leading-none"> Name: Aditya Verghese </p> 
                        <p className="text-sm font-medium leading-none"> Total Books Issued: 32 </p>
                        <p className="text-sm font-medium leading-none"> Student Reg No: 26627 </p>
                        <p className="text-sm font-medium leading-none"> Pass Validity: 26/5/2025</p>
                        <p className="text-sm font-medium leading-none"> Contact Number: +1 2345 6789</p>
                        <p className="text-sm font-medium leading-none">  College Email: aditya@nmit.ac.in</p>
                    </div>
                    </div>
                    </div>
                    <button onClick={() => setFlip(!flip)}>
                        Flip
                    </button>
                </CardContent>
            </Card>
        </div>    
    </ReactCardFlip>
    </div>
</main>
    </div>
</div>
)
};

export default App;
