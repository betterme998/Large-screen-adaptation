# Large-screen-adaptation

大屏视频

# 1.邂逅数据可视化

.数据可视化主要借助于图形化手段，情绪有效地传达与沟通信息
.如：柱状图，折线图，饼图，玫瑰图，散点图等
.可视化使用点线面地图来对数字数据进行编码展示
.帮助用户分析和推理数据，让复杂数据更容易使用和理解

可视化解决方案 1.前端可视化技术
.底层图像引擎：Skia，OpenGL 等
.W3C 提供：CSS3，canvas，SVG,WebGL
.第三方的可视化库：ZRender，Echarts，AntV，Highcharts，D3.js，Three.js 和百度地图，高德地图等等
.低代码可视化平台：阿里云（DataV），腾讯云图，网易有数（EasyScreen），帆软等

# 2. 2D 动画

1.transform (旋转缩放，倾斜或平移给元素)
2.translate(x,y) 平移，scale(x,y)缩放,rotate(deg)旋转，skew(deg,deg)

3.坐标系
.css3 transform 属性允许你在二维或三维空间直观地变换元素。
.transform 属性会转换元素的坐标系，使元素在空间中转换.
.用 transform 属性变换的元素会受 transform-origin 属性值的影响，该属性用于指定形变的原点

4.元素的坐标系
.其原点位于元素的左上角，左上角被称为初始坐标系
.用 transform 时，坐标系的原点默认会移动到元素的中心
.因为 transform-origin 属性默认值为 50% 50%，即使原点将会作为变换元素的中心点
.用 transform 属性旋转或倾斜元素，会变换或倾斜元素的坐标，并且该元素所有后续变换都将基于新坐标系变换
.不同的顺序会导致不同的变换结果

# 3. 3D 动画

.常见的函数 transform ,会使用 CUP 硬件加速
.平移：translate3d(tx,ty.tz): translateX(tx) translateY(ty) translateZ(tz)
.缩放:scale3d(sx,sy,sz): scaleX(sx) scaleY(sy) scaleZ(sz)
.旋转:rotate3d(x,y,z,a): rotateX(x) rotateY(y) rotateZ(z)

3D 透视-perspective
(必须有三维空间才能产生透视)
.定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果（z 表示 z 轴）
.z>0 的三维元素比正常的大，而在<0 时则比正常的小，大小程度由该属性的值决定（z 值>0，z 屏面在眼睛和屏幕之间。屏幕的画面大于正常画面。z<0,z 平面在屏幕后面。屏幕画面小于正常画面）
.必须是 none length 中的一个
none：没有应用 perspective 样式
length：定义 z 大小

.透视的两种使用方式： 1.在父元素上定义 css 透视属性 2.如果它是子元素，或单元素子元素，可以使用函数 perspective()

.3D 空间- transform-style
.该属性用于设置元素的子元素是定位在 3D 空间中还是平展在元素的 2D 平面中

.值类型
.flat：指示元素的子元素位于元素本身的平面内.
.preserve-3d：指示元素的子元素应位于 3d 空间中

3D 背面可见性-backface-visibility
.指定某个元素背面朝向观测者时是否可见
值类型
.visible 背面朝向用户时可见
.hidden 背面朝向时用户不可见

# 4. 2.5D 和 3D 动画实战

# 5. 动画的优化

.浏览器渲染流程

1.解析 html，构建 DOM Tree

2.对 css 文件进行解析，解析出对应的规则树

3.DOM Tree + CSSOM 生成 Render Tree（渲染树）

4.布局（layout）：计算出每个节点的宽度，高度和位置信息
.页面元素位置，大小发送变化，往往会导致其他节点联动，需要重新计算布局，这个过程称为回流（Reflow） （）

5.绘制（Paint）：将可见的元素绘制在屏幕中。
.默认标准流是在同一层上绘制，一些特殊属性会创建新的层绘制，这些层称为渲染层。
.一些不影响布局的 css 修改也会导致渲染层重绘（Repaint），回流必然会重绘

6.Composite 合成层：一些特殊属性会创建一个新的合成层（CompositingLayer），并可以利用 GPU 来加速绘制，这是浏览器的一种优化手段。合成层确实可以提高性能，但是它以消耗内存为代价，因此不能滥用为 web 性能优化策略和过度使用.

