import {
  Card,
  CardFooter,
  Stack,
  Heading,
  CardBody,
  Divider,
  Image,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
export const ItemDetailContainer = ({ product }) => {
  console.log(product);
  // return (
  //   <Card key={product.id} maxW="sm" margin={"1rem"}>
  //     <CardBody>
  //       {/*<Image src={product.thumbnail} alt={product.name} borderRadius="lg" />*/}
  //       <Image src={product.image} alt={product.title} borderRadius="lg" />
  //       <Stack mt="6" spacing="3">
  //         <Heading size="md">{product.title}</Heading>
  //         <Text>{product.category}</Text>
  //         <Text>{product.description}</Text>
  //         <Divider />
  //         <Text>Brand: {product.brand}</Text>
  //         <Text>Color: {product.color}</Text>
  //         <Text>Model: {product.model}</Text>
  //         <Text color="blue.600" fontSize="2xl">
  //           $ {product.price} USD
  //         </Text>
  //       </Stack>
  //     </CardBody>
  //     <Divider />
  //     <CardFooter>
  //       <ButtonGroup spacing="2">
  //         <Button variant="ghost" colorScheme="blue">
  //               Add to cart
  //             </Button>
  //       </ButtonGroup>
  //     </CardFooter>
  //   </Card>
  // );

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='scale-down'
        maxW={{ base: '100%', sm: '30%' }}
        src={product.image}
        alt={product.title}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{product.title}</Heading>

          <Text py='2'>
            {product.description}
          </Text>

          <Text>Brand: {product.brand}</Text>
          <Text>Color: {product.color}</Text>
          <Text>Model: {product.model}</Text>
          <Text color="blue.600" fontSize="2xl">
            $ {product.price} USD
          </Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Add to cart
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
