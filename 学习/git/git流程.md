git流程

首先我们需要明确的是，必须保证 master 主分支的绝对安全。

接下来我们讲讲 git 管理的原则

​	1、不能直接提交到 master 

​	2、开启任何分支都必须从master 分支开始

​	3、分支合并时：

​		- 首先提交自己的代码到自己的分支。

​			git add 

​			git commit 

​			git push

​		- 切回 master 分支 ，此时 master 分支会与当前分支出现冲突

​		使用以下命令。

​			git fetch --all :是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中。

​			(以下是fetch 与 pull的区别)

​			git pull = git fetch + git merge 

​			git pull 确保当前 master 分支已经达到最新状态

![image-20210713183016290](/Users/edz/Desktop/学习/images/image-20210713183016290.png)

​		- 合并当前分支(feature_cockpit) 将 master 分支 合并到当前分支

​			两种方法：

​				-使用界面化工具

 					idea中右下角的git ，右键你要合并的分支

​				-使用 git 命令

​					git checkout feature_cockpit 	切回自己的分支

​					git merge master 

​		- 当前分支合并到 test 分支

​			- 可以使用命令也可以使用界面化工具

建议：通常我们使用界面化工具这样能够更加细致的解决冲突的问题





常用git 命令：

​	git add —all

​	git commit -m”comment”

​	git push

​	

​	git pull 

​	git status



​	git branch branchName  创建分支

​	git checkout branchName 切换分支

​	git merge branchName   合并分支

​	git fetch all  把远程仓库中的代码拿到 本地的 Repository 。



​	git checkout . 将本地的 workspace 回退到Repository 中的上一个版本 ，保持工作区的干净。

 

​	

 