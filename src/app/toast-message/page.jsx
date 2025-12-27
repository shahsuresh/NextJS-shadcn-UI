"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

const ToastNotificationDemo = () => {
  return (
    <div className='flex gap-2 mt-5 p-1'>
      <Button
        variant='outline'
        onClick={() =>
          toast("Event has been created", {
            description: "Saturday, December 27, 2025 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast Notification
      </Button>
      <Button
        onClick={() => {
          toast.warning("You Got a Warning");
        }}
      >
        Warning
      </Button>
      <Button
        variant='outline'
        onClick={() => {
          toast.info("You can update your dob only once");
        }}
      >
        Info
      </Button>
      <Button
        className={"bg-green-500"}
        onClick={() => {
          toast.success("Form Submitted Successfully");
        }}
      >
        Success
      </Button>
      <Button
        variant='destructive'
        onClick={() => {
          toast.error("Form Submission Failed");
        }}
      >
        Error
      </Button>
    </div>
  );
};

export default ToastNotificationDemo;