一.创建一个新的渲染层（减少回流）
.有明确的定位属性（relative，fixed，sticky，absolute）
.透明的（opacity 小于 1）
.有 CSS transform 属性（不为 none）
.当前有对于 opacity，transform，fliter，backdrop-filter 应用动画
.backface-visibility 属性为 hidden

二.创建合成层。合成层会开始 GPU 加速页面渲染，但不能滥用
.对 opacity，transform，fliter，backropfilter 应用了 animation 或 transition（需要是 active（正在进行的） 的 animation 或者 transition ）
.有 3D transform 函数：比如：translate3d，translateZ，scale3d，rotate3d
.will-change 设置为 opacity，transform，top，left，bottom，right，比如：will-change：opacity，transform；

# 6. Canvas

1.邂逅 Canvas
.Canvas 提供了非常多的 javaScript 绘图 API（如：绘制路径，矩形，圆，文本，和图像等），集合<canvas>元素可以绘制各种 2D 图像
.Canvas 应用场景：动画，游戏画面等

canvas 优点： 1.适合像素级处理，动态渲染和大量数据的绘制：如图片编辑，热力图，炫灯尾等效果 2.适合图像密集型游戏开发，适合频繁绘制大量的图像对象 3.可以保存.png 或.jpg 格式

canvas 缺点：1.移动端如果 Canvas 使用数量过多，会使内存占用超出手机承受范围，可能导致浏览器崩溃 2.只能通过 JavaScript 脚本操作 3.Canvas 是由一个一个像素点构成图像，放大图像会模糊

使用 canvas 注意事项：1.<canvas>标签只有两个属性-width 和 height（默认单位 px）没有宽高时初始化宽高为 300px 和 150px. 2.可以通过 canvas.getContext()方法检测浏览器是否支持 Canvas

canvas grid 和 坐标空间

Canvas 绘图的矩形方法
.fillRect(x,y,width,height):绘制一个填充的矩形
.strokeRect(x,y,width,height):绘制一个矩形边框
.clearRect(x,y,width,height):清除指定矩形区域，让清除部分完全透明

认识路径

1.图形的基本元素是路径。路径是点列表，由线段连接。这些线段可以具有不同形状，弯曲或不弯曲的，连续或不连续的。

2.路径是可以由很多子路径构成，这些子路径都是在一个列表中，列表中所有子路径（线，弧形）将构成图形

3.绘制一个路径，甚至一个子路径，通常都是闭合的（会调用 closePath 来闭合）

使用路径绘制图形的步骤：

1.首先需要创建路径起始点（beginPath） 2.然后使用绘图命令去画出路径（arc,lineTo） 3.之后把路径闭合（closePath，不是必须） 4.一旦路径生成，就能通过描边（stroke）或填充路径区域（fill）来渲染图形

绘制路径用到的函数

1.beginPath():新建一条路径，生成之后，图形绘制命令被指向到新的路径上绘制，不会关联到旧的路径

2.closePath():闭合路径之后图形绘制命令又重新指向到 beginPath 之前的上下文中

3.stroke():通过线条来绘制图形描边（针对当前路径图形）

4.fill():通过填充路径的内容区域生成实心的图形 （针对当前路径图形）.

路径-绘制直线

1.移动画笔 moveTo(x,y)方法

.moveTo 方法是不能画出任何东西，但是它也是路径列表的一部分，当 canvas 初始化或者 beginPath()调用后，通常会使用 moveTo(x,y)函数设置绘画的起点，可以绘制一些不连续的路径

绘制直线 lineTo(x,y)方法，绘制一条从当前位置到指定（x，y）位置的直线

1.有两个参数（x,y）代表坐标系中直线结束的点 2.开始点和之前绘制的路径有关，之前路径结束点就是接下来的开始点 3.可以通过 moveTo(x,y)函数改变

绘制一条直线

1.调用 beginPath()来生成路径 2.调用 moveTo，lineTo 函数绘制路径 3.闭合路径 closePath（） 4.调用 stroke()函数来给直线描边

路径-绘制圆弧（Arc）.圆（Circle）

1.绘制圆弧或者圆 ，使用 arc(x,y,radius,startAngle,endAngle,anticlockwise)该方法有六个参数

x,y:圆心坐标

radius：圆弧半径

startAngle，endAngle：指定开始和结束的弧度。以 x 轴为基准（单位是弧度，不是角度）

