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

## 代码管理-git基础操作

 <div class="mb-10"></div>

## 代码管理-linter, prettier及Husky

---
transition: fade-out
---

# 起因

- 熟悉git相关的操作

- 📝 代码冲突

  1. 不同的格式化工具prettier | Volar ｜ Vetur ...
  2. 不同的linter规则

- 🛠 代码规范 编辑器警告及报错， git 提交信息不规范
  <img class="w-[300px] height-[84px]" src="https://img.scmttec.com/thematic%20pic/40/mg/977e11704361864134.png" />
  <img class="w-[300px] height-[84px]" src="https://img.scmttec.com/thematic%20pic/40/mg/191b91707210753729.png" />


---
transition: fade-out
---

# 代码管理-git基础操作

## 代码合并提交的三种方式

- git merge 
  <img class="w-[300px] height-[84px]" src="https://img.scmttec.com/thematic%20pic/40/mg/992661706861529300.png" />
- git rebase 
  <img class="w-[300px] height-[84px]" src="https://img.scmttec.com/thematic%20pic/40/mg/621211706861566135.png" />
- git cherry-pick
  <img class="w-[300px] height-[84px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7i_QYNvLk6cOiRm2gNYmo7sPbWvgRE8hzQ&usqp=CAU" />

---
transition: fade-out
---

# 代码管理-git基础操作

## git merge
- <div>git merge 命令用于将一个分支的更改合并到另一个分支上。它将源分支的提交<span class="text-red">创建一个新的合并提交</span>，并将其应用到目标分支上。</div>

## git rebase 

- <div>git rebase 命令用于将一个分支的更改应用到另一个分支上。它的基本工作原理是将当前分支的提交按照提交顺序<span class="text-red">逐个应用</span>到目标分支上，并在过程中修改提交的父节点指针，使得提交历史看起来线性而干净。</div>
## 使用 git rebase 的一般流程

1. 切换到目标分支（通常是要合并到的目标分支）：git checkout target_branch
2. 运行 git rebase 命令并指定源分支：git rebase source_branch
3. 这将会将源分支的提交逐个应用到目标分支之上。如果在应用过程中出现冲突，Git 会暂停 rebase 操作，让用户解决冲突后继续应用剩余的提交。完成冲突解决后，可以使用 git rebase --continue 命令继续 rebase 操作。
4. git rebase --skip 命令可以跳过当前提交，继续应用后面的提交。例如在当前无修改的提交，可以先使用 git rebase --skip 命令跳过，然后再进行下面的步骤。

---
transition: fade-out
---
# 代码管理-git基础操作

## git cherry-pick

- <div>git cherry-pick命令用于将<span class="text-red">一个或多个提交</span>从一个分支复制到另一个分支</div>

## 使用 git cherry-pick 的一般流程

1. 切换到目标分支: git checkout target_branch
2. 运行 cherry-pick 命令提取制定提交: git cherry-pick commit_id
3. 如果出现冲突，如果在应用过程中出现冲突，Git 会暂停 cherry-pick 操作，让用户解决冲突后继续应用剩余的提交: git cherry-pick --continue
3. git cherry-pick --skip 命令可以跳过当前提交，继续应用后面的提交。例如在当前无修改的提交，可以先使用 git cherry-pick --skip 命令跳过，继续进行合并操作


## 使用git cherry-pick 提取多个提交

- 复制多个提交：
  ```bash
    git cherry-pick commit_id1 commit_id2 commit_id3
  ```
- 复制一个范围内的提交: 闭区间包含commit_id1
  ```bash
    git cherry-pick commit_id1^..commit_id2 
  ```
- 复制一个范围内的提交: 半开区间不包含commit_id1
  ```bash
    git cherry-pick commit_id1..commit_id2 
  ```

---
transition: fade-out
---

# 代码管理-git基础操作

## 命令别名

- git config --global alias.ci "commit"
- git config --global alias.co "checkout"
- vim ~/.gitconfig

## 日常代码暂存

- git stash save "message"
- git stash list
- git stash apply
- <div class="text-red"> git stash pop </div>
- git stash clear 

## 代码回滚

- git reset --soft 
- <div class="text-red">git reset --hard </div>

---
transition: fade-out
---

# 代码管理-git基础操作

## git hooks

### 类似于vue的生命周期，git 能在特定的重要动作发生时触发自定义脚本

<div class="py-5" />

#### 在.git/hooks文件下，保存了一些 shell 脚本
- <span class="text-red">pre-commit</span> 钩子在键入提交信息前运行。 使用场景：代码检查， 格式化， 使用tsc 将ts转为js文件兼容老项目
- prepare-commit-msg 钩子在启动提交信息编辑器之前，默认信息被创建之后运行。
- <span class="text-red">commit-msg</span> 钩子接收一个参数，存有当前提交信息的临时文件的路径
- post-commit 钩子在整个提交过程完成后运行
- pre-receive 处理来自客户端的推送操作时
- <span class="text-red">post-receive</span> 挂钩在整个过程完结以后运行，可以用来更新其他系统服务或者通知用户
- 在工程化中常用的 hooks 有 commit-msg pre-commit post-receive 

---
transition: fade-out
---

# 代码管理-linter prettier 及 Husky

## linter是什么？

- 代码检查工具，检查代码是否符合规范

## 前端常用的 linter 有哪些？

- eslint 检查 js 代码规范
- stylelint 检查 css 代码规范
- commitlint 检查 commit 信息规范

## prettier 是什么？有什么用

- 代码格式化工具，格式化代码，让代码更优雅，更易读 

## husky
- [官方文档](https://typicode.github.io/husky/)
- git hooks made <span class="text-red">easy</span>
- <span class="text-red">Automatically lint</span> your commit messages, code, and run tests upon committing or pushing