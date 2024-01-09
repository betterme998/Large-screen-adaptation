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
2.Canvas 绘制图像
3.Canvas 样式和颜色
4.Canvas 状态和形变
5.Canvas 动画和案例