anticlockwise:为一个布尔值，为 true，是逆时针方向，为 false，是顺时针方向，默认为 false

认识弧度

1.弧度（radian），是平面角的单位，1 单位弧度为圆弧长度等于半径时的圆心角。一个完整的圆的弧度是 Math.PI\*2,半圆弧度是 Math.PI

角度和弧度关系

1.弧度 = （Math.PI/180）\* 角度，即 1 角度 = Math.PI/180 个弧度

比如：旋转 90 度：Math.PI/2

绘制一个圆弧步骤

1.调用 beginPath()来生成路径 2.调用 arc()函数来绘制圆弧 3.闭合路径 closePath(),不是必须 4.调用 stroke(0 函数来描边，或者调用 fill()函数来填充，路径会自动闭合)

路径绘制矩形：绘制矩形的另一个方法

1.用到 rect 函数绘制，即将一个矩形路径增加到当前路径上

2.rect(x,y,width,height) :绘制一个左上角坐标为（x，y），宽高为 width，height 的矩形

3.执行该方法时，moveTo(x,y)方法自动设置坐标参数（0，0）

色彩 Colors

1.fillStyle = color ：设置图形的填充颜色，需要在 fill()函数前面调用

2.strokeStyle = color：设置图形轮廓的颜色，需要在 stroke()函数前调用

透明度

1.方式一：结合 rgba

2.globalAlpha 属性：这个属性影响到 canvas 里所有图形的透明的

线性 Line style

调用 lineTo() 函数绘制的线条，是可以通过一系列属性来设置线的样式

1.lineWidth = value:设置线条宽度. 是指定路径中心到两边据距离。

（如果以路径为中心就是 x 轴为整数）如果画 1px 像素就是两边各 0.5px。那两边像素格子会多出 0.5px 会以画笔颜色一般进行填充.所以用 canvas 画 1px 线条时，不准确

（如果以 3.5 或者 4.5 或 5.5 等 x.5 为中心）画出的 1px 为准确的线
2.lineCap = type:设置线条末端样式

3.lineJoin = type : 设置线条与线条间接合处的样式

.....

绘制文本

1.fillText(text,x,y [,maxWidth])

.在 x,y 位置，填充指定文本
.绘制最大宽度（可选）

2.strokeText(text,x,y [,maxWidth])

.在 x,y 位置，填充指定文本
.绘制最大宽度（可选）

文本的样式需要在绘制前调用

1.font = value : 当前绘制文本的样式。和 Css font 属性相同的语法。默认字体是 10px sans-serif

2.textAlign = value : 文本对齐选项。可选值：start,enf,left,right or center. 默认 start

3.textBaseline = value：基线对齐选项。可选的值包括：top,hanging,middle,alphabetic,ideographic,bottom

# 6.2.Canvas 绘制图像

绘制图片

.绘制图片，可以使用 drawlmage 方法将它渲染到 canvas 里，drawlmage 方法有三种形态

1.drawImage(image,x,y)
.其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标

2.drawImage(image,x,y,width,height)
.多出的宽高控制画入 canvas 时，应该缩小的大小

3.drawImage(image,sx,sy,sWidth,sHeight,dx,dy,dWidth,dHeight)
.前四个和上面一样，后四个定义裁剪的目标显示位置和大小

图片来源，canvas 的 api 可以使用下面这些类型中的一种作为图片的源：

1.HTMLlmageElement:这些图片是由 image()函数构造出来的，或任何<img>元素

2.HTMLVideoElement：用一个 HTML 的<video>元素作为你的图片源，可以从视频中抓取当前帧作为一个图像

# 6.4.Canvas 状态和形变

1.Canvas 绘画状态
.--是当前绘画时所产生的样式和变形的一个快照
.--Canvas 在绘画时，会产生相应的绘画状态，其实我们是可以将某些绘画的状态存储在栈中来为以后复用
.--Canvas 绘画状态的可以调用 save 和 restore 方法是用来保存和恢复，这个两个方法没有参数，并且是成对存在的

.保存和恢复 canvas 绘画状态
.--save():保存画布的所有绘画状态
.--restore():恢复画布 canvas 的所有绘画状态

