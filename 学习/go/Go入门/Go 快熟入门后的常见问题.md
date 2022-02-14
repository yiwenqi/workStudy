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

### interface{} 与 []interface{}

**痛点分析：**

​	`interface{}`可以赋值任何类型，而当我们想要赋任意值给`[]interface{}` 时往往会报错，（该类型不能赋值给 `[]interface{}` ）

**原因分析：**

​	`[]interface{}` 的类型不是 `interface{}`，他是一个切片，而切片的类型是 `interface{}`,这样解释可能比较绕口。换个角度，`interface{}` 占用两个字，一个字用于存放`interface{}` 的类型，另一个存放 `interface{}`的数据或指向数据的指针，**长度为 N 的`[]interface{}` 类型切片背后是 N*2 的一个长度数据**。这就与一般的 `[]Mytype([]string,[]int)` 不同，因此不能简单的将 `[]mytype` 赋值给 `[]interface{} `。

**解决方案：** 

​	如果我们必须使用 `[]interface{}` ，那么我们就必须一个一个的赋值，而不是 直接将 `[]type` 赋值给 `[]interface{}`。

```go
data := []string{"test","good","nice"}
content := make([]interface{},len(data))
for index, value := range data{
    interface[i]= value
}
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

**结构体的使用方法：**

- var  person Person
- var person Person = Person{}
- var persoon *Person = new(Person)
  - new 出来的是一个指针类型，指向创建的结构体。
- var person *Person = &Person{}

**当结构体变量为指针类型时，我们可以使用以下两种方式获取结构体值：**

- `(*person).Name`  //  不能将括号去掉，因为 `.` 的运算符比较高，去掉后`person.Name`没有问题，但是取到后还有一个 `* ` 这样就错了。
- person.Name  
  - person.Name 在go程序的底层会转换成 ---> (*person).Name

**结构体之间的赋值与转换**

- 在结构体之中只有两个结构体字段数量，类型，名称都相同才能互相转换。

- 结构体进行type重新定义（相当于取别名），Golang认为是新的数据结构类型不能相互赋值，但是可以进行强转后赋值：

```go
tyep Person struct{
    name string
    age  string
}
type Human Person

