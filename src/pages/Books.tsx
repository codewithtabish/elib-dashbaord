import BooksTable from "@/components/custom/BooksTable";
import BreadCrumComponent from "@/components/custom/BreadCrumComponent";
import PaginationDesign from "@/components/custom/Pagination";
import api from "@/http/api";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Books = () => {
  const [page, setpage] = useState(1);
  const [limit, setLimit] = useState<Number>(3);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", limit],
    queryFn: async () => {
      const response = await api.getAllProducts(limit);
      return response;
    },
    staleTime: 10000,
  });

  const handlePage = () => {
    setpage(page + 1);
    setLimit(8);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setpage(page - 1);
    }
    // if (page === 5) {
    //   setpage(page);
    // }
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
