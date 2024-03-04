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

.html 引入 SVG
.1.img 元素
.2.css 背景
.3.直接在 html 文件引用源文件
.4.object 元素（了解）
.5.iframe 元素（了解）
.6.enbed 元素（了解）

2.网格和坐标系
.<svg>的 transform 属性可以用来移动，旋转，缩放 svg 中某个元素，如<svg>中某个元素用了形变，该元素内部会创建一个新的坐标系统，该元素默认后续所有变化都是基于新创建的坐标系统

.视口
..视口就是 SVG 可见区域
..一旦设置了最外层 SVG 元素的宽度和高度，浏览器就会建立初始 ‘视口坐标系’ 和初始 ‘用户坐标系’

视口坐标系
.-视口坐标系是在视口上建立的坐标系，原点在视口左上角的点（0，0）x 轴正向向右，y 轴正向下

用户坐标系
.也称为当前坐标系正在使用的用户空间
.用户坐标系是建立在 SVG 视口上的坐标系，该坐标系最初与视口坐标系相同——它的原点位于视口的左上角
.使用 viewBox 属性，可以修改初始用户坐标系，使其不再与视口坐标系相同

为什么需要两个坐标系？
.因为 SVG 是矢量图，支持任意缩放，在用户坐标系统绘制的图形，最终会参照视口坐标系来进行等比例缩放

视图框-viewBox
.视图框（viewBox）是用来定义用户坐标系中的位置和尺寸（该区域通常就被缩放填充视口）
.如果用户坐标和视口坐标具有相同的高宽比，它将 viewBox 区域拉伸以填充视口区域

viewBox 语法
.viewBox = <min-x> <min-y> <width> <height> 比如：viewBox = "0 0 100 100"
.<min-x> <min-y> 确定视图框的左上角坐标
.<width> <height> 确定该视图框的宽度和高度

3.绘制形状和路径

4.绘制文字和图片

5.绘制文字和图片

6.SVG 分组和复用

元素的组合
.<g>元素是用来组合元素的容器
.添加到 g 元素上的变换会应用到其所有的子元素上
.添加到 g 元素的属性大部分会被其所有的子元素继承
.g 元素也可以用来定义复杂的对象，之后通过<use>元素来引用它们

<g>元素的属性（该元素只包含全局属性）
.核心属性：id
.样式属性：class，style
.Presentation Attributes （也可说是 CSS 属性，这些属性可以写在 CSS 中，也可作为元素的属性用）
.--display，fill 等可以百度有很多

.事件属性：onchange,onclick,ondblclick,ondrag...
.动画属性：transform
.其他属性百度

元素的复用（defs）
.吧可复用的元素定义在<defs>元素里面，然后通过<use>元素来引用和显示

<defs>元素，定义可复用元素
.如：基本图形，组合图形，渐变，滤镜，样式等等
.在<defs>的图形元素不会直接显示出来

引入元素（use）
<use>元素从 SVG 文档中获取节点，并将获取到的节点复制到指定的地方.
.<use>等同于深克隆 DOM 树节点，克隆到 use 元素所在的位置
.克隆的节点是不可见的，当给<use>元素应用 CSS 样式时须小心.因为克隆的 DOM 不能保证都会继承<use>元素上的 CSS 属性，但 CSS 可继承的属性会继承

<use>元素的属性
.href:需要复制元素/片段的 url 或 id（支持跨 SVG 引用）
.x/y:元素 x/y 坐标（相对 复制元素 的位置）

图形元素复用（symbol）
. <symbol> 元素和<defs>元素类似

<symbol>元素的属性
.viewBox：定义当前<symbol>的视图框
.x/y：symbol 元素的坐标
.width/height：symbol 元素的宽高

<symbol>和<defs>区别
.<defs>元素没有专有的属性，而<symbol>提供了更多属性
.<symbol>元素有自己用户坐标系，可以用于制作 SVG 精灵图
.<symbol>元素定义的图形增加了结构和语义性，提高文档可访问性

7.填充和边框
.第一种：直接使用元素的属性，如：填充（fill）属性，描边（stroke）属性等
.第二种：直接编写 CSS 样式，因为 SVG 也是 HTML 中的元素，也支持用 css 方式编写样式

第一种：元素的属性
.fill = "color" 支持：颜色名，十六进制值，rgb，rgba，currentColor（继承自身或父亲字体样式）

第二种：CSS 样式
.吧 background-color,border 改写成 fill 和 stroke
.不是所有属性都能用 css 设置，如路径

