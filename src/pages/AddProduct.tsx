import AddForm from "@/components/custom/AddForm";
import BreadCrumComponent from "@/components/custom/BreadCrumComponent";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const AddProduct = () => {
  return (
    <div className="">
      <BreadCrumComponent edit={false} productCreate={true} />
      <Card className="my-4 container ">
        <CardHeader>
          <CardTitle>Create a new Product</CardTitle>
          <CardDescription>
            fill out the form below to create a product
          </CardDescription>
        </CardHeader>
        <AddForm />
      </Card>
    </div>
  );
};

export default AddProduct;
