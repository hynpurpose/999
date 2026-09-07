# GEO 2026 幻灯片设计与排版规范 (Slide Design Specifications)

本文件定义了幻灯片的核心设计规范。在开发、调整或新增幻灯片页面时，必须严格遵守以下规范。

## 1. 尺寸比例与缩放关系
* **设计稿分辨率 (Figma)**: `3840px × 2160px` (4K 比例)
* **前端代码分辨率 (React)**: `1920px × 1080px` (1080p 比例)
* **缩放转换**: 前端代码中的所有像素尺寸、坐标定位、字号，均需为 **Figma 设计稿的 1/2 (0.5x)**。

---

## 2. 核心字号与字体样式规范 (以 1920 × 1080 计)

所有出现的文字，除非特殊强调，不得使用这几种字号之外的字体样式：

### 2.1 一级标题 (H1)
* **用途**: 页面大标题（位于 topguide 与 content top 之间）
* **字体 (font-family)**: `'AlimamaShuHeiTi', sans-serif` (阿里妈妈数黑体)
* **字号 (font-size)**: `86px` (Figma: 172px)
* **字重 (font-weight)**: `700`
* **行高 (line-height)**: `96px`
* **颜色**: `#FFFFFF` (白色)

### 2.2 二级标题 (H2)
* **字体 (font-family)**: `'MiSans', sans-serif` (小米 MiSans)
* **字号 (font-size)**: `48px` (Figma: 96px)
* **字重 (font-weight)**: `400` / `700`（需要层级时加粗，不要改成灰色）
* **行高 (line-height)**: `58px`
* **颜色**: `#FFFFFF` (白色。禁止半透明白或灰色)

### 2.3 三级标题 (H3)
* **字体 (font-family)**: `'MiSans', sans-serif`
* **字号 (font-size)**: `36px` (Figma: 72px)
* **字重 (font-weight)**: `500` / `700`
* **行高 (line-height)**: `46px`
* **颜色**: `#FFFFFF` (白色)

### 2.4 正文 (Body)
* **字体 (font-family)**: `'MiSans', sans-serif`
* **字号 (font-size)**: `24px` (Figma: 48px)
* **字重 (font-weight)**: `400`
* **行高 (line-height)**: `34px`
* **颜色**: `#FFFFFF` (白色。正文一律使用白色，不得使用灰色或其他彩色样式，强调就加粗)

### 2.5 文字颜色铁律（禁止灰色）⚠️

**幻灯片上所有可读文字必须是纯白 `#FFFFFF`。需要层级就加粗，禁止用灰色、半透明白、浅灰来区分主次。**

禁止用于文字颜色（装饰线/边框/背景除外）：

* `text-zinc-200` / `text-zinc-300` / `text-zinc-400` / `text-zinc-500` / `text-zinc-600`
* `text-white/25` / `text-white/40` / `text-white/50` / `text-white/75` 等半透明白
* `rgba(255, 255, 255, 0.x)`、`color: #A1A1AA` 等任何灰色或降透明度白色

允许的文字颜色只有：

* `#FFFFFF` / `text-white`：默认正文、副标题、卡片标签、箭头说明、页脚
* `#004CE5`：关键数据、关键结论的强调色（少量使用）
* 强调方式：`font-bold` / `font-black`，**不要用变灰代替层级**

`SlideLayout` 的 `subtitle` 也必须是 `#FFFFFF`，禁止 `rgba(255,255,255,0.75)` 这类半透明白。

---

## 3. 版面布局限制与安全区域 (Safe Zones)

根据参考线定义，1920 × 1080 空间下划分了如下区域：

### 3.1 底部避让区 (Subtitle Area) - ⚠️ 严禁排版文字
* **底线范围**: 屏幕底部往上 `60px` (Figma: 120px) 的区域。
* **规则**: 此区域预留给实时会议字幕。**绝对禁止**在此区域内排版任何关键文字、列表或图表内容。

### 3.2 顶部页眉区 (Header Area)
* **顶线范围**: 屏幕顶部往下 `225px` (Figma: 450px) 的区域。
* **规则**: 在 topguide (80px) 和 content top (225px) 之间**只放置一级标题 H1**。顶部右侧的品牌标识等其他元素已被移除。

### 3.3 主要排版安全区 (Content Safe Zone)
* **垂直范围**: `top: 225px` 至 `bottom: 60px` (高度为 `795px`)。
* **水平范围**: `left: 40px` 至 `right: 40px` (宽度为 `1840px`；Figma: 左右边距 `80px`，宽度 `3680px`)。
* **规则**: 所有卡片、图片、数据指标、对比列表等主要内容，必须包含在此区域内。

---

## 4. React 布局组件与排版辅助线 (SlideLayout)

为了保证开发页面时完全符合上述设计规范，项目提供了通用的布局容器组件 [SlideLayout.jsx](file:///j:/GEO%20Home/Close_Door/src/components/SlideLayout.jsx)。

### 4.1 引入与使用方法
在开发或新增幻灯片页面时，将页面组件的外层用 `<SlideLayout>` 包裹：

```jsx
import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function MyNewSlide() {
  return (
    <SlideLayout 
      title="为什么要做GEO（一级标题）" 
      subtitle="我们团队为什么在2024年决定全力押注 GEO？（二级标题）"
    >
      {/* 核心排版内容放置在这里：自动被限制在 1840px x 775px 的安全区内 */}
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-3xl">主排版内容区域</p>
      </div>
    </SlideLayout>
  );
}
```

### 4.2 排版辅助参考线切换 (Guidelines)
为了在浏览器中实时确认排版元素是否越界或对齐：
1. **按键切换**：在幻灯片运行页面中，直接在键盘上按下 **`G` 键**，即可打开/关闭蓝色虚线排版辅助线和底部的红色避让区警示带。
2. **双击切换**：也可以直接 **双击** 页面右上角的品牌标识词 `GEOINDEXFUTURE // 2026` 切换。

---

## 5. 颜色与视觉强调规范 (Color & Emphasis Specifications)
* **主强调色 (Primary Accent Color)**: `#004CE5` (或 Tailwind `text-[#004CE5]`/`bg-[#004CE5]`)。
* **规则**: 在段落、列表、数据指标等需要引导观众视线、强调核心数据（如百分比、增幅、关键AI搜索词等）时，必须统一使用此强调色，以保障全套幻灯片视觉传达的连贯性。
* **禁止灰色文字**: 副标题、说明、卡片标签、箭头文案、页脚一律纯白；需要弱化层级时加粗，不要用 zinc / 半透明白。

---

## 6. 开发与内容规范 (Development & Content Guidelines)
* **别用各种五颜六色的颜色**：尽量只用现在的蓝色重点色和在必要的时候用少量其他颜色。
* **别乱改我的信息**：保持原文内容与数据信息一致，不可随意臆造或更改。
* **除非我要求别乱加英文**：不可在非必要处添加英文翻译或拼音。
* **禁止孤字一行 / 标点单独占行**：中文换行时，不得出现单字、单个标点、或残缺半句单独占一整行。排版时要控制容器宽度、字号与断句；必要时用 `whitespace-nowrap`、手动换行、或收紧文案，保证每一行都是完整可读的意群。把强调色包进 `<span>` 时，也不要把短语拆成会单独断行的碎片（例如把「更接近」和后面整句拆开导致标点或短词掉到下一行）。


