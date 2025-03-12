import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">课程目录</h1>
        
        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <Input
            placeholder="搜索课程..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择难度" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部难度</SelectItem>
              <SelectItem value="beginner">入门</SelectItem>
              <SelectItem value="intermediate">进阶</SelectItem>
              <SelectItem value="advanced">高级</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className="mt-2">{course.description}</CardDescription>
                  </div>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary">
                    {course.level}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{course.duration}</p>
                    <p className="text-sm text-muted-foreground">学员数：{course.students}</p>
                  </div>
                  <Link to={`/courses/${course.id}`}>
                    <Button>课程详情</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
    level: "beginner",
    students: 1234,
  },
  {
    id: 2,
    title: "P5.js 互动艺术设计",
    description: "使用 JavaScript 和 P5.js 库创建网页互动艺术，学习网页动画和用户交互设计。",
    duration: "10周课程",
    level: "intermediate",
    students: 856,
  },
  {
    id: 3,
    title: "生成艺术进阶",
    description: "探索算法艺术和程序化设计的高级概念，创建复杂的生成艺术作品。",
    duration: "12周课程",
    level: "advanced",
    students: 543,
  },
  {
    id: 4,
    title: "创意编程与数据可视化",
    description: "学习数据可视化技术，将复杂数据转化为直观、美观的视觉作品。",
    duration: "10周课程",
    level: "intermediate",
    students: 789,
  },
  {
    id: 5,
    title: "互动装置设计基础",
    description: "学习使用传感器和微控制器，创建物理互动装置和艺术作品。",
    duration: "8周课程",
    level: "beginner",
    students: 432,
  },
  {
    id: 6,
    title: "WebGL 创意编程",
    description: "使用 WebGL 技术创建 3D 视觉效果和互动体验。",
    duration: "12周课程",
    level: "advanced",
    students: 321,
  },
];