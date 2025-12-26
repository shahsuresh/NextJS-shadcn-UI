import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import React from "react";

const DrawerComponent = () => {
  return (
    <div>
      <h1>Drawer</h1>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant='outline'>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create Username</DrawerTitle>
            <DrawerDescription>
              You can create a username or use your email address as your
              username
            </DrawerDescription>
          </DrawerHeader>
          <Input type={"email"} placeholder='username'></Input>

          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
