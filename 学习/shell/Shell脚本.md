# Shell脚本

## Shell脚本的启动

- 绝对路径
  - ./**.sh
- sh
  - sh **.sh
- source 
  - source  **.sh

**一、三种脚本启动的区别**

​	绝对路径与sh的启动方式会单独开一个进程来启动脚本，而source启动则是当前进程启动脚本。前者会造成变量传递问题。

## Shell脚本的变量

### 变量的定义

- 变量的只能由字符，数字，下划线组成，且首字符不能是数字开头。
- 不能使用bash的关键字

### 变量的类型 

- 局部变量、
  - 局部变量是在脚本中定义的变量，仅在当前shell中有效
- 环境变量
  - 外部环境定义的变量，所有程序都能获取的变量
- shell变量
  - 又shell程序设置的变量。

## Shell字符串

字符串是shell中最常用的变量。

- 单引号

  - 单引号里面的任何字符都会原样输出，无法进行转义

- 双引号

  - 双引号里面可以出现变量
  - 双引号可以转义

  ```bash
  # 声明字符串
  str1 = “hello word ！”
  str2 = “hello china ！”
  
  # 字符串拼接
  name="zhangsan"
  name1="hello,"$name" !"
  name2="hello,${name} !"
  
  #字符串长度 #
  str3 = "wangwu"
  len = ${#str}
  
  # 字符串截取
  str4 = "lisi"
  echo ${str4:1:3}
  ```

## Shell 数组

- bash支持一维数组（不支持多维数组），并且没有限定数组的大小。