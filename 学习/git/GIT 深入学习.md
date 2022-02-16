## GIT 深入学习

### Git 基础

#### **Git突然需要密码**

git remote -v 查看一下是否为https协议如果是则改成ssh协议，

 git remote set-url origin git@github.com/xxxx

#### **文件的三种状态**

Git 中只有三种状态：已提交，已修改，和已暂存。已提交表示该文件已经被安全的保存在本地数据库中了；以修改表示修改了某个文件，但还没提交保存，已占村表示把已修改的文件放在下次提交时要保存的清单中；

由此我们可以看到`git` 管理项目时，文件流转的三个工作区域：Git 的工作目录，暂存空间，本地仓库。

![](https://raw.githubusercontent.com/yiwenqi/cloudimg/main/data/image-20220126101035172.png)

#### 取得项目的Git仓库

获取`Git`项目的方式有两种，一个是`git clone` 直接克隆一个`git`仓库，二是导入所有文件来创建新的`Git` 仓库。

创建新的Git 仓库：

- 对现有某个项目使用 `git init`

- ```
  $ git add *.c
  $ git add README
  $ git commit -m 'initial project version'
  ```

从现有仓库之中克隆：

- git clone  <uri>  [rename]    // rename 可以对仓库重新命名

####   记录每次更新到仓库

工作目录下文件只有两种状态：

- 被跟踪
- 未被跟踪

已跟踪的文件是指已经被纳入版本控制管理器的文件，而其它文件则属于未被跟踪的文件，这些文件的修改都不会被`Git`监控。

![image-20220126101133726](https://raw.githubusercontent.com/yiwenqi/cloudimg/main/data/image-2022012610113372.png)

#### **检查当前文件状态**

要确定当前文件处于什么状态，可以使用 `git status ` 命令。如果在克隆仓库之后立即执行这条命令会有类似输出：

```bash
$ git status 
 	# On branch master
    nothing to commit (working directory clean)
```

当我们创建一个新的文件时，保存退出，重新执行 `git status ` ，新建文件会出现在未跟踪文件当中；

```bash
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        "README.md"

nothing added to commit but untracked files present (use "git add" to track)

```

#### **跟踪新文件**

将文件添加到 `git` 版本管理当中，只需要使用 `git add filename`

```bash
$ git add README(文件名)
```

#### **忽略某些文件**

一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件模式。

#### **查看已暂存和未暂存的更新**

实际上我们使用 `git status` 即可查看我们修改了那些文件，但是显示的比较粗略。如果想要查看具体修改了那些地方，可以使用`git diff`。

```bash
$ git diff
    diff --git a/benchmarks.rb b/benchmarks.rb
    index 3cb747f..da65585 100644
    --- a/benchmarks.rb
    +++ b/benchmarks.rb
    @@ -36,6 +36,10 @@ def main
    @commit.parents[0].parents[0].parents[0]
    end

    + run_code(x, 'commits 1') do
    + git.commits.size
    + end
    +
    run_code(x, 'commits 2') do
    log = git.commits('master', 15)
    log.size
```

此命令是比较工作之中当前文件和暂存区域快照之间的差异，也就是修改之后还没有使用 `git add ` 将其添加到暂存区域的变化内容。

#### 查看暂存起来的文件和上次提交时的快照之间的差异

使用 `git diff --cached`命令。

#### 提交更新

```bash
$ git commit
$ git commit -m "注释"
$ git commit --amend
```

#### 移除文件

要从`Git` 中移除某个文件，也就是从跟踪文件列表中清除，可以使用 `git rm filename`

当我们手工删除某个文件时，他依然在`git` 跟踪列表中。

文件从跟踪清单中移除，但保留在工作目录。使用 `git rm --cached filename` (可以使用glob模式)

#### 查看提交历史

`git log `

参数：

- -p : 显示每次提交的内容差异，
- -num: num为正整数，表示要展示的log数量
- --stat：统计增改的行

#### 撤消操作

**修改最后一次提交**

```bash
$ git commit --amend
$ git push -f
```

如果刚刚提交完没有任何动作，那么运行此命令，相当于有机会重新编辑提交说明，但要提交时的快照一样。

如果是忘记提交某些修改了，则可以补上暂存操作 （`git add`）然后允许此命令，即可补上。

#### 多次修改后合并commit

```bash
// 首先我们使用 reset 将指针指向第一次修改
git reset commit_id
// 查看状态
git stauts
// 加入暂存空间
git add xxx
// 加入本地仓库
git commit --amend
// 强推
git push -f
```



#### 将已经 `push`的文件从git远程库之中删除

已经推送（push）过的文件，想从git远程库中删除，并在以后的提交中忽略，但是却还想在本地保留这个文件

```bash
git rm --cached Xml/config.xml
```



#### 取消已经暂存的文件

当我们使用 `git add ` 将文件暂存起来后，想要取消该此暂存。只需要使用 `git reset HEAD filename` 即可；



### 本地仓库

### 暂存本地修改（Stashing）

场景：经常有这样的事情发生，当你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作。问题是，你不想提交进行了一半的工作，否则以后你无法回到这个工作点。解决这个问题的办法就是`git stash`命令。

- “‘储藏”“可以获取你工作目录的中间状态——也就是你修改过的被追踪的文件和暂存的变更——并将它保存到一个未完结变更的堆栈中，随时可以重新应用。

我们可以使用 git status 查看我们栈（Stashing）中的状态：

```bash
$ git status 
 # On branch master
    # Changes to be committed:
    # (use "git reset HEAD <file>..." to unstage)
    #
    # modified: index.html
    #
    # Changes not staged for commit:
    # (use "git add <file>..." to update what will be committed)
    #
    # modified: lib/simplegit.rb
    #
```

查看

### 远程仓库

#### 查看当前的远程仓库

```bash
$ git remote
```

参数：

- -v 显示对应的克隆地址

#### 添加远程仓库

```bash
$ git remote add  [GoS,别名]  <url>
```

备注：创建本地分支`push`到远程分支

```bash
$ git init 
$ git remote add <远程库别名> <url>
$ git branch branch_name   // 这一步是必须的，否则会 unable to access
$ git add .
$ git commit -m ""
$ git push <远程库别名> main
```



#### 从远程仓库抓取数据

```bash
$ git fetch [remote-name]
```



#### 推送数据到远程仓库

```bash
git push origin master
```

此命令会到远程仓库中拉取所有你本地仓库中还没有的数据。当我们有多个分支时，该命令会将其他分支的数据也获取到本地，并创建分支。



#### 查看远程仓库信息

```bash
git remote show [remote-name]
```



#### 远程仓库的删除和重命名

```bash
$git remote rename pb paul
$git remote rm paul
```



#### 从远程仓库同步代码到本地。



#### 打标签

```bash
$git tag  //列出已有标签
$git tag -l 'v.4.2.*' //列出v.4.2.*
$git tag -a 'V1.2' //打标签v1.2
```

参数:

- -m 注释
- -a 打标签

### 分支管理

#### 查看分支

```bash
$ git branch 
```

#### 新建分支

```bash
$ git branch name
```

#### 切换分支

```bash
$ git checkout name
```

*若不存在，则创建一个分支

#### 切换分支相互影响

如果我们在A分支上做了修改，然后切换成B分支，此时B分支也会出现A分支上的修改。

原因：如果A分支上做的修改没有提交就切换到其他分支，此时在其他分支上也能看到A分支上的修改。

解决方法：

1、用 `git add` 和 `git commit`提交修改。只需要`git status ` 检查工作区和暂缓区是干净的就行。

2、如果我们分支上的工作没有做完，不想提交，这个时候我们可以使用`git stash `将工作区压入`stash`栈。

- 恢复工作区
  - 

```bash
$ 
```





#### 删除分支

```bash
git branch -d name
```



#### 分支合并

背景: 从`master`中克隆一个分支，并在上面开发，现在我需要将`dev`开发分支合并到`master`。

```bash
$ git checkout master   // 首先切回master上
$ git merge dev
```

- 当发生冲突时，Git会做合并，但不会提交，而是等我们解决完冲突。

```bash
$ git status //查看那些文件发生了冲突
    <div id="footer">
    please contact us at support@github.com
    </div>
# 解决完上述冲突
重新git status查看
```

#### 删除远程分支

```bash
$ git push [远程名]  :[远程分支]
```

#### 将本地分支与远程分支绑定 

```bash
 $ git push --set-upstream <远程仓库别名> <分支名>
 $ git push --set-upstream origin dev/unittest
```

#### Git提测

当有需要测试的代码，那么我们需要新建一个测试分支，将我们的代码合并到测试分支。

```git
// 切换到测试分支
$ git checkout test/module
// 拉去最新代码
$ git status
$ git pull
// 切回dev/module
$ git checkout dev/module
// 合并test/module
$ git merge test/module
// 在网页上再提交合并申请
```

