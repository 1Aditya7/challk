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
                <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>CIE Breakdown</BreadcrumbPage>
            </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px] border border-orange-500"
            />
        </div>
        </header>
        <main className="grid flex-1 items-start mr-14">
        <Tabs defaultValue="all">
            <div className="flex items-center">
            <TabsList>
                <TabsTrigger value="dsa">Data Structures and Algorithms</TabsTrigger>
                <TabsTrigger value="data base">Data base management systems</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="math">Mathematics</TabsTrigger>
                <TabsTrigger value="soft skills">Soft skills</TabsTrigger>
                <TabsTrigger value="aptitude">Aptitude Training</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1 hover:bg-primary hover:text-white">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                    </span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                    Component
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Marks Obtained</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                    Marks Obtained
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm" className="h-8 gap-1 hover:bg-primary hover:text-white">
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
                <CardTitle>Continuous Internal Evaluation</CardTitle>
                <CardDescription>
                    Detailed CIE breakdown
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Component</TableHead>
                        <TableHead>Marks Obtained</TableHead>
                        <TableHead>Weightage</TableHead>
                        <TableHead >Final Marks</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-1
                        </TableCell>
                        <TableCell className="font-medium">
                            15
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        50%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-2
                        </TableCell>
                        <TableCell className="font-medium">
                        25
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        75%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        8/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-3
                        </TableCell>
                        <TableCell>
                        30
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        100%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/6
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-1
                        </TableCell>
                        <TableCell>
                            8
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        80%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        8/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-2
                        </TableCell>
                        <TableCell>
                        6
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        60%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
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
                <CardTitle>Continuous Internal Evaluation</CardTitle>
                <CardDescription>
                    Detailed CIE breakdown
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Component</TableHead>
                        <TableHead>Marks Obtained</TableHead>
                        <TableHead>Weightage</TableHead>
                        <TableHead >Final Marks</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-1
                        </TableCell>
                        <TableCell className="font-medium">
                            30
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        100%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        12/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-2
                        </TableCell>
                        <TableCell className="font-medium">
                        15
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        50%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-3
                        </TableCell>
                        <TableCell>
                        22.5
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        75%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        4/6
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-1
                        </TableCell>
                        <TableCell>
                            10
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        100%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        10/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-2
                        </TableCell>
                        <TableCell>
                        8
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        80%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        8/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
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
                <CardTitle>Continuous Internal Evaluation</CardTitle>
                <CardDescription>
                    Detailed CIE breakdown
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Component</TableHead>
                        <TableHead>Marks Obtained</TableHead>
                        <TableHead>Weightage</TableHead>
                        <TableHead >Final Marks</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-1
                        </TableCell>
                        <TableCell className="font-medium">
                            15
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        50%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-2
                        </TableCell>
                        <TableCell className="font-medium">
                        25
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        75%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        8/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-3
                        </TableCell>
                        <TableCell>
                        30
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        100%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/6
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-1
                        </TableCell>
                        <TableCell>
                            8
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        80%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        8/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-2
                        </TableCell>
                        <TableCell>
                        6
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        60%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
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
                <CardTitle>Continuous Internal Evaluation</CardTitle>
                <CardDescription>
                    Detailed CIE breakdown
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Component</TableHead>
                        <TableHead>Marks Obtained</TableHead>
                        <TableHead>Weightage</TableHead>
                        <TableHead >Final Marks</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-1
                        </TableCell>
                        <TableCell className="font-medium">
                        30
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        100%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        12/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-2
                        </TableCell>
                        <TableCell className="font-medium">
                        15
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        50%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-3
                        </TableCell>
                        <TableCell>
                        22.5
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        75%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        4/6
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-1
                        </TableCell>
                        <TableCell>
                            8
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        80%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        8/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-2
                        </TableCell>
                        <TableCell>
                        10
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        100%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        10/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
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
                <CardTitle>Continuous Internal Evaluation</CardTitle>
                <CardDescription>
                    Detailed CIE breakdown
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Component</TableHead>
                        <TableHead>Marks Obtained</TableHead>
                        <TableHead>Weightage</TableHead>
                        <TableHead >Final Marks</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-1
                        </TableCell>
                        <TableCell className="font-medium">
                            15
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        50%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-2
                        </TableCell>
                        <TableCell className="font-medium">
                        25
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        75%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        8/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-3
                        </TableCell>
                        <TableCell>
                        30
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        100%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/6
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-1
                        </TableCell>
                        <TableCell>
                            8
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        80%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        8/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-2
                        </TableCell>
                        <TableCell>
                        6
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        60%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        6/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
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
                <CardTitle>Continuous Internal Evaluation</CardTitle>
                <CardDescription>
                    Detailed CIE breakdown
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Component</TableHead>
                        <TableHead>Marks Obtained</TableHead>
                        <TableHead>Weightage</TableHead>
                        <TableHead >Final Marks</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-1
                        </TableCell>
                        <TableCell className="font-medium">
                        30
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        100%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        12/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-2
                        </TableCell>
                        <TableCell className="font-medium">
                        22.5
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        75%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        8/12
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        MSE-3
                        </TableCell>
                        <TableCell>
                        15
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        50%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        3/6
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-1
                        </TableCell>
                        <TableCell>
                            8
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        80%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        8/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
                        </TableCell>
                        <TableCell className="font-medium">
                        LA-2
                        </TableCell>
                        <TableCell>
                        9
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        90%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        9/10
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="hidden sm:table-cell">
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