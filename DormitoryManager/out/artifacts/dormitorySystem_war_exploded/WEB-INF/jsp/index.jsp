﻿<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>上业图书馆座位预约系统</title>
    <!--忽略将数字变为电话号码-->
    <meta content="telephone=no" name="format-detection">
    <!--控制显示区域各种属性-->
    <link href="/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/css/button.css" rel="stylesheet" />
    <link href="/css/public.css" rel="stylesheet" />
    <link href="/css/index.css" rel="stylesheet" />
    <link href="/css/mobiscroll.custom-2.16.0.min.css" rel="stylesheet" />
    <script src="/js/respond.src.js"></script>
    <script src="/js/index.js"></script>
    <script src="/js/jquery-1.9.1.min.js"></script>
    <script src="/js/mobiscroll.custom-2.16.0.min.js"></script>
    <script src="/js/bootstrap.js"></script>
</head>
<body>
    <img class="bg" src="/images/bg.jpg" />
    <div class="container">
        <div class="navbar row">
            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-8 logo  margin-top_30">
                <img src="/images/logo.png" />
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-4 top_rig">
                <div class="row">
                    <div id="now_time" class="col-lg-7 col-md-8 col-sm-8 col-xs-8 time" >14:54</div>
                    <div class="col-lg-5 col-md-4 col-sm-4 col-xs-4 margin-top_10">
                        <div id="now_mouth" class="date">10<b>月</b>6<b>日</b></div>
                        <div id="now_week" class="cycle">星期一</div>
                    </div>
                    <c:if test="${sessionScope.us.name != null}" var="resutl" >
                            <h4 class="col-lg-8 col-md-8 col-sm-8 welcome" style="display: block;">欢迎您：<b>${us.name}同学</b></h4>
                    </c:if>

                    <a href="/to/login" class="button button-3d button-caution col-lg-4 col-md-4 col-sm-4 col-xs-4">登录</a>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="row clearfix bgcolor" style="overflow:hidden">
                <div class="left col-lg-3  col-md-1  col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="nav-li">
                            <div class="col-llg-4  visible-llg-inline-block col-md-12 col-sm-1 col-xs-1 hidden-lg columnLeft bords">
                                <span class="glyphicon glyphicon-home"><em></em></span>
                                <h2>首页</h2>
                            </div>
                            <div class="col-llg-8 col-lg-12 visible-lg-inline-block columnRig bords">
                                <h2>首页</h2>
                                <p>HOME</p>
                            </div>
                        </div>
                        <div class="nav-li">
                            <div class="col-llg-4  visible-llg-inline-block col-md-12 col-sm-1 col-xs-1  hidden-lg columnLeft bords">
                                <span class="glyphicon glyphicon-tag"><em></em></span>
                                <h2>预约</h2>
                            </div>
                            <div class="col-llg-8 col-lg-12 visible-lg-inline-block columnRig bords">
                                <h2>预约</h2>
                                <p>RESERVATION</p>
                            </div>
                        </div>
                        <div class="nav-li">
                            <div class="col-llg-4  visible-llg-inline-block col-md-12 col-sm-1 col-xs-1 hidden-lg columnLeft bords">
                                <span class="glyphicon glyphicon-pushpin"><em></em></span>
                                <h2>签到/离开</h2>
                            </div>
                            <div class="col-llg-8 col-lg-12 visible-lg-inline-block columnRig bords">
                                <h2>签到/离开</h2>
                                <p>SIGN IN/SIGN OUT</p>
                            </div>
                        </div>
                        <div class="nav-li">
                            <div class="col-llg-4  visible-llg-inline-block  col-md-12 col-sm-1 col-xs-1 hidden-lg columnLeft bords">
                                <span class="glyphicon glyphicon-search"><em></em></span>
                                <h2>查询记录</h2>
                            </div>
                            <div class="col-llg-8 col-lg-12 visible-lg-inline-block columnRig bords">
                                <h2>查询记录</h2>
                                <p>RECORD</p>
                            </div>
                        </div>
                        <div class="visible-sm-inline-block col-sm-4 col-sm-offset-3 visible-xs-inline-block col-xs-4 col-xs-offset-3">
                            <div class="col-sm-12 col-xs-12">
                                <div class="cycle" style="float:right;">星期一</div>
                                <div class="date " style="float:right;">10<b>月</b>6<b>日</b></div>
                                <div class="time" style="float:right;">14:37</div>
                            </div>
                            <h4 class="col-sm-12 col-xs-12 welcome pull-left" style="display: block;">欢迎您：<b>校长</b></h4>
                        </div>
                        <div class="visible-sm-inline-block col-sm-1 visible-xs-inline-block col-xs-1">
                            <a href="login.jsp" class="col-sm-2 col-xs-2 button button-caution" style="width: 80%; height: 67px; line-height: 67px; margin-left: 15px; background-color: #a13e3c">登录</a>
                        </div>
                    </div>
                </div>
                <div class="right col-lg-9  col-md-11  col-sm-12 col-xs-12 padding0">
                    <div class="row right_row">
                        <!--首页-->
                        <div class="prolist" style="display: block;" id="shouye">
                            <div class="note-title col-lg-12">
                                <h2>首页</h2>
                                <h3>为了维护读者在图书馆平等利用阅览座位的权益，杜绝抢占座位等不良现象发生，采取座位管理系统来规范和维护阅览秩序。</h3>
                            </div>
                            <div class="process col-lg-12">
                                <p>
                                    <em>预约</em>
                                    <span>RESERVEATION</span>
                                </p>
                            </div>
                            <div class="home-list col-lg-12 margin-bot_20">
                                <em>预约座位</em>
                                <span class="glyphicon glyphicon-option-horizontal"></span>
                                <em>身份认证</em>
                                <span class="glyphicon glyphicon-option-horizontal"></span>
                                <em>入座/签到</em>
                                <span class="glyphicon glyphicon-option-horizontal"></span>
                                <span class="glyphicon glyphicon-ok"></span>
                            </div>
                            <div class="process col-lg-12">
                                <p>
                                    <em>签到/离开</em>
                                    <span>SIGN IN/SIGN OUT</span>
                                </p>
                            </div>
                            <div class="home-list col-lg-12 margin-bot_20">
                                <em>身份认证</em>
                                <span class="glyphicon glyphicon-option-horizontal"></span>
                                <em>暂离/离开</em>
                                <span class="glyphicon glyphicon-option-horizontal"></span>
                                <span class="glyphicon glyphicon-ok"></span>
                            </div>
                            <div class="remind col-lg-12 margin-bot_20">
                                <em>首次使用: </em>
                                <span>请通过微信</span><img src="/images/wx.png" class="wx" /><span>扫一扫关注图书馆服务号，并完成读者证号绑定</span>
                                <a href="javascript://" class="QRCode visible-lg-inline-block" title="扫一扫"><img src="/images/QRCode.gif" /></a>
                            </div>
                        </div>
                        <!--预约时间-->
                        <div class="prolist" style="display:none;">
                            <div style="display:block;" id="shijian">
                                <div class="note-title col-lg-12 clearfix">
                                    <h2 class="fleft">预约时间</h2>
                                    <span class="fleft margin-left_20 margin-top_15">
                                        <a href="javascript://" class="e">1</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">2</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">3</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">4</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <span class="glyphicon glyphicon-ok yes"></span><!--class="no"表示未成功;yes表示成功预约。-->
                                    </span>
                                    <a href="javascript://" class="next fright" id="shijian_next">下一步</a>
                                </div>
                                <div class="fclear"></div>
                                <div class="set_up col-llg-10 col-llg-offset-2 col-lg-11  col-lg-offset-1 col-md-11  col-md-offset-1 col-sm-11  col-sm-offset-1 col-xs-12 clearfix">
                                    <label class="col-llg-3 col-lg-3 col-md-3 col-sm-3 col-xs-4">快速设置：</label>
                                    <p class="col-llg-7 col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                        <a href="javacript://">1小时</a>
                                        <a href="javacript://">2小时</a>
                                        <a href="javacript://">3小时</a>
                                        <a href="javacript://">4小时</a>
                                    </p>
                                </div>
                                <div class="fclear"></div>
                                <h3 class="time_all">你已预约了 <b>5</b> 小时 <b>00</b> 分</h3>
                                <div class="col-llg-5 col-lg-5 col-md-5 col-sm-5  col-xs-5 text-center font18">
                                    选择日期
                                </div>

                                <div class="col-llg-3 col-lg-3 col-md-3 col-sm-3  col-xs-3  text-center font18">
                                    开始时间
                                </div>

                                <div class="col-llg-1 col-lg-1 col-md-1 col-sm-1  col-xs-1 ">

                                </div>
                                <div class="col-llg-3 col-lg-3 col-md-3 col-sm-3  col-xs-3  text-center  font18">
                                    结束时间
                                </div>

                                <%-- 时间表单元素 --%>
                                <input id="time" name="time" type="text" hidden="hidden">
                                <div id="date" class="col-llg-5 col-lg-5 col-md-5 col-sm-5  col-xs-5 ">
                                </div>

                                <%-- 开始时间表单元素 --%>
                                <input id="startTime" name="startTime" type="text" hidden="hidden">
                                <div id="time_s" class="col-llg-3 col-lg-3 col-md-3 col-sm-3  col-xs-3 ">
                                </div>

                                <div class="col-llg-1 col-lg-1 col-md-1 col-sm-1  col-xs-1 zhi hidden-xs">
                                    至
                                </div>
                                <%-- 结束时间表单元素 --%>
                                <input id="endTime" name="endTime" type="text" hidden="hidden">
                                <div id="time_e" class="col-llg-3 col-lg-3 col-md-3 col-sm-3  col-xs-3 ">
                                </div>
                                </form>
                            </div>
                            <!--预约地点-->
                            <div style="display:none" id="didian">
                                <div class="note-title col-lg-12 clearfix">
                                    <h2 class="fleft">预约</h2>
                                    <span class="fleft margin-left_20 margin-top_15">
                                        <a href="javascript://">1</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://" class="e">2</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">3</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">4</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <span class="glyphicon glyphicon-ok yes"></span><!--class="no"表示未成功;yes表示成功预约。-->
                                    </span>
                                    <a href="javascript://" class="next fright" id="time_next">下一步</a>
                                    <a href="javascript://" class="previou timereturn fright" style="margin-right:20px;" id="time_previou">上一步</a>
                                </div>
                                <div class="fclear"></div>
                                <div class="reservation margin-top_20 clearfix">
                                    <div class="col-llg-7 col-lg-12 col-md-12  col-sm-12  col-xs-12">
                                        <div class="input-group margin-left_10" id="show">
                                            <input type="text" aria-label="Text input with dropdown button" class="form-control  input-lg" placeholder="选择阅览区域">
                                            <div class="input-group-btn">
                                                <button aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" class="btn btn-default dropdown-toggle  input-lg" type="button"> <span class="caret"></span></button>
                                                <ul id="room" class="dropdown-menu dropdown-menu-right">
                                                    <li>南校区
                                                        <ul>
                                                            <c:forEach items="${sschools}" var="school"  varStatus="status">
                                                                    <li>${school.bname}</li>
                                                            </c:forEach>
                                                        </ul>
                                                    </li>
                                                    <li>北校区
                                                        <ul>
                                                            <c:forEach items="${nschools}" var="school"  varStatus="status">
                                                                <li>${school.bname}</li>
                                                            </c:forEach>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="itaic col-llg-5 visible-llg-inline-block hidden-lg hidden-md hidden-sm hidden-xs pull-right">
                                        <i class="red pull-right">拥挤</i>
                                        <i class="yellow pull-right">繁忙</i>
                                        <i class="green pull-right">空闲</i>
                                    </div>
                                </div>
                                <div class="reservation margin-top_20 clearfix">
                                    <input id="select_room" name="room" type="text" hidden="hidden">
                                    <c:forEach items="${rooms}" var="room" varStatus="status">
                                        <div class=" col-llg-4  col-lg-6  col-md-6  col-sm-12  col-xs-12">
                                            <div id="${room.name}" class="room bs-example margin-bot_20 " data-example-id="default-media">
                                                <div class="media">
                                                    <div class="media-body">
                                                        <h4 class="media-heading font30">${room.name}自习室</h4>
                                                        <p>剩余座位数：${room.last}个</p>
                                                        <c:if test="${room.last>(room.last/2)}" var="res">
                                                            <i class="green"></i>
                                                        </c:if>
                                                        <c:if test="${room.last<(room.last/2)}" var="result">
                                                            <i class="yellow"></i>
                                                        </c:if>
                                                        <c:if test="${room.last<(room.last/3)}" var="res">
                                                            <i class="red"></i>
                                                        </c:if>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </c:forEach>
                                </div>
                            </div>
                            <!--选座位-->
                            <div style="display:none" id="zuowei">
                                <div class="note-title col-lg-12 clearfix">
                                    <h2 class="fleft">预约</h2>
                                    <span class="fleft margin-left_20 margin-top_15">
                                        <a href="javascript://">1</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://" class="e">2</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">3</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">4</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <span class="glyphicon glyphicon-ok yes"></span><!--class="no"表示未成功;yes表示成功预约。-->
                                    </span>
                                    <a href="javascript://" class="next fright" id="zuowei_next">下一步</a>
                                    <a href="javascript://" class="previou timereturn fright" style="margin-right:20px;" id="zuowei_previou">上一步</a>
                                </div>
                                <div class="fclear"></div>
                                <p class="bujutu" data-toggle="modal"></p>
                                <div class="fclear"></div>
                                <div class="seat margin-top_70 clearfix">
                                    <div class="icon_lists">

                                        <div class="icon iconfont">&#xe600;<b>01</b></div>
                                        <div class="icon iconfont current">&#xe600;<b>02</b></div>
                                    </div>
                                </div>
                                <div style="position:fixed; left:20px; top:20px; z-index:9999999; width:1900px;">
                                    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                    <h4 class="modal-title text-center" id="myModalLabel">选择座位</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <iframe src="seat.jsp" id="myModal" style="border:none;" scrolling="no" width="100%" height="100%" frameborder="0" marginwidth="0" marginheight="0"></iframe>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                                    <button type="button" class="btn btn-danger">保存</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--预约成功-->
                            <div style="display:none;" id="chenggong">
                                <div class="note-title col-lg-12">
                                    <h2 class="fleft">预约</h2>
                                    <span class="fleft margin-left_20 margin-top_15">
                                        <a href="javascript://" class="e">1</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">2</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">3</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">4</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <span class="glyphicon glyphicon-ok yes"></span><!--class="no"表示未成功;yes表示成功预约。-->
                                    </span>
                                    <a href="javascript://" class="next fright" id="chenggong_next">下一步</a>
                                </div>
                                <div class="success_bg col-llg-7 col-lg-7 col-md-7 hidden-sm hidden-xs"><img src="/images/success_bg.png" /></div>
                                <div class="success col-llg-4 col-lg-5  col-md-5 col-sm-6 col-xs-6 col-sm-offset-3 col-xs-offset-3 col-lg-offset-0  col-md-offset-0">
                                    <h2>你已成功在在系统上预约到座位</h2>
                                    <div class="number">
                                        <span class="col-llg-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">凭证号：</span>
                                        <div class="col-llg-9 col-lg-9 col-md-9 col-sm-9  col-xs-9">201100800316（学号）</div>
                                    </div>
                                    <div class="success_time row">
                                        <p>2014年10月7日</p>
                                        <p>10:45 - 15:45</p>
                                        <p>新馆1楼C区23号座位</p>
                                        <p class="prom">（此凭证手机拍照有效）</p>
                                        <a class="col-md-5 col-lg-5 col-xs-5 col-sm-5 button button-rounded button-action " href="javascript://" id="ruzuo">入座</a>
                                        <a class="col-md-5 col-lg-5 col-xs-5 col-sm-5 button button-rounded button-caution" href="javascript://" style="margin-left:20px">取消预约</a>
                                    </div>
                                </div>
                            </div>
                            <!--登录认证，扫二维码，刷卡-->
                            <div style="display:none;" id="denglu">
                                <div class="note-title col-lg-12 clearfix">
                                    <h2 class="fleft">预约</h2>
                                    <span class="fleft margin-left_20 margin-top_15">
                                        <a href="javascript://">1</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">2</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://" class="e">3</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <a href="javascript://">4</a>
                                        <span class="glyphicon glyphicon-option-horizontal"></span>
                                        <span class="glyphicon glyphicon-ok yes"></span><!--class="no"表示未成功;yes表示成功预约。-->
                                    </span>
                                    <a href="javascript://" class="next fright">下一步</a>
                                </div>
                                <div class="fclear"></div>
                                <div class="certification">
                                    <div class="col-llg-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                        <p class="left_ico"><span class="glyphicon glyphicon-menu-left"></span>扫二维码</p>
                                    </div>
                                    <div class="col-llg-6 col-lg-6 col-md-6 col-sm-6  col-xs-6">
                                        <div class="product" style="display:block;">
                                            <h2>登录认证</h2>
                                            <div class="input-group input-group-lg margin-top_70">
                                                <span class="input-group-addon glyphicon glyphicon-user"></span>
                                                <input type="text" class="form-control" placeholder="请输入您的用户名">
                                            </div>
                                            <div class="input-group input-group-lg margin-top_20 margin-bot_10">
                                                <span class="input-group-addon glyphicon glyphicon-lock"></span>
                                                <input type="password" class="form-control" placeholder="Password">
                                            </div>
                                            <a onclick="location.href='login.jsp'" class="button button-3d button-rounded button-caution col-md-12 col-xs-12 margin-top_30">登录</a>
                                            <div class="fclear"></div>
                                            <h6>图书馆微信服务号中，扫一扫，扫描二维码完成认证</h6>
                                        </div>
                                        <div class="product" style="display:none;">
                                            <h2>刷卡认证</h2>
                                            <div class="card"><img src="/images/card.gif" /></div>
                                            <h6>通过刷卡机，刷校园一卡通完成身份认证</h6>
                                        </div>
                                        <div class="product" style="display: none;">
                                            <h2>二维码认证</h2>
                                            <div class="QRCode2"><img src="/images/QRCode2.gif" /></div>
                                            <h6>图书馆微信服务号中，扫一扫，扫描二维码完成认证</h6>
                                        </div>
                                    </div>
                                    <div class="col-llg-3 col-lg-3 col-md-3  col-sm-3 col-xs-3 text-right">
                                        <p class="right_ico">刷卡认证<span class="glyphicon glyphicon-menu-right"></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--签到/离开-->
                        <div  class="prolist" style="display:none;">
                            <div class="note-title col-lg-12">
                                <h2>签到/离开</h2>
                            </div>
                            <div class="col-llg-6 col-lg-6  col-md-6 col-sm-6 col-xs-12">
                                <div class="circle">
                                    <h1>当前:<b class="nosit">未就座</b></h1><!--暂离class=“zl”;未就座class=“nosit”;在座：“zz”-->
                                    <i>倒计时<em></em></i>
                                    <div id="example-clock-container" class="roted"><p>暂未开始</p></div>
                                </div>
                            </div>
                            <div class="success col-llg-5 col-lg-6  col-md-6 col-sm-6 col-xs-12">
                                <h2>你已成功在在系统上预约到座位</h2>
                                <div class="number">
                                    <span class="col-llg-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">凭证号：</span>
                                    <div class="col-llg-9 col-lg-9 col-md-9 col-sm-9  col-xs-9">201100800316（学号）</div>
                                </div>
                                <div class="success_time row">
                                    <p>2014年10月7日</p>
                                    <p>10:45 - 15:45</p>
                                    <p>新馆1楼C区23号座位</p>
                                    <p class="prom">（此凭证手机拍照有效）</p>
                                    <a class="col-md-5 col-lg-5 col-xs-5 col-sm-5 button button-rounded button-action" href="javascript://" style="display:none">入座</a>
                                    <a class="col-md-5 col-lg-5 col-xs-5 col-sm-5 button button-rounded button-caution pull-right" href="javascript://" style="display: none; ">取消预约</a>
                                    <a class="col-md-12 col-lg-12 col-xs-12 col-sm-12 button button-rounded button-action2 button-block margin-bot_20" href="javascript://" style="display:block">延时</a>
                                    <a class="col-md-5 col-lg-5 col-xs-5 col-sm-5 button button-rounded button-caution2" href="javascript://" style="display: block;">暂离</a>
                                    <a class="col-md-5 col-lg-5 col-xs-5 col-sm-5 button button-rounded button-caution pull-right leave" href="javascript://" style="display: block; ">离开</a>
                                </div>
                            </div>
                            <div class="fclear"></div>
                        </div>
                        <!--查询记录-->
                        <div class="prolist" style="display:none">
                            <div class="note-title col-lg-12 clearfix">
                                <p class="screening margin-top_10 clearfix">
                                    <b class="fleft glyphicon glyphicon-filter"></b>
                                    <span id="spanQueryOperType">全部</span>
                                    <input type="hidden" id="hidQueryOperType" value="0" />
                                    <ul id="historys" class="dropdown-menu dropdown-menu-right">
                                        <li>全部</li>
                                        <li>成功预约</li>
                                        <li>违规</li>
                                    </ul>
                                </p>
                            </div>
                            <div class="fclear"></div>
                            <div class="panel_all">
                                <div class="panel panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">6月28日 15:22</h3>
                                    </div>
                                    <div class="panel-body">
                                        您在终端机上预约成功~
                                    </div>
                                </div>
                                <div class="panel panel panel-success">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">6月28日 16:22成功预约</h3>
                                    </div>
                                    <div class="panel-body">
                                        您通过PC成功在6月28日 16:22~17:22预约 三鲁公路3279号2号楼四楼研发部 22号座位<br />
                                        <a onclick="location.href='index.html'" class="button button-glow button-rounded button-highlight pull-right margin-top-10" href="javascript://">取消预约</a>
                                    </div>
                                </div>
                                <div class="panel panel panel-warning">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">6月28日 17:22 违规记录</h3>
                                    </div>
                                    <div class="panel-body">
                                        我们在热带风暴
                                    </div>
                                </div>
                                <div class="panel panel panel-danger">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">进入黑名单</h3>
                                    </div>
                                    <div class="panel-body">
                                        6月28日 18:22预约超时，进黑名单
                                    </div>
                                </div>
                                <div class="panel panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">6月28日 15:22</h3>
                                    </div>
                                    <div class="panel-body">
                                        您在终端机上预约成功~
                                    </div>
                                </div>
                                <div class="panel panel panel-success">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">6月28日 16:22成功预约</h3>
                                    </div>
                                    <div class="panel-body">
                                        您通过PC成功在6月28日 16:22~17:22预约 三鲁公路3279号2号楼四楼研发部 22号座位<br />
                                        <a class="button button-glow button-rounded button-highlight pull-right margin-top-10" href="javascript://">取消预约</a>
                                    </div>
                                </div>
                                <div class="panel panel panel-warning">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">6月28日 17:22 违规记录</h3>
                                    </div>
                                    <div class="panel-body">
                                        我们在热带风暴
                                    </div>
                                </div>
                                <div class="panel panel panel-danger">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">进入黑名单</h3>
                                    </div>
                                    <div class="panel-body">
                                        6月28日 18:22预约超时，进黑名单
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fclear"></div>
            </div>
        </div>
    </div>
    <script>
        $(function () {
            $('#show').click(function () {
                $('#room').mobiscroll('show');
                return false;
            });

            $('#room').mobiscroll().treelist({
                theme: 'my-red',
                display: 'top',
                fixedWidth: [100, 100, 50],
                lang: "zh",
                mode: "scroller"
            });
            $('#spanQueryOperType').click(function () {
                $('#historys').mobiscroll('show');
                return false;
            });
            $('#historys').mobiscroll().treelist({
                theme: 'winphone-red',
                display: 'top',
                fixedWidth: [100, 100, 50],
                lang: "zh",
                mode: "mixed"
            });

            /**************预约时间插件start*******************/
            $('#date').mobiscroll().date({
                theme: 'my-red',
                lang: 'zh',
                display: 'inline',
                layout: 'liquid',
                mode: 'mixed',
                minWidth: 50,
                onSelect: function (valueText, inst) {//选择时事件（点击确定后），valueText 为选择的时间，
                    var selectedDate = valueText;
                    $("#time").val(selectedDate)
                }
            });
            $('#time_s').mobiscroll().time({
                theme: 'my-red',
                lang: 'zh',
                display: 'inline',
                layout: 'liquid',
                mode: 'mixed',
                minWidth: 50,
                onSelect: function (valueText, inst) {//选择时事件（点击确定后），valueText 为选择的时间，
                    var selectedDate = valueText;
                    $("#startTime").val(selectedDate)
                }
            });
            $('#time_e').mobiscroll().time({
                theme: 'my-red',
                lang: 'zh',
                display: 'inline',
                layout: 'liquid',
                mode: 'mixed',
                minWidth: 50,
                onSelect: function (valueText, inst) {//选择时事件（点击确定后），valueText 为选择的时间，
                    var selectedDate = valueText;
                    $("#endTime").val(selectedDate)
                }
            });
            /**************end*******************/
            $(".icon_lists span").click(function () {
                $(this).addClass("current").siblings("span").removeClass("current");
            })


            /*************布局图区域*************/
            //定义弹出层宽高度
            var modalWidth = $(window).width() * 0.8;
            var modalHeights = $(window).height() * 0.8;
            $(".modal-dialog").width(modalWidth);
            $(".modal-content").height(modalHeights);
            var mm = $(".modal-content").height();
            $(".modal-body iframe").height(mm - 160);
            $(".bujutu").click(function () {
                $('#myModal').modal("show");
                $(".modal-body iframe").contents().find("#seatArea").height(mm - 160 - 40 - 2);
                $(".modal-body iframe").contents().find("#seatArea").width(modalWidth - 50);
            })
            $(window).resize(function () {
                /*布局图区域*/
                //定义弹出层宽高度
                var modalWidth = $(window).width() * 0.8;
                var modalHeights = $(window).height() * 0.8;
                $(".modal-dialog").width(modalWidth);
                $(".modal-content").height(modalHeights);
                var mm = $(".modal-content").height();
                $(".modal-body iframe").height(mm - 160);
                $(".modal-body iframe").contents().find("#seatArea").height(mm - 160 - 40 - 2);
                $(".modal-body iframe").contents().find("#seatArea").width(modalWidth - 50);
            })
            /**************end*******************/


            /*****************走全页面（可删）*****************/
            /** 点击自习室选择 **/
            $(".room").click(function (){
                $("#select_room").val(this.id);
                id = this.id
                $(".red-bs-example").removeClass("red-bs-example")
                $(this).addClass("red-bs-example");
                $.ajax({
                    type:  "POST",
                    url:   "http://localhost:8081/find/room",
                    data:  {
                        name:id
                    },
                    success:function (data){
                        console.log(data)
                    }
                })
            })


            $(".nav-li").click(function () {
                var indexs = $(this).index();
                $(this).addClass("ee").siblings().removeClass("ee");
                $(".prolist").eq(indexs).show().siblings(".prolist").hide();
                $("#shijian_next").click(function () {
                    var time  = new Date($("#time").val().replaceAll("-", "/"));
                    var start = $("#startTime").val();
                    var end = $("#endTime").val();
                    if (time.getFullYear() < myDate.getFullYear()){
                        alert("设置年份错误！")
                        return ;
                    }
                    if(time.getMonth() < myDate.getMonth() && time.getFullYear() == myDate.getFullYear()){
                        alert("设置月份错误！")
                        return ;
                    }
                    if(time.getDate() < myDate.getDate() && time.getFullYear() == myDate.getFullYear() && time.getMonth() == myDate.getMonth() ){
                        alert("设置日期错误！")
                        return ;
                    }
                    if (CompareDateAndNow(start,end) ){
                        $("#shijian").hide();
                        $("#didian").show();
                    }else{
                        alert("起止时间设置错误！")
                    }
                })
                $("#time_previou").click(function () {
                    $("#didian").hide();
                    $("#shijian").show();
                })
                $("#time_next").click(function () {
                    $("#didian").hide();
                    $("#shijian").hide();
                    $("#zuowei").show();
                    $(".seat .icon").click(function () {
                        $(this).addClass("current").siblings(".icon").removeClass("current");
                    })
                })
                $("#zuowei_previou").click(function () {
                    $("#zuowei").hide();
                    $("#didian").show();
                })
                $("#zuowei_next").click(function () {
                    $("#zuowei").hide();
                    $("#didian").hide();
                    $("#chenggong").show();
                })
                $("#chenggong_next").click(function () {
                    $("#chenggong").hide();
                    $("#denglu").show();
                })
                $("#ruzuo").click(function () {
                    $("#chenggong").hide();
                    $("#denglu").show();
                })
                $(".button-caution2").click(function () {
                    $(".nosit").removeClass("nosit").addClass("zl");
                    $(".zl").html("暂离");
                })
                $(".leave").click(function () {
                    $(".circle b").removeClass("nosit").addClass("nosit");
                    $(".zl").html("未就坐");
                })
            })
            
        });
        function imgdragstart() { return false; }
        for (i in document.images) document.images[i].ondragstart = imgdragstart;
        /*******************************禁止body的触摸移动的默认动作********************************************/
        document.body.ontouchmove = function (e) {
            e.preventDefault();
        }
        var browser = navigator.appName;
        var b_version = navigator.appVersion;
        if (browser == "Microsoft Internet Explorer" && b_version.indexOf("MSIE 8.0") < 0) {
            alert("很抱歉,您当前浏览器版本太低，无法正常预览，请更新您的浏览器版本（为您跳转移动版本）");
            window.location.href = "http://192.168.1.62:8014";
        }
    </script>
