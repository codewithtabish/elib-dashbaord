import { CirclePlus, MoreHorizontal } from "lucide-react";
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
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

function BooksTable({ data, isLoading, isError }: ProductTableProps) {
  const [showModal, setshowModal] = useState<boolean>(false);
  if (isLoading) {
    return <AppLoader />;
  }

  if (isError) {
    return <p>The error is </p>;
  }
  const handleModal = () => {
    setshowModal(true);
  };

  return (
    <div className="flex min-h-screen w-full my-8 flex-col bg-muted/40">
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your Products and view their sales performance.
              </CardDescription>
            </div>
            <div>
              <Link to={"/dashboard/book/create"}>
                <Button size="sm">
                  <CirclePlus size={20} />
                  <span className="ml-2 text-[12px]">Add Product</span>
                </Button>
              </Link>
            </div>
          </div>
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
                    <TableRow key={index} className="cursor-pointer">
                      <TableCell className="hidden sm:table-cell">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="34"
                          src={book?.image}
                          width="34"
                        />
                      </TableCell>
                      <TableCell className="font-medium text-clip  end-0 md:max-w-[10%] ">
                        {book?.title.length > 20
                          ? book?.title.slice(0, 14) + "..."
                          : book?.title}
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
                            <DropdownMenuItem>
                              <Link to={"/dashboard/books/editbook"}>
                                <span>Edit</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={handleModal}
                              className="cursor-pointer"
                            >
                              Delete
                            </DropdownMenuItem>
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
      <DeleteModal
        showModal={showModal}
        handleModal={handleModal}
        setshowModal={setshowModal}
      />
    </div>
  );
}

export default BooksTable;
