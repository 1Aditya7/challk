"use client"
import { useParams } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Copy,
  CreditCard,
  Icon,
  MoreVertical,
  Truck,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"


export default function CourseDetails() {
  const { courseId } = useParams();

  return (
    <div>
    <Card className="overflow-hidden mt-10 mr-4 ml-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Design and Analysis of Algorithms - {courseId}
            </CardTitle>
            <CardDescription>Course Instructor: Ms. Algo Expert</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Unenroll From Course</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Course</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Academic Calendar</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Class Schedule</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Course Syllabus</Button>
                  </span>
                </li>
              </ul>
            </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Unit 1</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Notes</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Class Presentations</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>MCQ Test</Button>
                  </span>
                </li>
              </ul>
            </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Unit 2</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Notes</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Class Presentations</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>MCQ Test</Button>
                  </span>
                </li>
              </ul>
            </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Unit 3</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Notes</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Class Presentations</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>MCQ Test</Button>
                  </span>
                </li>
              </ul>
            </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Unit 4</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Notes</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Class Presentations</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>MCQ Test</Button>
                  </span>
                </li>
              </ul>
            </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Unit 5</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Notes</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Class Presentations</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment</Button>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  <Button variant="link" className='text-muted-foreground hover:text-primary'>MCQ Test</Button>
                  </span>
                </li>
              </ul>
            </div>
          <Separator className="my-4" />
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated: <time dateTime="2024-05-25">Saturday 25 May, 2024</time>
          </div>
          <Pagination className="ml-auto mr-0 w-auto">
            <PaginationContent>
              <PaginationItem>
              </PaginationItem>
              <PaginationItem>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  );
}