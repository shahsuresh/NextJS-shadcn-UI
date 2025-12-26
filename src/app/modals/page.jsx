import { Button } from "@/components/ui/button";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Modals = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='destructive'>Click to Open Modal Box</Button>
        </DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant='destructive' size='lg'>
              Delete
            </Button>
            <DialogClose asChild>
              <Button type='button' size='lg'>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modals;
