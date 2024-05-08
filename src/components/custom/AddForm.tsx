import { CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Button } from "@headlessui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/http/api";
import { FormEvent } from "react";

export default function AddForm() {
  const form = useForm();
  const queryClinet = useQueryClient();
  const mutataion = useMutation({
    mutationFn: api.createProduct,
    onSuccess: (data) => {
      if (data) {
        queryClinet.invalidateQueries({
          queryKey: ["books"],
        });
      }
    },
  });

  const hanldeSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutataion.mutate({ name: "zain", email: "zaini@gmail.com" });
  };
  return (
    <div className="md:max-w-[70%] mx-auto">
      <Form {...form}>
        <form action="/">
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  defaultValue="Gamer Gear Pro Controller"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                  className="min-h-32"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Thumbnil</Label>
                <Input
                  type="file"
                  className="w-full"
                  placeholder="select a thumnil"
                  accept="image/*"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Images</Label>
                <Input
                  type="file"
                  className="w-full"
                  placeholder="select images"
                  multiple
                  accept="image/*"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="temperature">Price </Label>
                <Input id="temperature" type="number" placeholder="0.4" />
              </div>

              <div className="md:flex md:flex-row gap-4  items-center">
                <div className="grid gap-3 flex-1">
                  <Label htmlFor="temperature">Stock </Label>
                  <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                <div className="grid gap-3 flex-1">
                  <Label htmlFor="temperature">Discount </Label>
                  <Input id="temperature" type="number" placeholder="0.4" />
                </div>
              </div>

              <div className="md:flex md:flex-row gap-4  flex-col  items-center">
                <div className="grid gap-3 flex-1 md:mt-1 ">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3 flex-1 md:mt-1 mt-6">
                  <Label htmlFor="subcategory">Subcategory (optional)</Label>
                  <Select>
                    <SelectTrigger
                      id="subcategory"
                      aria-label="Select subcategory"
                    >
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="t-shirts">T-Shirts</SelectItem>
                      <SelectItem value="hoodies">Hoodies</SelectItem>
                      <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                onClick={hanldeSubmit}
                type="submit"
                className={
                  "bg-gray-800 p-3 rounded-md max-w-[50%] min-w-[50%] mx-auto text-white"
                }
              >
                <span>Submit</span>
              </Button>
            </div>
          </CardContent>
        </form>
      </Form>
    </div>
  );
}

// <div className="grid gap-3">
//   <Label htmlFor="temperature">Price </Label>
//   <Input id="temperature" type="number" placeholder="0.4" />
// </div>;