线性渐变
.编写渐变时，必须指定一个 id 属性，use 引用需要用到
.建议渐变内容定义在<defs>标签内部，渐变通常是可复用的

使用
.1 步：在 defs 元素内部，创建<linearGradient>节点，并添加 id 属性。
.2 步：在<linearGradient>内编写几个<stop>结点
--.给<stop>结点指定位置 offset 属性和 颜色 stop-color 属性来指定渐变在特定的位置上应用什么颜色
--.offset 和 stop-color 这两个属性值，也可以通过 CSS 来指定
.3 步：在一个元素的 fill 属性或 stroke 属性中通过 ID 来引用<linearGradient>节点
--.比如：属性 fill 属性设置为 url（#Gradient2）即可.
.4 步：控制渐变方向，通过（x1，y1）和（x2，y2）两个点控制

SVG 毛玻璃效果
.实现方案：
.方案一：使用 CSS 的 backdrop-filter 或 filter 属性 （一般用 backdrop-filter 实现）
--.backdrop-filter ：可以给一个元素后面区域添加模糊效果。适用与元素背后的所有元素。为了看到效果，必须使元素或其背景至少部分透明
--.filter：直接将模糊或颜色偏移等模糊效果应用于指定的元素

.方案二:使用 SVG 的 filter 和 feGaussianBlur 元素（建议少用）
--.<filter>:元素作为滤镜操作的容器，该元素定义的滤镜效果需要在 SVG 元素上的 filter 属性引用
----.x,y, width, height 定义了在画布上应用此过滤器的矩形区域。x，y 默认值-10%（相对自身）；width，height 默认值（120%相对自身）

--.<feGaussianBlur>:该滤镜专门对输入图像进行高斯模糊
----.stdDeviation 熟悉指定模糊的程度

形变-transform
.transform 属性用来定义元素及其子元素的形变的列表
--.此属性 “可以与任何一个 SVG 中的元素一起使用。如果使用了变形，会在该元素内部建立一个新的坐标系统”
.SVG2 开始，transform 可以作为 CSS 属性使用（作为元素属性时：支持 2D 变化，不需要单位，rotate 可指定旋转原点）

transform 属性支持的函数
.translate(x,y)平移
.rotate(z) / rotate(z, cx, cy) 旋转 cx,cy 旋转原点
.scale(x,y)缩放
.skew(x,y):倾斜
.matrix(a,b,c,d,e) 2\*3 的形变矩阵

形变会产生新的坐标系

.translate(x,y)函数
.一个值时，设置 x 轴的平移，y 轴为 0
.两个值时，设置 x,y 轴平移

stroke 描边动画
.stroke 是描边属性，专门给图形描边如果想给描边添加动画，需要用到下面两个属性
--stroke-dasharray = "number [,number,...]" :虚线类型应用在描边上
--stroke-dashoffset：指定在 dasharray 模式下路径的偏移量（值为 number 类型，除了可以正值，也可以取负值）

描边动画实现步骤
.1.先将描边设置为虚线
.2.接着将描边偏移到不可见处
.3.通过动画让描边慢慢变为可见，这样就产生了动画效果

什么是 SMIL？
.SMIL 是 W3C 推荐的可扩展标记语言，用于描述多媒体演示
.SMIL 标记是用 XML 编写的，与 HTML 有相似之处
.SMIL 允许开发多媒体项目，例如：文本，图像，视频，音频等

SMIL 的应用
.SVG 动画元素是基于 SMIL 实现（SVG 中使用 SMIL 实现元素有：<set>,<animate>,<animateMotion>...）

SVG 动画实现方式
.1 用 JS 脚本实现
.2 用 CSS 样式实现
.3 用 SMIL 实现

SMIL 动画的优势

SMIL 允许做的事情
.1.变动一个元素的数字属性（x，y...）
.2.变动变形属性（）
.3.变动颜色属性
.4.物件方向与运动路径方向同步等等

SMIL 方式实现动画的优势
.只需要在页面放几个 animate 元素就可以实现强大的动画效果，无需任何 CSS 和 JS 代码
.SMIL 支持声明式动画。声明式动画不需指定如何做某事的细节，而是指定最终结果应该是什么，将实现细节留给客户端软件
.浏览器自动处理，动画轨迹直接与动画对象相关联，物体和运动路径方向，管理动画时间等等
.动画与对象本身是紧密集成的，对与代码的编写和阅读性都非常好

SMIL 动画的元素
.1.SVG 中支持 SMIL 动画元素
. -- <set> <animate> <animateColor> <animateMotion>

