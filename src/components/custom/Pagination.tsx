import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router-dom";

const PaginationDesign = ({ page, handlePage, limit, handlePrevious }: any) => {
  return (
    <Pagination>
      <PaginationContent>
        {page !== 1 && (
          <PaginationItem className="cursor-pointer" onClick={handlePrevious}>
            <PaginationPrevious>
              <button></button>
            </PaginationPrevious>
          </PaginationItem>
        )}
        <PaginationItem className="cursor-pointer">
          <PaginationLink>
            <button>{page}</button>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="cursor-pointer" onClick={handlePage}>
          <PaginationNext to="" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationDesign;
