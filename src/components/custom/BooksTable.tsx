import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AppLoader from "./AppLoader";
import ProductTableProps from "@/types/bookTypes";

function BooksTable({ data, isLoading, isError }: ProductTableProps) {
  if (isLoading) {
    return <AppLoader />;
  }

  if (isError) {
    return <p>The error is </p>;
  }

  return (
    <div className="flex min-h-screen w-full my-8 flex-col bg-muted/40">
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Books</CardTitle>
          <CardDescription>
            Manage your Books and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Rating</TableHead>

                <TableHead className="hidden md:table-cell">stock</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data &&
                data?.map((book: any, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell className="hidden sm:table-cell">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="34"
                          src="/public/vite.svg"
                          width="34"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {book?.title}
                      </TableCell>
                      <TableCell>{book.category}</TableCell>
                      <TableCell>{book.price}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {book.rating.rate}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {book.rating.count}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{data.length}</strong> of <strong>32</strong>{" "}
            products
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BooksTable;
