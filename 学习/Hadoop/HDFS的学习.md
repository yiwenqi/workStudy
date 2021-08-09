## HDFS的学习：

#### hadoop简单集群配置

##### 1、集群部署规划

注意⚠️：

- NameNode 和 SecondaryNameNode 不能安装到一台服务器上
- ResourceManage 也很消耗内存，不要和NameNode、SecondaryNameNode 配置在同一台机器上。

##### 2、配置文件说明

- core-default.xml      位置：Hadoop-common-3.1.3.jar/core-default.xml
- hdfs-default.xml      位置：hadoop-hdfs-3.1.3.jar/hdfs-default.xml
- yarn-default.xml      位置：hadoop-yarm-common-3.1.3.jar/yarn-default.xml
- Mapred-default.xml 位置：hadoop-mapreduce-client-core-3.1.3.jar/mapred-default.xml

### HDFS 基础知识

****

**HDFS的优缺点：**

优点：

- 高容错性：通过增加副本从而提高容错性，当一个副本丢失后可以自动恢复
- 适合处理大数据：能够处理数据规模达到GB，TB 甚至PB级别的数据，能够处理百万规模的文件数量
- 可构建在廉价的机器上

缺点：

- 不适合低延时数据访问，比如毫秒级。
- 无法高效的对大量小文件进行存储：存储大量小文件会占用nameNode的大量内存来存储文件目录和块信息，并且小文件的寻址时间大于读取时间，这是不符合HDFS的设计原则的。
- 不支持并发写入，文件随机修改：一个文件只允许一个写，不允许多个线程同时写。
- 仅支持 数据追加，不支持文件的随机修改。



##### HDFS的组成架构

​		1）NameNode：就是一个 Master ，它管理着HDFS的名称空间，配置副本策略，管理元数据（数据块的映射信息）

​		2）DataNode：存储实际的数据块，执行读写操作。	



##### HDFS的文件块大小

​	当硬盘读写速度快时 可以设置为：256m   读写速度一般或者较差时设置为： 128m

##### HDFS的shell操作

- 基本语法

  - hadoop fs 具体命令   	或	  hdfs dfs 具体命令

    两个是完全相同的。

  - HDFS的具体命令和 Linux 十分相似

    ​	eg：-cat chgrp chmod chown mv ... 

    也有一些不同的命令：如 copyFromLocal copyToLocal get(下载) -getmerge(合并下载) 等等，详细的命令可以在使用的时候进行查阅。

- HDFS 的三大常用命令 ( 上传，下载，HDFS直接操作 )

  > ​	上传

  hadoop fs moverFromLocal  ./shuguo.txt  /sanguo      (将shuguo.txt文件移动到 /sanguo 目录中) 

  hadoop fs copyFromLocal 

  put 等同于 copyFromLocal

  appendToFile 追加一个文件到已经存在的文件末尾

  > ​	下载

  copyToLocal：从HDFS拷贝到本地；

  get 等同于 copyToLocal 

  > HDFS 直接操作	

  cat，mv，chmod 等

  

> 3、HDFS的读写流程操作