<set>元素提供了一种简单的方法，可以在指定的时间内设置属性值
.经过特定时间间隔后，将属性设置为某个值（不是过度动画效果）
.它支持所有属性类型，包括那些无法合理插值的属性类型，例如：字符串 和 布尔值.而对于可以合理插值的属性通常首选(animate)元素

<set>元素常用属性
.attributeName: 指示将在动画期间更改的目标元素的 CSS 属性（property）或属性（attribute）的名称
.to：定义在特定时间设置目标属性的值。该值必须与目标属性的要求相匹配
.begin:定义何时开始动画或何时丢弃元素，默认是 0

<animate>元素
.给某个属性创建过度动画效果。需将 animate 元素嵌套在要应用动画的元素内

<animate>元素常用属性
.attributeName：指示将在动画期间更改的目标元素的 CSS 属性（property）或属性（attribute）的名称

.动画值属性
--from：在动画期间将被修改的属性的初始值
--to：在动画期间将被修改的属性的最终值
--values：from 和 to 写法的合并
----值需要用分号隔开：values:="2;2;3"
----当 values 属性定义时，from，to 会被忽略

.动画时间属性
.begin:定义何时开始动画或何时丢弃元素，默认是 0
.dur：动画的持续时间，该值必须大于 0.单位可以是小时，分钟，秒，毫秒表示
.fill：动画的最终状态。freeze（保存最后一个动画帧的状态）|remove（保持第一个动画帧的状态）
.repeatCount：指示动画将发送的次数：<number>|indefinite。没有默认值

<animateTransform>元素
.指定目标元素的形变（transform）属性，从而允许控制元素的平移，旋转，缩放或倾斜（类似于 CSS3 的形变）
.在一个动画元素中，只能用一个<animateTransform>元素创建动画；存在在多个时，后面会覆盖前面的动画

<animateTransform>元素常用属性
.attributeName: 指示将在动画期间更改的目标元素的 CSS 属性（property）或属性（attribute）的名称
.type:一个指定类型的属性，在不同的使用场景下，有不同的意思
--在<animateTransform>元素，只支持 translate(x,y)|rotate(deg,cx,cy)|scale(x,y)|skewX(x)|skewY(y)

animateMotion 元素
.<animateMotion>定义了一个元素如何沿着运动路径进行移动
--动画元素的坐标原点，会影响元素运动路径，建议从（0，0）开始

.要复用现有路径，可在<animateMotion>中使用<mpath>元素

animateMotion 元素常用属性
.path: 定义运动的路径，值和<path>元素的 d 属性一样，也可用 href 引用一个<path>
.rotate:动画元素自动跟随路径旋转，使元素动画方向和路径方向相同，值类型：<数字>|auto|auto-reverse;默认值：0

.动画值属性：from，to，values
.动画时间属性：begin,dur,fill,repeatCount

Snap.svg
.Snap.svg 是一个专门用于处理 SVG 的 javaScript 库
.支持遮罩，剪辑，图案，全渐变，组，动画等功能
.官网查看更多

GSAP 动画库
.是一个强大的 javascript 动画库

.GSAP 无论是 HTML 元素,还是 SVG,或是 Vue,React 组件的动画,都可以满足你的需求
.GSAP 官网:https://greensock.com/

GSAP 动画时间线(TimeLine)
.时间线用来创建易于调整,有弹性的动画序列
.里面的动画按顺序执行(支持链式调用)

# 8 数据可视化 ECharts

.1. 邂逅 ECharts
.ECharts:一个基于 JavaScript 的开源可视化图表库

.ECharts 应用场景:
.智慧城市,园区,航运,公安,机房,监所,电力,物业,应急管理等多个领域的数据可视化展示

.ECharts 的特点

.丰富的图表类型
.提供 20 多种图表和十几种组件,并支持各种图表及组件任意组合

.强劲的渲染引擎
.canvas,svg 双引擎一键切换

---

.2.ECharts5 初体验

.ECharts 渲染原理
.浏览器端的图表库大多会选择 SVG 或者 Canvas 进行渲染

选择那种渲染器？
.Canvas 更适合绘制图形元素数量较多的图表.如热力图，炫光尾迹特效，地理坐标系，平行坐标系上大规模线图等
.SVG 它的内存占用更低，适配性强，扩展性好，图片放大缩小不模糊

软件硬件环境较好，数据量不大的情况下，都可以

创建很多 EChatrs 导致浏览器容易崩溃的情况下，（可能是 canvas 数量多，导致内存占用超出）可以使用 svg 来渲染

数据量较大（经验判断>1k）,交互较多时，建议使用 Canvas

.3.ECharts 组件和配置

