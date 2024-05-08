import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CirclePlus, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import AppLoader from "./AppLoader";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
function BooksTable({ data, isLoading, isError }) {
    const [showModal, setshowModal] = useState(false);
    if (isLoading) {
        return _jsx(AppLoader, {});
    }
    if (isError) {
        return _jsx("p", { children: "The error is " });
    }
    const handleModal = () => {
        setshowModal(true);
    };
    return (_jsxs("div", { className: "flex min-h-screen w-full my-8 flex-col bg-muted/40", children: [_jsxs(Card, { "x-chunk": "dashboard-06-chunk-0", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { children: [_jsx(CardTitle, { children: "Products" }), _jsx(CardDescription, { children: "Manage your Products and view their sales performance." })] }), _jsx("div", { children: _jsx(Link, { to: "/dashboard/book/create", children: _jsxs(Button, { size: "sm", children: [_jsx(CirclePlus, { size: 20 }), _jsx("span", { className: "ml-2 text-[12px]", children: "Add Product" })] }) }) })] }) }), _jsx(CardContent, { children: _jsxs(Table, { className: "", children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { className: "hidden w-[100px] sm:table-cell", children: _jsx("span", { className: "sr-only", children: "Image" }) }), _jsx(TableHead, { children: "Name" }), _jsx(TableHead, { children: "Category" }), _jsx(TableHead, { children: "Price" }), _jsx(TableHead, { children: "Rating" }), _jsx(TableHead, { className: "hidden md:table-cell", children: "stock" }), _jsx(TableHead, { children: _jsx("span", { className: "sr-only", children: "Actions" }) })] }) }), _jsx(TableBody, { children: data &&
                                        data?.map((book, index) => {
                                            return (_jsxs(TableRow, { className: "cursor-pointer", children: [_jsx(TableCell, { className: "hidden sm:table-cell", children: _jsx("img", { alt: "Product image", className: "aspect-square rounded-md object-cover", height: "34", src: book?.image, width: "34" }) }), _jsx(TableCell, { className: "font-medium text-clip  end-0 md:max-w-[10%] ", children: book?.title.length > 20
                                                            ? book?.title.slice(0, 14) + "..."
                                                            : book?.title }), _jsx(TableCell, { children: book.category }), _jsx(TableCell, { children: book.price }), _jsx(TableCell, { className: "hidden md:table-cell", children: book.rating.rate }), _jsx(TableCell, { className: "hidden md:table-cell", children: book.rating.count }), _jsx(TableCell, { children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { "aria-haspopup": "true", size: "icon", variant: "ghost", children: [_jsx(MoreHorizontal, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Toggle menu" })] }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuLabel, { children: "Actions" }), _jsx(DropdownMenuItem, { children: _jsx(Link, { to: "/dashboard/books/editbook", children: _jsx("span", { children: "Edit" }) }) }), _jsx(DropdownMenuItem, { onClick: handleModal, className: "cursor-pointer", children: "Delete" })] })] }) })] }, index));
                                        }) })] }) }), _jsx(CardFooter, { children: _jsxs("div", { className: "text-xs text-muted-foreground", children: ["Showing ", _jsxs("strong", { children: ["1-", data.length] }), " of ", _jsx("strong", { children: "32" }), " ", "products"] }) })] }), _jsx(DeleteModal, { showModal: showModal, handleModal: handleModal, setshowModal: setshowModal })] }));
}
export default BooksTable;
