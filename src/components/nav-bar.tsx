"use client";

import Image from "next/image";
import * as React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";

type MenuChildItem = {
  title: string;
  description: string;
  children?: MenuItem[];
};

type MenuItem = {
  label: string;
  href: string;
  child?: MenuChildItem;
  description?: string;
};

const menuItems: MenuItem[] = [
  {
    label: "Services",
    href: "/services",
    child: {
      title: "Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      children: [
        {
          label: "Web Development",
          href: "/services/web-development",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          label: "Mobile Development",
          href: "/services/mobile-development",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          label: "Digital Marketing & SEO",
          href: "/services/seo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
  },
  {
    label: "Why Us",
    href: "/about-us",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
];

type NavBarProps = {
  className?: string;
  listClassName?: string;
  menuClassName?: string;
};

export function NavBar(props: Readonly<NavBarProps>) {
  const path = usePathname();

  const activeClassName = (href: string) => {
    const isCurrent = path === href || path.startsWith(href);

    return isCurrent
      ? "bg-yellow-100 text-accent-foreground dark:bg-yellow-900 dark:text-accent-foreground"
      : "";
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800">
      <nav
        className={cn(
          "bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800",
          props.className
        )}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <Image
              width={32}
              height={32}
              src="/logo.png"
              className="mr-2"
              alt="Wordnox Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Wordnox
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <Button className="focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">
              Hire Us
            </Button>

            <button className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <NavigationMenu>
              <NavigationMenuList>
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  {menuItems.map((item) => {
                    if (item.child) {
                      return (
                        <NavigationMenuItem
                          key={item.href}
                          className={cn(
                            "group ",
                            props.listClassName,
                            activeClassName(item.href)
                          )}
                        >
                          <NavigationMenuTrigger>
                            {item.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <a
                                    className="  flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href={item.href}
                                  >
                                    <Icons.Logo className="h-6 w-6" />
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                      {item.child.title}
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                      {item.child.description}
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                              {item.child.children?.map((child) => (
                                <ListItem
                                  href={child.href}
                                  title={child.label}
                                  key={child.href}
                                  className={cn("group", props.listClassName)}
                                >
                                  {child.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      );
                    }

                    return (
                      <ListItem
                        key={item.href}
                        title={item.label}
                        href={item.href}
                        className={activeClassName(item.href)}
                      />
                    );
                  })}
                </ul>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-yellow-100 hover:text-accent-foreground focus:bg-yellow-100 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
