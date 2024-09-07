import { Flex, Text } from "@chakra-ui/react";
/*import { BsMinecart } from "react-icons/bs";*/
import { IoCartOutline } from "react-icons/io5"

export const CartWidget = () => {
  return (
    <Flex
      alignItems={"center"}
      height={"100%"}
      justifyContent={"space-between"}
      width={"60px"}
    >
      {/*<BsMinecart size={30} />*/}
      <IoCartOutline size={30}/>
      <Text fontSize={"1.5rem"}>0</Text>
    </Flex>
  );
};
