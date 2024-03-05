## rebase 
1. rebase 分支创建文件 1.md
2. merge 分支创建文件 1.md
3. branch 分支创建文件 2.md 3.md
4. 切换到 merge 分支 => 执行merge branch 操作 => 查看git 记录
5. 切换到 rebase 分支 => 执行rebase branch 操作 => 查看git 记录 

- 比较差异 rebase 操作少了一个merge commit, git 历史记录更加干净整洁

> git rebase --continue 及 -- skip

1. reset --hard 操作
2. git push --force
3. 切换到rebase 分支 创建文件 2.md
4. 执行 git rebase 处理冲突

- --continue 解决冲突，继续合并
- --skip 跳过当前冲突, 暂存区和工作区的代码都会放弃

## cherry-pick
1. branch 分支创建 1，2，3，4.md 分四次提交
2. cherry-b 分支 cherry-pick 操作 => 观察提交信息
3. 如果cherry-pick 的commit基于其他commit，会产生冲突并且需要手动解决
