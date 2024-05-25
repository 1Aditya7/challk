import Image from "next/image"
import Link from "next/link"
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"


function App() {
    return (
      <TooltipProvider>
        <Dashboard />
      </TooltipProvider>
    );
  }

function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard" className="hover:text-orange-500">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="hover:text-orange-500">Attendence</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search\"
              placeholder="Search..."
              className="w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px] border border-primary"
            />
          </div>
        </header>
        <main className="grid flex-1 items-start mr-14">
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
                      <ListFilter className="h-3.5 w-3.5" />
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
                  <File className="h-3.5 w-3.5" />
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
  )
}
export default App;