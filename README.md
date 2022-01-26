# workStudy
## Git 提交规范约定：
Git 每次提交代码，都要写 Commit message（提交说明），否则就不允许提交。commit message 应该清晰明了，说明本次提交的目的。

每次提交，Commit message 都包括三个部分：header，body 和 footer。

 type (scope): subject
 body
 footer
其中，header 是必需的，body 和 footer 可以省略。

不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。

Header
Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。

type
用于说明 commit 的类别，只允许使用下面7个标识。
  - test: 添加测试
  - doc:  文档
  - Stu: 学习资料
  - whole：汇总提交/批量提交
  
  scope
scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

subject
subject是 commit 目的的简短描述，不超过50个字符。

其他注意事项：

以动词开头，使用第一人称现在时，比如change，而不是changed或changes

第一个字母小写

结尾不加句号（.）

Body
Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。

More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
有两个注意点:

使用第一人称现在时，比如使用change而不是changed或changes。

永远别忘了第2行是空行

应该说明代码变动的动机，以及与以前行为的对比。

Footer
Footer 部分只用于以下两种情况：

不兼容变动
如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。

关闭 Issue
如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。

Closes #234
