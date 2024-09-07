import { Flex, Spinner } from "@chakra-ui/react";
import { useProducts } from "../hooks";
import { ItemListContainer } from "../components";

export const Home = () => {
  const { productsData, loading } = useProducts();
  const title = "Products"
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
