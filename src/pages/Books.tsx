import BooksTable from "@/components/custom/BooksTable";
import BreadCrumComponent from "@/components/custom/BreadCrumComponent";
import PaginationDesign from "@/components/custom/Pagination";
import api from "@/http/api";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const ITEMS_PER_PAGE = [6, 9, 12, 15, 18, 20];
const MAX_PAGES = 6;
const Books = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(ITEMS_PER_PAGE[0]);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", limit],
    queryFn: async () => {
      const response = await api.getAllProducts(limit);
      return response;
    },
    staleTime: 10000,
  });
  const handlePage = () => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      const nextLimitIndex = nextPage - 1;

      if (nextPage <= MAX_PAGES && nextLimitIndex < ITEMS_PER_PAGE.length) {
        setLimit(ITEMS_PER_PAGE[nextLimitIndex]);
        return nextPage;
      } else {
        // Reached the maximum number of pages, do not update the page
        return prevPage;
      }
    });
  };

  const handlePrevious = () => {
    setPage((prevPage) => {
      if (prevPage > 1) {
        const previousLimitIndex = prevPage - 2;
        setLimit(ITEMS_PER_PAGE[previousLimitIndex] || ITEMS_PER_PAGE[0]);
        return prevPage - 1;
      }
      return prevPage;
    });
  };
  return (
    <div className="container mx-auto">
      <BreadCrumComponent />
      <BooksTable data={data?.data} isLoading={isLoading} isError={isError} />
      <PaginationDesign
        page={page}
        handlePage={handlePage}
        limit={limit}
        handlePrevious={handlePrevious}
      />
    </div>
  );
};

export default Books;
