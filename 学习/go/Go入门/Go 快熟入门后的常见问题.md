## Go 快速入门后的常见问题

推荐系统学习Golang，一个扎实的基础能够让你工作的更加顺利。

### x.(type)

指出x的指向类型

```go
x := interface{}
y = 10.0
x = y
t := x.(type)
// 结果 t = float6
```

### init 函数

当`Go` 之中包含大量全局变量定义时的执行流程为：全局变量定义--> `init`函数-->`main` 函数 	

### defer 的注意事项

- defer 语句会压入一个独立的栈中，当函数执行完毕后按后入先出的顺序执行。

### 匿名函数

使用方式:

- 定义后直接使用
- 将定义的函数赋值给变量（可以反复使用）

### 函数参数的传递方式

值类型和引用类型

- 值类型：基本数据类型，数组类型，结构体类型
- 引用类型：指针，切片，map，chan，interface都是引用类型

### 内置函数

#### new

使用方法 `new（int）`,相当于分配一个`int`类型的内存，num为一个指针类型，他的值为一个地址，new 会为这个地址赋默认的值（`int`为0）

```go
num := new(int)
```

#### make

用于分配内存空间，主要是用来分配引用类型，比如chan，map，interface

### Go的错误机制

在Go中我们引入，`defer`，`panic`，`recover` 处理异常。

异常的使用场景可以简单的描述为：抛出`panic`异常，在`defer`中使用`recover`捕获这个异常

```go
func test() {
    defer func() {
        if err := recover(); err != nill{
            fmt.Print(err)
        }
    }()
    num1 = 10 
    num2 = 0
    result = num1 / num2
    fmt.Print("test 函数")
}
func main(){
    test()
    fmt.Print("main 函数")
}
```

### 自定义错误

使用`errors,New("xxx")`，自定义错误，我们可以使用`panic(error)`来终止程序。

```go
func test（num int）error{
    if num == 0 {
        return errors.New("num equ zero")
    }
}

func main(){
    err := test(0)
    if err != nil {
        panic(err)
    } 
    fmt.Print(“main 函数，程序执行不到这里”)
}
```

### 切片

**场景**：当数组大小不确定时，使用切片

- 切片是数组的一个引用，因此切片是一个引用类型
- 切片长度可以变化
- 切片定义： var a []类型

**切片容量机制：**

- 当需要的容量超过原切片容量的两倍时，会使用需要的容量作为新容量。
- 当原切片长度小于1024时，新切片的容量会直接翻倍。而当原切片的容量大于等于1024时，会反复地增加25%，直到新容量超过所需要的容量。

结论：GoLang中的切片扩容机制，与切片的数据类型、原本切片的容量、所需要的容量都有关系，比较复杂。对于常见数据类型，在元素数量较少时，大致可以认为扩容是按照翻倍进行的。但具体情况需要具体分析。

**切片内存：**

一个切片的内存中并不只是保存了一个地址引用，还有长度与容量，也就是说，切片当中除了有几个字节的地址，还由，长度与容量组成。slice从底层来说就是一个结构体。

### 切片的使用方式

方式1：

- var slice []int = arr[1:3]

方式2：

- var slice []int = make([]int,4,10)

二者区别：

- 第一种是直接引用数组，`slice` 中的地址值直接指向数组当中slice的第一个元素的地址，而后续长度，就直接从第一个往后即可
- 第二种则是由切片底层维护一个数组，程序员不可见

### 切片的追加

切片追加使用 `append` ，对`slice` 进行动态添加，追加后的原数组没有改变，而是讲原数组的元素进行克隆后赋值给一个新数组，进行新元素的追加，因此需要用一个变量来接收这个新数组。

```go
// 使用 append 进行追加
var slice3 []int = []int{1,2,3,4}
// 追加多个
slice3 = append(slice3,100,200,300)
// 追加一个切片
slice3 = append(slice3,slice3...)
```

**切片拷贝**：

将切片a，拷贝给b。注意：cpy只能进行切片拷贝，也就是说a,b必须都是切片。

当 `a` 中的元数个数比`b`的长度大，则只会拷贝 len(b) 个a中的元数。

```go
copy(b,a)
```

### string和slice

`string` 底层是 `byte` 数组,因此`string`也可进行切片处理

```go
func main(){
    str := "helloWorld"
	// 切片处理
    slice := str[6:]   // "World"
    fmt.Print(slice)
}
```

### map

简介：map是一个引用类型。一个函数一旦接受一个map，修改后原来的map也会改变。

