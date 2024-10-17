import { Skeleton } from '@/components/ui/skeleton';
import { TableCell, TableRow } from '@/components/ui/table';

export function CustomersTableSkeleton() {
  const tableRow = Array.from({ length: 10 });

  return tableRow.map((_, index) => (
    <TableRow key={`skeleton-${index}`}>
      <TableCell className="font-medium">
        <Skeleton className="h-[20px] w-[100px] rounded-md" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-[20px] w-[100px] rounded-md" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-[20px] w-[100px] rounded-md" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-[20px] w-[100px] rounded-md" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-[20px] w-[100px] rounded-md" />
      </TableCell>
      <TableCell className="text-right">
        <Skeleton className="h-[20px] w-[100px] rounded-md" />
      </TableCell>
      <TableCell className="text-center">
        <Skeleton className="h-[20px] w-[100px] rounded-md" />
      </TableCell>
    </TableRow>
  ));
}
