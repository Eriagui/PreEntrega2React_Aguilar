import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";


export const NavBar = () => {

  const { productsCategories } = useCategories();
  const { colorMode, toggleColorMode } = useColorMode();

  console.log("Navbar productsCategories");
  console.log(productsCategories);

  /*const menuOptions = [
    { id: 1, label: "audio" },
    { id: 2, label: "gaming" },
    { id: 3, label: "mobile" },
    { id: 4, label: "tv" },
  ];*/


  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to="/"><strong>Erick's Store</strong></Link>
          </Box>
          <Box>
            <Link to="/">Home</Link>
          </Box>
          <Box alignContent={"flex-start"} width={"100%"} marginLeft={30}>
            <Menu>
              {/*<Link to="/">Home</Link>*/}
              <MenuButton as={Link} cursor="pointer">
                Categories
              </MenuButton>
              <MenuList>
                {productsCategories.map((option) => (
                  <MenuItem key={option}>
                    <Link to={`/category/${option}`}>
                      {option}
                    </Link>

                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CartWidget />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Log in</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
