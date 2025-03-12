import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">关于创意编程</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">联系我们</Link></li>
              <li><Link to="/join-us" className="text-muted-foreground hover:text-foreground">加入我们</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">学习资源</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-muted-foreground hover:text-foreground">课程目录</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">项目案例</Link></li>
              <li><Link to="/tutorials" className="text-muted-foreground hover:text-foreground">教程文档</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">社区</h3>
            <ul className="space-y-2">
              <li><Link to="/community" className="text-muted-foreground hover:text-foreground">学习社区</Link></li>
              <li><Link to="/showcase" className="text-muted-foreground hover:text-foreground">作品展示</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-foreground">活动日历</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">关注我们</h3>
            <p className="text-muted-foreground mb-4">
              获取最新的创意编程资讯和教程更新
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">微信</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">微博</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">知乎</a>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© 2024 创意编程. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}