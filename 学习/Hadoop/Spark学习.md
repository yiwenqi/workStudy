## Spark学习

#### spark概述

​	概述：是一种基于内存的快速，通用，可扩展的大数据分析计算引擎。

​	spark使用最先进的DAG调度器，查询优化器和物理执行引擎，实现了批处理和流式计算的高性能。

​			file --> mapper --> data01 data02 data03 -->reduce -->输出file

​	MapReduce 不适合迭代式数据开发。mapReduce 首先从磁盘之中读取数据，将数据分为多个数据块，之后通过 reduce 处理后进行磁盘输出，如果前一个输出的结果要作为另一个任务的输入，那么就会出现多个磁盘的读写，此时是非常消耗内存的。**而spark 将reduce 输出到磁盘的步骤变为输出到内存。**



​	**Spark和Hadoop的根本差异是**：多个作业之间的数据通信问题，spark多个数据之间的通信是基于内存，而hadoop的数据通行是基于磁盘进行。

​	因此在绝大多数的情况下spark 的性能是高于 mapReduce的，但是由于内存的限制，spark可能会因为内存不足而导致job失败，此时mapReduce 就是一个更好的选择，所以spark无法完全的替代Hadoop的mapReduce框架。



#### spark核心模块

<img src="https://i.loli.net/2021/07/14/Bp1qazv2AOujYod.png" style="zoom:50%;" />

> ​	Spark Core (上图最下层的模块)

​		Spark Core 中提供了 Spark 最基础最核心的功能，Spark的其他功能，如spark Sql ，Spark Streaming ，Spark MLib(机器学习)，GraphX(图形化数据挖掘)都是基于Spark Core进行扩展的。

> ​	Spark SQL

Spark Sql 是用来操作结构化数据的组件。通过Spark SQL ，用户可以使用SQL或者 Apache hive 版本的SQL方言（HSQL）来查询数据

> ​	Spark GraphX

Spark GraphX是面向图计算提供的框架与算法库



#### spark 的运行环境

​	spark 作为一个 **数据处理框架和计算引擎**，被设计在大数据集群的环境上，国内主流的主要是 yarn。spark 需要 yarn 给他分配资源他才能计算