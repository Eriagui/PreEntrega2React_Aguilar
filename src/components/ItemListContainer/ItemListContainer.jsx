import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const ItemListContainer = ({ title, products }) => {
  console.log("title");
  console.log(title);
  title = title.toUpperCase();
  return (
    <Box textAlign = "center">
        <Heading as="h1">{title}</Heading>
      <Box display={"flex"} flexWrap={"wrap"}>
        {products.map((product) => (
          <Card key={product.id} maxW="sm" margin={"1rem"}>
            <CardBody>
              <Image
                /*src={product.thumbnail}*/
                src={product.image}
                alt={product.name}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.title}</Heading>
                {/*<Text>{product.description}</Text>*/}
                <Text>{product.category}</Text>
                <Text color="blue.600" fontSize="2xl">
                  $ {product.price} USD
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                {/* <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button> */}
                <Link to={`/item/${product.id}`}><strong>See more...</strong></Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </Box>

  );
};
