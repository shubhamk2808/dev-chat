import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  ChevronUp
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import NoChat from "@/components/chat/NoChat"
import ChatList from "@/components/chat/ChatList"
import UserPic from "@/components/ui/Common/UserPic"
import UserStatus from "@/components/ui/Common/UserStatus"
import { statusList } from "@/lib/contant"
import { ModeToggle } from "@/components/themeToggle"

export default function Chat() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Dev Chat</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="lg:px-4 text-xs flex flex-row items-center"><span>Chats </span><ChevronUp className='ml-1 w-3.5' /></DropdownMenuTrigger>
              <DropdownMenuContent className='ml-4'>
                <DropdownMenuItem className='text-xs p-1'>Sort by unread</DropdownMenuItem>
                <DropdownMenuItem className='text-xs  p-1'>Sort by time</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <User className="h-4 w-4" />
                Chat with yourself
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <User className="h-4 w-4" />
                User
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <DropdownMenu>
                <DropdownMenuTrigger className="lg:px-4 text-xs flex flex-row items-center"><span>Chats </span><ChevronUp className='ml-1 w-3.5' /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className='text-xs p-1'>Sort by unread</DropdownMenuItem>
                  <DropdownMenuItem className='text-xs  p-1'>Sort by time</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Dev Chat</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <User className="h-5 w-5" />
                  User
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    5
                  </Badge>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1 flex-row">
            <div className='header flex flex-row justify-between '>
              <div className='left flex flex-row gap-2'>
                <UserPic />
                <div>
                  <h2 >Shubham</h2>
                  <UserStatus status={statusList.Active} />
                </div>
              </div>
              <div className='flex flex-row items-center gap-3'>
                <Search />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <CircleUser className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 items-center">
          {/* <NoChat/> */}
          <ChatList />
        </main>
      </div>
    </div>
  )
}
