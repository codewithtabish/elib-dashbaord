interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

interface ProductTableProps {
  data: Product[];
  isLoading: boolean;
  isError: boolean;
}

export default ProductTableProps;
