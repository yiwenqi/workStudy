### GO TEST 

原则：TDD，先写测试，用最少的代码跑起来, 重构，使得代码正确的跑起来。

指令：

```
go test -cover
```

#### 内联优化解决

在`Go tool arguments `中添加：

- -gcflags=all=-l
- go test -gcflags=all=-l

#### 测试所有test文件

```bash
// 当前目录及子目录中的所有测试文件
$ go test ./...  
// 运行GOPATH中的虽有测试用例
$ go test ...
// 运行指定前缀的测试用例
$ go test foo...
```

#### go test 参数

-cover ：开启测试覆盖率

-v 显示测试的详细命令

-coverprofile 指定输出文件



###  GO SqlMock

