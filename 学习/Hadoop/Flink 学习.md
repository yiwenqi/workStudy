## Flink 学习

目标：

- 低延时
- 高吞吐量
- 良好的容错率和高准确的结果



**Flink 的几个重要方面**

- 处理有界或无界数据流。像我们的离线数据就是一个有界数据流，它定义了开始和结尾，而我们的实时数据则是一个无界数据流，他只定义了开始而没有定义结束，因此我们的Flink 是基于 **事件驱动** 的，一旦触发事件，则一直运行，等待数据流，来一条处理一条，当我们想要进行批处理时，可以将数据看作是一段有界数据流，一段一段的数据流进行处理。

- 能够部署在任何地方。例如hadoop yarn，[Apache Mesos](https://mesos.apache.org/), and [Kubernetes](https://kubernetes.io/) ,也可以部署在单独的集群上（stand-alone cluster）

- 利用内存机制。有状态的Flink应用程序为本地状态访问进行了优化。任务状态始终保持在内存中，如果状态大小超过可用内存，则保持在高效访问的磁盘数据结构中。因此，任务通过访问本地的、通常是内存中的状态来执行所有的计算，从而产生非常低的处理延迟。Flink通过定期和异步检查本地状态指向持久存储，确保故障情况下一次性状态的一致性。

  ![](https://i.loli.net/2021/07/16/ejpxiP7Lb1AOyH3.png)

#### Flink四大组件

<img src="/Users/edz/Library/Application Support/typora-user-images/image-20210716115330585.png" alt="image-20210716115330585" style="zoom:40%;" />