认识 option 配置项（组件）
.backfroundColor:设置直角坐标系内绘图
.grid 选项：直角坐标系内绘图区域
.yAxis 选项：直角坐标系 grid 中的 y 轴
.xAxis 选项：直角坐标系 grid 中的 x 轴
.title：图表的标题
.legend：图例，展示了不同系列的标记，颜色
.tooltip：提示框
.toolbox：工具栏，提供操作图表的工具
.series：系列，配置系列图表的类型和图形信息数据
.visualMap：视觉映射，可以将数据值映射到图形的形状，大小，颜色等
.geo：地理坐标系组件。用于地图的绘制，支持在地理坐标系上绘制散点图，线集

Grid 网格配置（组件）
.grid 选项：直角坐标系内绘图区域
--show：是否显示直角坐标系网格。boolean 类型

.4.ECharts 图标实战
.4.ECharts 其他补充

.地图-绘制
.ECharts 绘制地图步骤
ECharts 可以使用 GeoJSON 格式的数据作为地图的轮廓，可以获取第三方的 GeoJSON 数据注册到 ECharts 中：
https://github.com/echarts-maps/echarts-china-cities-js/tree/master/js/shape-with-internal-borders
https://datav.aliyun.com/portal/school/atlas/area_selector

.1.拿到 GeoJSON 数据
.2.注册对应的地图的 GeoJSON 数据（调用 setOption 前注册）
.3.配置 geo 选项 或 series

geo 和 map series 绘制地图区别

geo 地理坐标系组件
.会生成一个 go 地理坐标系组件
.该坐标系可以共其他系列复用（注意：其他系列复用该地理坐标系时，series 的 itemStyle 等样式不起作用）

map series
.map series 会生成内部专用的 geo 地理坐标系
.地图主要用于地理区域数据的可视化，配合 data 使用
.配合 visualMap 组件用于展示不同区域的人口分布密度数据

ECharts 常见 API
.echarts.init
..echarts.registerMap
.echarts.getMap

.echartslnstance.setOption 设置配置项及数据 万能接口
.echartslnstance.getWidth ， getHeight 获取容器宽高
.echartslnstance.resize ：修改图表尺寸
.echartslnstance.showLoading ， hideLoading：显示和隐藏加载动画
.echartslnstance.dispatchAction 图例开关，显示提示框 showTip 等
.echartslnstance.dispose 销毁实例
.echartslnstance.on 通过 on 事件添加事件处理函数

# 9 大屏适配

适配最多的尺寸：
.pc 端电脑：1920px \* 1080px（当然也有少部分电脑是支持输出 4k 屏。比如小米笔记本）
.移动设备：750px \* auto

大屏设备
.指挥大厅，展厅，展会中的大屏 （1920*1080 和 3840*2160）（4k 屏）也可以说是属于大屏.

大屏的硬件设备分类
.拼接屏，LED 屏，投影等

拼接屏-
.顾名思义就是按照一定拼接方式拼接而成

拼接方式取决于使用场景
.1920 平行* 1080px 即 1* 1 个显示屏（16：9）
.3840 * 2160（4k 屏）， 即 2*2
.5760*3240，即 3*3 个显示屏（16：9）
.7680*3240，即 4*3 个显示屏（64：27）
.9600*3240，即 5*3 个显示屏（80：27）

LED 屏
.是由若干单体屏幕模块组成的，它的像素点计算及拼接方式与拼接屏有很大区别.
LED 可以看成矩形点阵

.比如单体为 500*500 作为标准计算，每个单体模块像素点横竖都为 128px
.横向 12 块竖向 6 块，横向像素为 128*12=1536px，竖向 128\*6=768px。可以使用横竖总像素设计

定设计稿尺寸-拼接屏
.超过 4k（3840 \* 2160），硬件会产生很多问题，例如：卡顿，GPU 压力过大，高负荷运行等等

.正常设计建议最好保持在 4k 内，由于硬件问题，大家采用的都是输出 4k 及以下，既保证流畅又能在视觉上清晰阅读
.所以设计时也要保持同样的规则. 保持大屏的比例等比缩放即可
.注：最好是按照硬件的输出分辨率设计（关键），因为按照输出分辨率设计，一定不会出错

比如
.1920px * 1080px（1*1），设计搞尺寸：1920px * 1080px.
.3840*2160（2*2 4k 屏），设计搞尺寸寸：3840*2160
.5760*3240（3*3），设计搞尺寸：5760\*3240

.7680*3240（4*3）设计搞尺寸：（3840*2160 需要出 1 倍图和 2 倍图，7680*3240）
