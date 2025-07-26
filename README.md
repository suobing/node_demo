# Node.js 学习工程

这是一个用于学习和实践Node.js的示例工程，包含各种基础功能的实现代码。

推荐学习文档：https://liaoxuefeng.com/books/javascript/nodejs/install/index.html

## 工程结构

## 示例代码说明

### HTTP服务器示例
演示如何使用Node.js内置的http模块创建简单的Web服务器

### 文件系统操作示例
展示Node.js文件系统(fs)模块的基本用法，包括：
- 文件读写
- 目录操作
- 文件状态查询

## 使用方法

1. 克隆或下载本工程
2. 安装依赖：
   ```bash
   npm install
   ```
3. 运行示例代码：
   ```bash
   node <文件名>
   # 例如
   node hello.js
   ```

### 常用命令说明

- `node <文件名>`  
  运行指定的 JavaScript 文件。

- `npm install`  
  安装项目依赖包。

- `npm init`  
  初始化一个新的 Node.js 项目，生成 package.json 文件。

- `npm run <脚本名>`  
  运行 package.json 中 scripts 字段定义的脚本。

---

Node.js 代码不能在浏览器环境中执行，主要原因如下：

- Node.js 提供了如 fs、http 等服务器端专用模块，浏览器环境下不存在这些模块。
- Node.js 可访问本地文件系统、网络等敏感资源，浏览器出于安全限制无法访问。
- Node.js 主要用于后端开发，浏览器 JavaScript 主要用于前端页面交互。

因此，Node.js 代码需在 Node 环境下运行，不能直接在浏览器中执行。

**示例：**

```javascript
const fs = require('fs');
fs.readFileSync('hello.txt');
```

这段代码在 Node.js 中可以正常执行，但在浏览器中会报错，因为浏览器没有 `require` 和 `fs` 模块。

### require 与 import from 的区别

- require 属于 CommonJS 规范，是 Node.js 默认的模块导入方式，语法为：
  ```js
  const mod = require('./mod');
  ```
  - 可动态导入，适用于大多数 Node.js 项目。
  - 导出用 module.exports。

- import from 属于 ES Module（ESM）规范，语法为：
  ```js
  import { func } from './mod.js';
  ```
  - 需在 package.json 中配置 "type": "module" 或使用 .mjs 后缀。
  - 只能静态导入，导出用 export。
  - 路径需带 .js 后缀。

**主要区别：**
- require 可在任意位置调用，import 只能在文件顶部声明。
- require 支持动态导入，import 主要用于静态导入。
- require 默认支持 Node.js，import 需额外配置。
- 两者的导出/导入语法不同，不能混用。
