import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SideNavbar = () => {
  return (
    <div className='flex gap-2 items-center justify-around m-2'>
      {/* //# update profile */}
      <Sheet>
        <SheetTrigger className='border-2 border-red-500 rounded-3xl p-1.5'>
          Update Profile
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Profile Update</SheetTitle>
            <SheetDescription>
              Fill the updated details you want to update
            </SheetDescription>
          </SheetHeader>
          <div className=' grid gap-2 py-2 px-4'>
            <Label>Name</Label>
            <Input placeholder='Enter your Name' />
            <Label>Email</Label>
            <Input placeholder='Enter your new email' />
            <Label>Mobile</Label>
            <Input placeholder='Enter your new Mobile Number' />
            <Label>Password</Label>
            <Input placeholder='Enter your new Password' />
          </div>
          <SheetFooter>
            <Button type='submit' variant='outline' className={"bg-green-200"}>
              Update Profile
            </Button>
            <SheetClose asChild>
              <Button variant='outline'>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      {/* Sidebar for Update Username */}
      <Sheet>
        <SheetTrigger asChild>
          <Button>Update Username</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Update Your Username</SheetTitle>
            <SheetDescription>
              If You want to update your username, you can do it here.
            </SheetDescription>
          </SheetHeader>
          <div className=' grid gap-4 py-2 px-4'>
            <Label>Username</Label>
            <Input placeholder='Enter your new username' />
          </div>
          <SheetFooter>
            <Button type='submit'>Save changes</Button>
            <SheetClose asChild>
              <Button variant='outline'>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideNavbar;
