import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeIcon, BrainCircuitIcon, RocketIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              探索创意编程的无限可能
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              通过实践学习，释放你的创造力。从基础编程到高级创意项目，开启你的编程艺术之旅。
            </p>
            <Link to="/courses">
              <Button size="lg" className="mr-4">
                开始学习
                <RocketIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                了解更多
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CodeIcon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>交互式学习</CardTitle>
              <CardDescription>
                通过实时编码环境，即学即练，加深理解
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <BrainCircuitIcon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>创意思维</CardTitle>
              <CardDescription>
                培养算法思维，激发创新能力
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <UsersIcon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>社区互动</CardTitle>
              <CardDescription>
                加入学习社区，分享作品，共同进步
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-12">精选课程</h2>
        <Tabs defaultValue="all" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">全部课程</TabsTrigger>
            <TabsTrigger value="beginner">入门课程</TabsTrigger>
            <TabsTrigger value="advanced">进阶课程</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {course.duration}
                      </span>
                      <Link to={`/courses/${course.id}`}>
                        <Button variant="secondary" size="sm">
                          查看详情
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

const courses = [
  {
    id: 1,
    title: "Processing 创意编程基础",
    description: "学习使用 Processing 创建视觉艺术作品",
    duration: "8周课程",
  },
  {
    id: 2,
    title: "P5.js 互动艺术设计",
    description: "使用 JavaScript 创建网页互动艺术",
    duration: "10周课程",
  },
  {
    id: 3,
    title: "生成艺术进阶",
    description: "探索算法艺术和程序化设计",
    duration: "12周课程",
  },
  {
    id: 4,
    title: "创意编程与数据可视化",
    description: "将数据转化为视觉艺术作品",
    duration: "10周课程",
  },
];