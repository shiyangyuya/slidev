---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shikiji
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
mdc: true
---

# 前端工程化之代码管理

## 代码管理-git进阶

 <div class="mb-10"></div>

## 代码管理-linter及Husky

---
transition: fade-out
---

# 起因

- 📝 代码冲突

  1. 不同的格式化工具prettier | Volar ｜ Vetur ?
  2. 不同的linter规则: 全局的 ｜ 项目自己的 ?

- 🛠 代码规范
  ![](https://img.scmttec.com/thematic%20pic/40/mg/977e11704361864134.png)

---
transition: fade-out
---

# 代码管理-git进阶

## 日常代码合并方式

- git merge 
  <img style="width: 300px;height:84px;" src="https://img.scmttec.com/thematic%20pic/40/mg/992661706861529300.png" />
- git rebase 
  <img style="width: 300px;height:84px;" src="https://img.scmttec.com/thematic%20pic/40/mg/621211706861566135.png" />
- git cherry-pick
  <img style="width: 300px;height:84px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7i_QYNvLk6cOiRm2gNYmo7sPbWvgRE8hzQ&usqp=CAU" />

---
transition: fade-out
---

# 代码管理-git进阶

## git hooks

### 类似于vue的生命周期，git 能在特定的重要动作发生时触发自定义脚本

<div class="py-5" />

#### 在.git/hooks文件下，保存了一些 shell 脚本
- pre-commit 钩子在键入提交信息前运行。 
- prepare-commit-msg 钩子在启动提交信息编辑器之前，默认信息被创建之后运行。
- commit-msg 钩子接收一个参数，存有当前提交信息的临时文件的路径
- post-commit 钩子在整个提交过程完成后运行
- pre-receive 处理来自客户端的推送操作时
- post-receive 挂钩在整个过程完结以后运行，可以用来更新其他系统服务或者通知用户
- 在工程化中常用的 hooks 有 commit-msg pre-commit post-receive 

---
transition: fade-out
---

# 代码管理-linter

## linter是什么？
- 代码检查工具，检查代码是否符合规范
## 前端常用的 linter 有哪些？
- eslint 检查 js 代码规范
- stylelint 检查 css 代码规范
- commitlint 检查 commit 信息规范
