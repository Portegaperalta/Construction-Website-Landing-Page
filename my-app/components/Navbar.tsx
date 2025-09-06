"use client"

import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

type item = {
  name: string,
  href: string,
}

const items: item[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/' },
  { name: 'Service', href: '/' },
  { name: 'Project', href: '/' }
]

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {
          items.map((item) => (
            <NavigationMenuItem
              key={item.name}
              className="cursor-pointer"
            >
              <NavigationMenuLink
                className="text-white text-[1.1rem] hover:text-white hover:bg-transparent">
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}