`map` 的key不能用 slice，map和function作为key，因为go中无法用 == 判断其是否相等。

`map`声明过后不会分配内存空间，必须使用`make`进行内存分配。

**map删除**

- delet(map,key)

### 结构体

**结构体是值类型，并不是引用类型**

结构体在内存中的布局：
![image-20220208225841548](https://raw.githubusercontent.com/yiwenqi/cloudimg/main/data/image-20220208225841548.png)

两个结构体之间的转换必须字段的个数，名称，类型一致。

- 结构体的所有字段在内存中连续的。

注意事项：

- 结构体中的指针，切片，map都是引用类型，需要先make，分配空间才可以使用。
- 不同结构体中的变量互不影响，他们之间是独立的。

结构体的使用方法：

- var  person Person
- var person Person = Person{}
- var persoon *Person = new(Person)
  - new 出来的是一个指针类型，指向创建的结构体。
- var person *Person = &Person{}

当结构体变量为指针类型时，我们可以使用以下两种方式获取结构体值：

- `(*person).Name`  //  不能将括号去掉，因为 `.` 的运算符比较高，去掉后`person.Name`没有问题，但是取到后还有一个 `* ` 这样就错了。
- person.Name  
  - person.Name 在go程序的底层会转换成 ---> (*person).Name

## GO体系学习

#### GOPATH

GOPATH，用于指向工作目录。如果我们使用环境变量来切换我们的工作目录会异常麻烦，且容易误操作。在IDE集成工具中我们可以在设置中设置项目的GOPATH。

多项目中使用GOPATH：

![image-20220211101316045](https://raw.githubusercontent.com/yiwenqi/cloudimg/main/data/image-20220211101316045.png)

GOPATH在不同平台上的安装路径

| 平  台       | GOPATH 默认值    | 举 例              |
| ------------ | ---------------- | ------------------ |
| Windows 平台 | %USERPROFILE%/go | C:\Users\用户名\go |
| Unix 平台    | $HOME/go         | /home/用户名/go    |

**GOPATH的工程结构**

在 GOPATH 指定的工作目录下，代码总是会保存在 $GOPATH/src 目录下。在工程经过 go build、go install 或 go get 等指令后，会将产生的二进制可执行文件放在 $GOPATH/bin 目录下，生成的中间缓存文件会被保存在 $GOPATH/pkg 下。

| 目录        | 说明                                                         |      |
| ----------- | ------------------------------------------------------------ | ---- |
| $GOPATH/src | 代码一般保存在这个目录下面                                   |      |
| $GOPATH/bin | 在工程经过 go build、go install 或 go get 等指令后产生的二进制可执行文件 |      |
| $GOPATH/pkg | 中间缓存文件                                                 |      |

#### GOMOD

GOMOD 在v1.11版本中正式推出。在1.11时env多了一个环境变量： `GO111MODULE` ,`GO111MODULE` 是一个开关，通过它可以开启或关闭 go mod 模式。他有三个可选值：`off`、`on`、`auto`，默认值是`auto`。

1. `GO111MODULE=off`禁用模块支持，编译时会从`GOPATH`和`vendor`文件夹中查找包。
2. `GO111MODULE=on`启用模块支持，编译时会忽略`GOPATH`和`vendor`文件夹，只根据 `go.mod`下载依赖。
3. `GO111MODULE=auto`，当项目在`$GOPATH/src`外且项目根目录有`go.mod`文件时，自动开启模块支持。

go.mod文件：

- 第一行：模块的引用路径
- 第二行：项目使用的 go 版本
- 第三行：项目所需的直接依赖包及其版本

```go
module github.com/BingmingWong/module-test

go 1.14

require (
    example.com/apple v0.1.2
    example.com/banana v1.2.3
    example.com/banana/v2 v2.3.4
    example.com/pear // indirect
    example.com/strawberry // incompatible
)

exclude example.com/banana v1.2.4
replace（
    golang.org/x/crypto v0.0.0-20180820150726-614d502a4dac => github.com/golang/crypto v0.0.0-20180820150726-614d502a4dac
    golang.org/x/net v0.0.0-20180821023952-922f4815f713 => github.com/golang/net v0.0.0-20180826012351-8a410e7b638d
    golang.org/x/text v0.3.0 => github.com/golang/text v0.3.0
)
```

主要是多出了两个 flag：

- `exclude`： 忽略指定版本的依赖包
- `replace`：由于在国内访问golang.org/x的各个包都需要f.q，你可以在go.mod中使用replace替换成github上对应的库。
