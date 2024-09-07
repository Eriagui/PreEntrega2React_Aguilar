import { Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "../components";
import { useParams } from "react-router";
import { useProductsByCat } from "../hooks";

export const Category = () => {
  const { categoryId } = useParams();
  const { productsData, loading } = useProductsByCat(categoryId);
  const title = categoryId;
  return loading ? (
    <Flex
      width={"100%"}
      height={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size="xl" />
    </Flex>
  ) : (
    <ItemListContainer title={title} products={productsData} />
  );
};