.canvas 绘画状态包括
.--当前应用的变形（即移动，旋转-缩放）
.--以及这些属性：strokeStyle,fillStyle,globalAlpha,lineWidth,lineCap,lineJoin,miterLimit,shadowOffsetX,shadowOffsetY,shadowBlur,shadouwColor,font,textASlign,textBaseline.....
.--当前的裁剪路径（clipping path）

2.变形 Transform
.--可以将坐标原点移动到另一点，形变可以对网格进行旋转和缩放
.--canvas 的形变有 4 种方法实现
.----translate(x,y):用来移动 canvas 和它的原点到一个不同的位置
.----rotate(angle):用于以原点为中心旋转 canvas，即 z 轴旋转（angle 是旋转的弧度，是顺时针方向，以弧度为单位）
.----scale(x,y):用来增减图形在 canvas 中像素数目，对图形进行缩小或放大
.----transform(a,b,c,d,e,f):允许对变形矩形直接修改，这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵

注意：在做变形之前调用 save 方法保存状态是一个好习惯
.调用 restore 方法比手动恢复原先的状态要简单的多
.形变需要在绘制图形前调用

# 5.Canvas 动画和案例

1.对画布上所有图形进行一帧一帧的重绘（比如 1 秒绘 60 帧，就可以绘出流畅的动画）
.canvas 三种方法可以实现（定时执行重绘）
.--setInterval
.--setTimeout
.--requestAnimationFrame

2.Canvas 画出一帧动画的基本步骤（如果画出流程动画，1s 需绘 60 帧）
.--第一步：用 clearRect 方法清空 canvas。除非接下来绘制内容会填满 canvas，否则需要清空所有
.--第二步：保存 canvas 状态，如果加了 canvas 的状态（如样式，变形之类）又想在每一帧时都是原始状态的话，需要先保存一下 canvas 状态，后面再恢复原始状态

绘制秒针动画，绘制一帧的步骤：

.第一步：用 clearRect(x,y,w,h)方法，先清空 canvas
.第二步：保存 canvas 状态
.第三步：修改 canvas 状态（样式，移动坐标，旋转等）
.第四步：绘制表针图形（即绘制动画中的一帧）
.第五步：恢复 canvas 状态，准备绘制下一帧

//setInterval 定时器的缺陷
// 1.setInterval 定时器不是非常精准的，因为 setTimeout 的回调函数是放到宏任务中等待执行。
// .如果微任务中一直未处理完的任务，那么 setTimeout 的回调函数就可能不会在指定时间内触发回调

绘制秒针-requestAnimationFrame
.requestAnimationFrame 函数 （一秒钟回调 60 次左右）
.--告诉浏览器————你希望执行一个动画，并且要求浏览器在下次重绘之前调用该函数的回调函数来更新动画
.需要传入一个回调函数作为参数，改回调函数会在浏览器下一次重绘之前执行
.若想在浏览器下次重绘之前继续更新下一帧动画，那么在回调函数自身内必须再次调用 requestAnimationFrame（）

# 7 SVG

1.邂逅 SVG 和初体验
.什么是 SVG？
————SVG 全称（Scalable Vector Graphics），即可缩放矢量图形
————SVG 是一种基于 XML 格式的矢量图，主要用于定义二维图形，支持交互和动画
.在编写 XML 文档时，通常推荐按编写 XML 声明：

——SVG 的 XML 声明格式：<?xml version="1.0" encoding="UTF-8" standalone="no"?>
.version 指定版本（必填）
.encoding 指定 XML 文档编码（可选，默认 UTF-8）
.standalone 指定当前 XML 文档是否依赖于外部标记声明（可选，使用该属性时，需和 DTD 声明一起用才有意义）

——SVG 的文档类型声明（DTD），让解析器验证 XML 文件是否符合该规范，与 HTML5 文件的 DTD 声明类似

.如何绘制一个 SVG 矢量图
——1.在单独的 svg 文件中绘制，svg 文件可直接在浏览器预览或嵌入 html 中使用（推荐）
——2.直接在 html 文件中使用 svg 元素来绘制（推荐）
——3.使用 AI（adobe lllustractor）矢量绘图工具来绘制矢量图，并导出为 svg 文件（推荐）
——4.直接使用 javasvript 代码生成 svg 矢量图（创建的元素都需要添加命名空间的）

2.网格和坐标系

3.绘制形状和路径

4.绘制文字和图片

5.绘制文字和图片

6.SVG 分组和复用

7.填充和边框
