"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Home,
  Square,
  PanelLeft,
  Image,
  SidebarOpen,
  Palette,
  Table,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  const menuItems = [
    {
      icon: <Home className='w-8 h-8' />,
      title: "Home",
      description:
        "Your central hub for navigating through all UI components and features.",
      color: "text-blue-500",
      link: "/",
    },
    {
      icon: <Square className='w-8 h-8' />,
      title: "Modals",
      description:
        "Explore various modal dialogs and popup windows for user interactions and notifications.",
      color: "text-purple-500",
      link: "/modals",
    },
    {
      icon: <PanelLeft className='w-8 h-8' />,
      title: "Drawer",
      description:
        "Side panel components that slide in from the edge of the screen for additional content.",
      color: "text-green-500",
      link: "/drawer",
    },
    {
      icon: <Image className='w-8 h-8' />,
      title: "Carousel",
      description:
        "Interactive image and content sliders with smooth transitions and navigation controls.",
      color: "text-orange-500",
      link: "/carousel",
    },
    {
      icon: <SidebarOpen className='w-8 h-8' />,
      title: "Side Navbar",
      description:
        "Collapsible sidebar navigation for improved site structure and user experience.",
      color: "text-indigo-500",
      link: "/side-navbar",
    },
    {
      icon: <Palette className='w-8 h-8' />,
      title: "Toggle Theme",
      description:
        "Switch between light and dark modes for comfortable viewing in any environment.",
      color: "text-pink-500",
      link: "/toggle-theme",
    },
    {
      icon: <Table className='w-8 h-8' />,
      title: "Tables",
      description:
        "Data tables with sorting, filtering, and pagination for organized information display.",
      color: "text-teal-500",
      link: "/tables",
    },
  ];

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            UI Component Library
          </h1>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Discover a comprehensive collection of modern UI components built
            with React and shadcn/ui
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className='hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-[#BF9550]'
              onClick={() => router.push(item.link)}
            >
              <CardHeader>
                <div className={`${item.color} mb-3`}>{item.icon}</div>
                <CardTitle className='text-2xl font-mono'>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base leading-relaxed'>
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
