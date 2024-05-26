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
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

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
            <CardTitle className="group flex items-center gap-2 text-4xl">
              Design and Analysis of Algorithms - {courseId}
            </CardTitle>
            <CardDescription>Section : E</CardDescription>
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
                <DropdownMenuItem>Drop Course</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div>
          <CardHeader className="flex flex-row items-start">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-xl">
             Manage Course
            </CardTitle>

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
                <DropdownMenuItem>Add file</DropdownMenuItem>
                <DropdownMenuItem>Edit file</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
            
              <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Academic Calendar</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Syllabus</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Attendance</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Update</ContextMenuItem>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Grade Book</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                      <ContextMenuItem>Individual</ContextMenuItem>
                        <ContextMenuItem>Class</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
              </ul>
            </div>
          <Separator className="my-4" />
          <div>
          <CardHeader className="flex flex-row items-start">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-xl">
             Unit 1
            </CardTitle>

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
                <DropdownMenuItem>Add Quiz</DropdownMenuItem>
                <DropdownMenuItem>Add Assignment </DropdownMenuItem>
                <DropdownMenuItem>Add File </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
            
              <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Lesson Plan</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Notes</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment 1</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Grade</ContextMenuItem>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Tutorial 1</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                      <ContextMenuItem>Report</ContextMenuItem>
                       
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
          <CardHeader className="flex flex-row items-start">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-xl">
             Unit 2
            </CardTitle>

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
                <DropdownMenuItem>Add Quiz</DropdownMenuItem>
                <DropdownMenuItem>Add Assignment </DropdownMenuItem>
                <DropdownMenuItem>Add File </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
            
              <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Lesson Plan</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Notes</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment 1</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Grade</ContextMenuItem>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Tutorial 1</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                      <ContextMenuItem>Report</ContextMenuItem>
                       
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Tutorial 2</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                      <ContextMenuItem>Report</ContextMenuItem>
                       
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
              </ul>
            </div>
          <Separator className="my-4" />
  
          <div>
          <CardHeader className="flex flex-row items-start">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-xl">
             Unit 3
            </CardTitle>

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
                <DropdownMenuItem>Add Quiz</DropdownMenuItem>
                <DropdownMenuItem>Add Assignment </DropdownMenuItem>
                <DropdownMenuItem>Add File </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
            
              <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Lesson Plan</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Notes</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment 1</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Grade</ContextMenuItem>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment 2</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Grade</ContextMenuItem>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Tutorial 1</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                      <ContextMenuItem>Report</ContextMenuItem>
                       
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Tutorial 2</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                      <ContextMenuItem>Report</ContextMenuItem>
                       
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Tutorial 3</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                      <ContextMenuItem>Report</ContextMenuItem>
                       
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
        
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
          <CardHeader className="flex flex-row items-start">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-xl">
             Unit 4
            </CardTitle>

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
                <DropdownMenuItem>Add Quiz</DropdownMenuItem>
                <DropdownMenuItem>Add Assignment </DropdownMenuItem>
                <DropdownMenuItem>Add File </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
            
              <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Lesson Plan</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Notes</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment 1</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Grade</ContextMenuItem>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Tutorial 1</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                      <ContextMenuItem>Report</ContextMenuItem>
                       
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
          <CardHeader className="flex flex-row items-start">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-xl">
             Unit 5
            </CardTitle>

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
                <DropdownMenuItem>Add Quiz</DropdownMenuItem>
                <DropdownMenuItem>Add Assignment </DropdownMenuItem>
                <DropdownMenuItem>Add File </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
            
              <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Lesson Plan</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Notes</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Assignment 1</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Grade</ContextMenuItem>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </span>
                </li>
                
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground flex flex-row">  
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Button variant="link" className='text-muted-foreground hover:text-primary'>Tutorial 1</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                      <ContextMenuItem>Report</ContextMenuItem>
                       
                      </ContextMenuContent>
                    </ContextMenu>
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