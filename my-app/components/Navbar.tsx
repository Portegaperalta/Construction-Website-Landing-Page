import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
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
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {
          items.map((item) => (
            <NavigationMenuItem
              key={item.name}
              className="cursor-pointer"
            >
              <NavigationMenuLink>
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}