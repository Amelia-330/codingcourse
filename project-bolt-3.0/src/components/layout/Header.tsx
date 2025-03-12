import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Bot } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            创意编程
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/courses" className={cn(navigationMenuTriggerStyle())}>
                  课程
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/projects" className={cn(navigationMenuTriggerStyle())}>
                  项目展示
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/community" className={cn(navigationMenuTriggerStyle())}>
                  学习社区
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/ai-tutor" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
                  <Bot className="h-4 w-4" />
                  AI 家教
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">登录</Button>
            </Link>
            <Link to="/register">
              <Button>注册</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}