import { useRef, useCallback } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, CircularProgress } from "@mui/material";
import { useFetchProductChunk } from "../hooks/useFetchProductChunk";
import { AddProductToCartButton } from "@/features/cart/components/AddProductToCartButton";

const ProductTable = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
   useFetchProductChunk({chunkIndex: 0, chunkSize: 20, sortByAscending: true});
  const observer = useRef<IntersectionObserver>(null);

  // Ref callback to observe last row
  const lastRowRef = useCallback(
    (node: HTMLTableRowElement | null) => {
      if (isFetchingNextPage || isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, isLoading, hasNextPage, fetchNextPage]
  );

  if (isLoading) return <CircularProgress />;


  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Product Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.pages.map((page) =>
          page.products.map((product, i, arr) => {
            const isLastRow = i === arr.length - 1;
            return (
              <TableRow key={product.id} ref={isLastRow ? lastRowRef : null}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.imageUrl}</TableCell>
                <TableCell><AddProductToCartButton product={product}/></TableCell>
              </TableRow>
            );
          })
        )}

        {isFetchingNextPage && (
          <TableRow>
            <TableCell colSpan={2} align="center">
              <CircularProgress size={24} />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default ProductTable