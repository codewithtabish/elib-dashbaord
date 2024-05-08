import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination";
const PaginationDesign = ({ page, handlePage, limit, handlePrevious }) => {
    return (_jsxs(Pagination, { children: [_jsxs(PaginationContent, { children: [page !== 1 && (_jsx(PaginationItem, { className: "cursor-pointer", onClick: handlePrevious, children: _jsx(PaginationPrevious, { children: _jsx("button", {}) }) })), _jsx(PaginationItem, { className: "cursor-pointer", children: _jsx(PaginationLink, { children: _jsx("button", { children: page }) }) }), _jsx(PaginationItem, { children: _jsx(PaginationEllipsis, {}) })] }), page !== 6 && (_jsx(PaginationItem, { className: "cursor-pointer", onClick: handlePage, children: _jsx(PaginationNext, { to: "" }) }))] }));
};
export default PaginationDesign;
