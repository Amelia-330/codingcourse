import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { 
  Bot, 
  BookOpenCheck,
  FileCode,
  Palette,
  Lightbulb,
} from "lucide-react";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("border-b", className)}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            创意编程
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>课程</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                          <BookOpenCheck className="h-4 w-4" />
                          基础知识和入门教程
                        </div>
                        <ul className="space-y-1">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/creative-programming-intro"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                创意编程导论
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/creative-programming-tools"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                创意编程工具与环境
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>

                        <div className="flex items-center gap-2 mb-2 mt-4 text-sm font-medium">
                          <FileCode className="h-4 w-4" />
                          Web创意编程
                        </div>
                        <ul className="space-y-1">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/p5js-basics"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                P5.js基础入门
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/threejs"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                Three.js 3D创作
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/webgl-shaders"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                WebGL着色器艺术
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/web-audio-visual"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                Web音视频互动
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                          <Palette className="h-4 w-4" />
                          桌面创意编程
                        </div>
                        <ul className="space-y-1">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/processing-basics"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                Processing创意编程基础
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/openframeworks"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                openFrameworks进阶
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/touchdesigner"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                TouchDesigner入门
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>

                        <div className="flex items-center gap-2 mb-2 mt-4 text-sm font-medium">
                          <Lightbulb className="h-4 w-4" />
                          高级应用主题
                        </div>
                        <ul className="space-y-1">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/ml-art"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                机器学习艺术
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/creative-games"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                创意游戏设计
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/courses/data-art"
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              >
                                数据艺术创作
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link to="/courses">
                          查看全部课程
                        </Link>
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/projects" className={cn(navigationMenuTriggerStyle())}>
                  项目
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/articles" className={cn(navigationMenuTriggerStyle())}>
                  文章
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
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}