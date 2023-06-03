import React, { ReactNode } from "react";
import { Box,Spacer,DrawerHeader,DrawerFooter,Input, Flex,IconButton,Text, Button, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
interface MenuItemProps {
  children: ReactNode;
}
const Nav: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

 
  const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
    <Flex
      className="flex-1 flex flex-row py-[0.38rem] px-[0.63rem] items-center justify-center gap-[0.5rem]"
    >
      <div className="relative tracking-[-0.02em] leading-[120%] font-medium">
        {children}
      </div>
    </Flex>
  );
  
  
  const MenuItems = () => (
    <Box
      className=" flex flex-col bg-red lg:flex-row justify-between gap-2"
    >
      <MenuItem>App</MenuItem>
      <MenuItem>Protocol</MenuItem>
      <MenuItem>Governance</MenuItem>
      <MenuItem>Docs</MenuItem>
    </Box>
  );
  

  
  return (
    <>
    <Box 
    className="absolute w-full pr-10 pl-2 top-0 left-0 bg-linen backdrop-filter[blur(26px)] box-border lg:w-90rem flex flex-row py-4 items-center justify-between text-left text-sm text-light-green font-karla border-b border-solid border-darkslategray-100 space-x-4 lg:space-x-0"
  >
    <Box className="flex flex-row items-center justify-start gap-1 lg:gap-4">
      <img
        className="relative w-10 h-11"
        alt=""
        src="/group-14.svg"
      />
      <div className="flex flex-col items-start justify-center gap-2">
        <img
          className="relative w-16 h-4"
          alt=""
          src="/omika.svg"
        />
        <img
          className="relative w-18 h-4"
          alt=""
          src="/finance.svg"
        />
      </div>
    </Box>
    <Box className="hidden lg:flex flex-row space-x-0">
      <MenuItems />
      <Button 
        className="rounded-md bg-gradient-to-r from-orange-500 to-orange-700 flex flex-row py-3 px-6 items-center justify-center text-white"
      >
        Launch App
      </Button>
    </Box>
  
    <Box className="base:block lg:hidden ml-4">
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      
    </Box>
  </Box>
  <Drawer
  isOpen={isOpen}
  placement='right'
  onClose={onClose}

>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerCloseButton />
    

    <DrawerBody>
     <MenuItems/>
    </DrawerBody>

    
  </DrawerContent>
</Drawer>
</>
  );
};

export default Nav;