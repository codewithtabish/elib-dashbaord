import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const BreadCrumComponent = ({
  edit,
  productCreate,
}: {
  edit: boolean;
  productCreate: boolean;
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to={"/dashboard/home"}>
            <BreadcrumbLink>home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link to={"/dashboard/books"}>
            <BreadcrumbLink>products</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        {edit && <BreadcrumbSeparator />}
        {edit && (
          <BreadcrumbItem>
            <Link to={"/dashboard/books/editbook"}>
              <BreadcrumbLink>edit product</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        )}
        {productCreate && <BreadcrumbSeparator />}
        {productCreate && (
          <BreadcrumbItem>
            <Link to={"/dashboard/book/create"}>
              <BreadcrumbLink>create</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumComponent;
