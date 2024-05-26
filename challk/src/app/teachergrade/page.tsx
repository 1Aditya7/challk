import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Component() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Grade: Design and Analysis of Algorithms</CardTitle>
        <CardDescription>Sec - E</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>USN</TableHead>
              <TableHead className="hidden sm:table-cell">Name</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Marks</TableHead>
              <TableHead className="text-right">Final Marks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE164</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Aditya Shetty</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Pass
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">24</TableCell>
              <TableCell className="text-right">9.6</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE166</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Aryan Purohit</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Pass
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">28</TableCell>
              <TableCell className="text-right">11.2</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE165</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Aman Gupta</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Absent
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">0</TableCell>
              <TableCell className="text-right">0</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE166</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Bhavy Shukla</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Fail
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">11</TableCell>
              <TableCell className="text-right">4.4</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE168</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Chirag Bansal</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Pass
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">20</TableCell>
              <TableCell className="text-right">8</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE170</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Chinmay Prathiban</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Pass
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">26</TableCell>
              <TableCell className="text-right">10.4</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE171</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Devesh S</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Pass
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">24</TableCell>
              <TableCell className="text-right">9.6</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE172</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Dharmesh T</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Pass
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">28</TableCell>
              <TableCell className="text-right">11.8</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE173</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Farahan Akhtar</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Pass
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">25</TableCell>
              <TableCell className="text-right">10.4</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE174</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Gopal Kisan</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Absent
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">0</TableCell>
              <TableCell className="text-right">0</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE175</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Hrishikesh Sahoo</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Passs
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">18</TableCell>
              <TableCell className="text-right">8.4</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE176</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">James Mathew</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Pass
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">27</TableCell>
              <TableCell className="text-right">11.6</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE177</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Karthik Aryan</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Pass
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">30</TableCell>
              <TableCell className="text-right">12</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">1NT20CSE178</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Nischit Gopal</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Absent
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">0</TableCell>
              <TableCell className="text-right">0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