func main(){
    var p = Person{"zhangsan","18"}
    var h Human = p //这是错误的不能互相转换
    // go认为hume已经是一个新的类型了，而不是person类型。
    // 如果一定要转可以强转
    var h Human = Human(p)
}
```



**为结构体中的字段打tag**

该标签可以使用反射机制获取，主要用来序列化和反序列化。

场景：go中的结构体往往对外开发的字段都是首字母大写，而进行json序列化后依然是大写，而规范返回的json字符串都是首字母小写的。

解决方案：使用tag为字段打标签，而序列化时就会根据tag序列化。

```go
type Person struct{
    Name string `json:name`
    Age  string `json:age`
}
func main(){
    p := Person{"zhangsan","18"}
    b , _ := json.Marshal(p)
    jsonStr := string(b)
    fmt.Printf("%s\n",jsonStr)
}
```

### 方法

​		方法是与结构体绑定的，自定义struct也有方法。

**方法的调用和传参**

- func （p Person）speak(message string){ .... }

  当该方法被调用的时候，message 和 **p** 都被拷贝了一份传给方法，与被调用的**p**结构体是独立的。

- func （p *Person）speak(message string){ .... }

  当该方法被调用的时候，message 拷贝了一份传给方法，同时被调用的**p的地址**也被传入。

**方法的声明与定义：**

​	func (recever type ) funcName (参数列表) （返回列表）

​	eg:  func （p *Person）speak(message string){ .... }

**方法的注意事项和细节讨论：**

1）结构体类型是值类型，在方法调用中，遵守值类型的传递机制，是值拷贝传递方式。

2）如果希望修改结构体中的值，则可以通过传入结构体指针的方式，func （p ***** Person）speak(message string){ .... }

3）Golang的方法是作用在定义的数据类型上，而不仅仅是struct,比如int,float32

```go
tyep newInt int64
func (i newInt) add（num1，num2 int）{}
```

4）方法的访问范围的规则和函数一样，首字母大写则可以给其他包访问，首字母小写则只能在本宝内访问。

5）如果一个变量实现了 String() 这个方法则fmt.Println()默认会调用这个变量的 String() 进行输出。

### 继承

- `golang`中结构体可以使用嵌套匿名结构体所有的字段和方法，即首**字母大写或者小写**的**字段，方法**都可以使用。

- 当我们对嵌套结构体进行访问时，会先访问绑定的结构体，然后进入嵌套的结构体中访问（套娃式深入）。当有相同的字段和方法时，会采取就近原则。

- 当我们结构体中嵌入多个结构体，如果两个匿名结构体有相同的字段和方法（**同时结构体本身没有同名的字段与方法**）在访问时，就必须明确指定结构体的名字，否则会报错。
- 如果一个struct嵌套了一个又名结构体,则为组合，如果是组合关系，那么在访问组合的结构体的字段时，必须带上结构体的名字。

### 接口（interface）

`interface`类型可以定义一组方法，但是这些方法不需要实现。并且interface不能包含任何变量。

**基本语法**

type 接口名 interface{

​        method1   (参数列表) （返回列表）

​		method2  (参数列表) （返回列表）

}

**说明**：`Golang `中接口不需要显示的实现，当某个变量实现了接口中的所有方法，那么这个变量就实现了这个接口。因此`golang`中没有 `implement`

**方法的注意细节：**

- 接口本身不能创建实例，但可以指向一个实现了该接口的自定义类型的变量（实例）

```go
main(){
    var stu Stu  // Stu 实现了 Person接口
    var p Person = stu
}
```

- 接口中所有的方法都没有方法体；
- Golang中需要实现某个接口的所有方法，才能说是实现了该接口
- 只要是自定义数据类型都可以实现接口，不只是结构体
- 一个自定义数据类型可以实现多个接口
- 一个方法不能有变量
- 一个接口也可以继承其它接口，实现时需要全部实现
- **interface类型默认是一个指针类型(引用类型)，如果没有对interface进行初始化就是用，那么会输出nil。**
- **空接口interface{}没有任何方法，所以所有类型都实现了空接口 **   。**即可以把任何变量赋值给空接口 **。

```go
type T interface{}
main() {
    var stu Stu
    // 赋值给空接口
    var a T = stu 
    // 或者
    var a2 interface{} = stu
}
```

**方法注意点：**

- 接口实现只关注方法名，但是同一个接口中不能有相同的方法签名（包括继承的接口），
- 方法实现中加 `*` 与不加是有区别的：

```go
type Usb interface{
    Say()
}
type Stu struct{}
func (this *Stu) Say(){
    fmt.Print("Say hello ~")
}
main(){
    var stu Stu
    // 错误代码，因为 stu 并没有实现Say，而是 *Stu 实现了
    var u Usb = stu
    // 因此只需要把 Stu 改成 &Stu即可
    var u Usb = &stu
    u.
}
```

### 多态

变量(实例)具有多种形态。面对对象的第三大特征，在Go语言中，多态特征是通过接口实现的。可以按照统一接口来调用不同的实现，这时接口变量就展现出不同的形态。

**多态参数：**

```go
type Usb interface{...}
// 当phone和photo都实现了Usb接口时，该方法的变量 u 可以接收不同的实例
func Working(u Usb){}
```

**多态数组：**

```go
// phone 和 Camera 都实现了Usb接口
type Usb interface{...}
main () {
    var usb [3]Usb
    // Usb 接口数组可以存放实现列 Usb接口的变量 
    usb[0] = Phone{}
    usb[1] = Camera{}
}
```

### 类型断言

类型断言，由于接口是一般类型，不知道具体类型，如果要转成具体类型，就需要使用类型断言。

```go
type Sutdent struct{
    Name string
}
func main(){
    stu := Student{"zhangsan"}
    var a interface{} = stu 
    // 此时不能将 a 赋给 student 类型变量
    // var b Student = a
    // 需要使用类型断言
    var b Student = a.(Student)
    // 带判断的类型断言
    c , ok := a.(Studnet)
    if ok {
        fmt.Print("d")
    }
}
```

### 文件操作

os.File 包中封装了所有的文件操作。

**打开文件和关闭文件**

```go
// name 为文件路径，file 有时也叫文件对象，文件句柄，file指针
func Open(name string)(file *file , err error){}
func (file *file) Close() err error{}
```



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
- indirect:  间接依赖，或者没有列入到go.mod中的依赖。

如下图所示，Module A 依赖 B，但是 B 还未切换成 Module，也即没有`go.mod`文件，此时，当使用`go mod tidy`命令更新A的`go.mod`文件时，B的两个依赖B1和B2将会被添加到A的`go.mod`文件中（前提是A之前没有依赖B1和B2），并且B1 和B2还会被添加`// indirect`的注释。

![image-20220211110017799](https://raw.githubusercontent.com/yiwenqi/cloudimg/main/data/image-20220211110017799.png)
