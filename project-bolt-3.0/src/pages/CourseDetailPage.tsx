import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, Star, CheckCircle } from "lucide-react";

export function CourseDetailPage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <div className="container mx-auto px-4 py-8">课程不存在</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Course Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>{course.students} 名学员</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-muted-foreground" />
              <span>{course.level}</span>
            </div>
          </div>
          <Button size="lg">立即报名</Button>
        </div>

        {/* Course Content */}
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">课程概述</TabsTrigger>
            <TabsTrigger value="curriculum">课程大纲</TabsTrigger>
            <TabsTrigger value="requirements">学习要求</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>课程介绍</CardTitle>
                <CardDescription>
                  通过本课程，你将学习到：
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {course.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="curriculum">
            <Card>
              <CardHeader>
                <CardTitle>课程大纲</CardTitle>
                <CardDescription>
                  详细的课程内容安排
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.curriculum.map((week, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <h3 className="font-semibold mb-2">第 {index + 1} 周：{week.title}</h3>
                      <ul className="space-y-2">
                        {week.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex gap-2">
                            <BookOpen className="h-5 w-5 text-muted-foreground" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle>学习要求</CardTitle>
                <CardDescription>
                  开始学习本课程需要的基础知识和准备工作
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

const courses = [
  {
    id: 1,
    title: "Processing 创意编程基础",
    description: "学习使用 Processing 创建视觉艺术作品，掌握基础编程概念和创意表达方式。",
    duration: "8周课程",
    level: "入门",
    students: 1234,
    learningOutcomes: [
      "掌握 Processing 编程环境的基本使用",
      "理解基础编程概念：变量、循环、条件语句",
      "学会创建简单的图形和动画",
      "能够独立完成创意视觉作品",
    ],
    curriculum: [
      {
        title: "认识 Processing",
        topics: [
          "Processing 简介和开发环境搭建",
          "基本图形绘制",
          "颜色和形状",
        ],
      },
      {
        title: "动画基础",
        topics: [
          "变量和动态效果",
          "使用循环创建图案",
          "鼠标和键盘交互",
        ],
      },
      // 更多周内容...
    ],
    requirements: [
      "基本的计算机操作能力",
      "对编程和艺术创作有兴趣",
      "无需编程经验",
    ],
  },
  // 其他课程数据...
];