</body>
<script>
    var myDate = new Date();
    var week;
    if(new Date().getDay()==0) week="星期日"
    if(new Date().getDay()==1) week="星期一"
    if(new Date().getDay()==2) week="星期二"
    if(new Date().getDay()==3) week="星期三"
    if(new Date().getDay()==4) week="星期四"
    if(new Date().getDay()==5) week="星期五"
    if(new Date().getDay()==6) week="星期六"
    document.getElementById("now_time").innerHTML = myDate.getHours()+":"+myDate.getMinutes()
    document.getElementById("now_mouth").innerHTML = (myDate.getMonth()+1)+"<b>月</b>"+myDate.getDate()+"<b>日</b>"
    document.getElementById("now_week").innerHTML = week

   /* $(".nav-li").click(function () {
        // 添加表单元素
        var dw_i = document.querySelectorAll(".dw-i")
        for (let i = 0; i < dw_i.length; i++) {
            if (dw_i[i].innerHTML == myDate.getFullYear()){
                dw_i[i].innerHTML = myDate.getFullYear() + '<input name="year" hidden="hidden" type="text" value="'+myDate.getFullYear()+'">'
            }
            if (dw_i[i].innerHTML == myDate.getMonth()+1){
                dw_i[i].innerHTML = myDate.getMonth()+1 + '<input name="month" hidden="hidden" type="text" value="'+(myDate.getMonth()+1)+'">'
            }
            if (dw_i[i].innerHTML == myDate.getDate()){
                dw_i[i].innerHTML = myDate.getDate() + '<input name="data" hidden="hidden" type="text" value="'+(myDate.getDate())+'">'
            }
        }
        // 添加开始时间表单
        var time_s = $("#time_s").find(dw_i)
        console.log(time_s)
    })*/
    function CompareDateAndNow(start,end) {
        var date = new Date();
        var a = start.split(":");
        var b = end.split(":");
        if(date.setHours(a[0],a[1]) < date.setHours(b[0],b[1])){
            return date.setHours(a[0],a[1]) > myDate.getHours();
        }else{
            return false;
        }
    }

</script>
</html>
