import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../../ui/table" 

import {ProgressItems} from "@/data/course-progress-items"
export function ProgressTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Öğrenci</TableHead>
                    <TableHead>Kurs</TableHead>
                    <TableHead>İlerleme</TableHead>
                    <TableHead>Durum</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {ProgressItems.map((item)=>(
                    <TableRow key={item.id}>
                        <TableCell>{item.studentName}</TableCell>
                        <TableCell>{item.courseName}</TableCell>
                        <TableCell>{item.progress}</TableCell>
                        <TableCell>{item.status}</TableCell>
                    </TableRow>     
                    ))}
                
            </TableBody>
        </Table>
    )
}
