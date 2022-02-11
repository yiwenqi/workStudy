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

SqlMock用于进行数据库相关函数的替换，官网https://github.com/DATA-DOG/go-sqlmock中有大量例子可以参考。

sqlmock 是一个实现了sql/driver的mock库。他只有一个目的就是用于模拟任何sql驱动行为再测试环境中，且不需要任何真是数据库的连接。

- 这个库越来越完整且稳定
- 支持并发和多连接
- 支持go1.8的特性
- 不需要修改任何源代码
- 允许替换任何sql驱动方法
- 有严格的期望顺序匹配
- 没有第三方依赖

**Install** 

```bash
go get github.com/DATA-DOG/go-sqlmock
```

**note**

- `SqlMock` 中的 `expectedSQL` 有着一定的规则，不需要写出完整的`SQL`语句。只需要写到表即可。

```go
// select
mock.ExpectPrepare("SELECT (.+) FROM `saas_main_dispatch_table`")
// updata
mock.ExpectExec("UPDATE products").WillReturnResult(sqlmock.NewResult(1, 1))
// insert
mock.ExpectExec("INSERT INTO product_viewers").WithArgs(2, 3).WillReturnResult(sqlmock.NewResult(1, 1))
```





