/**
 * PageSpeed Insights 实验室数据 — 桃李官网移动端
 * 来源：2026-07-17 截图（Lighthouse 13.4.0 · 模拟 Moto G · 低速 4G）
 */

export const PSI_MOBILE_META = {
  url: 'https://www.tolybread.cn/',
  formFactor: 'mobile',
  formFactorLabel: '移动端',
  capturedAt: '2026年7月17日 21:12',
  lighthouse: '13.4.0',
  device: '模拟 Moto G · 低速 4G',
};

export const PSI_MOBILE_CATEGORIES = [
  { key: 'performance', label: '性能', score: 77 },
  { key: 'accessibility', label: '无障碍', score: 65 },
  { key: 'best-practices', label: '技术规范', score: 69 },
  { key: 'seo', label: 'SEO', score: 83 },
];

export const PSI_MOBILE_METRICS = [
  { key: 'fcp', label: '首次内容绘制', short: 'FCP', display: '1.3 秒', status: 'pass' },
  { key: 'lcp', label: '最大内容绘制', short: 'LCP', display: '2.3 秒', status: 'pass' },
  { key: 'tbt', label: '总阻塞时间', short: 'TBT', display: '70 毫秒', status: 'pass' },
  { key: 'cls', label: '累积布局偏移', short: 'CLS', display: '0.22', status: 'warn' },
  { key: 'si', label: '速度指数', short: 'SI', display: '23.1 秒', status: 'fail' },
];

export const PSI_MOBILE_PERF_INSIGHTS = [
  { severity: 'fail', title: '改进图片传送', detail: '预计节省 1,508 KiB' },
  { severity: 'fail', title: '渲染阻塞请求', detail: '预计缩短 940 毫秒' },
  { severity: 'fail', title: '使用高效的缓存生命周期', detail: '预计节省 245 KiB' },
  { severity: 'fail', title: '布局偏移原因', detail: 'CLS 受首屏元素影响' },
  { severity: 'fail', title: 'LCP 细分 / 发现 LCP 请求', detail: '最大内容绘制路径可优化' },
  { severity: 'warn', title: '避免网络负载过大', detail: '总大小为 4,694 KiB' },
  { severity: 'warn', title: '减少未使用的 JavaScript', detail: '预计节省 36 KiB' },
  { severity: 'warn', title: '图片元素没有明确的 width 和 height', detail: '易加剧布局偏移' },
  { severity: 'warn', title: '旧版 JavaScript', detail: '预计节省 8 KiB' },
  { severity: 'info', title: '长时间运行的主线程任务', detail: '发现了 4 项长任务' },
];

export const PSI_MOBILE_A11Y_FINDINGS = [
  { title: '图片元素缺少 [alt] 属性' },
  { title: '链接缺少可识别的名称' },
  { title: 'viewport 禁止缩放或 maximum-scale 过小' },
  { title: '文档缺少主要位置标记' },
  { title: '背景色与前景色对比度不足' },
];

export const PSI_MOBILE_BP_FINDINGS = [
  { severity: 'fail', title: '使用第三方 Cookie', detail: '找到 6 个 Cookie' },
  { severity: 'fail', title: '控制台已记录浏览器错误', detail: '' },
  { severity: 'fail', title: 'Issues 面板有待处理问题', detail: '' },
  { severity: 'fail', title: '部分图片分辨率偏低', detail: '' },
];

export const PSI_MOBILE_SEO_FINDINGS = [
  {
    title: '有无法抓取的链接',
    detail: '导航等处存在无法被抓取工具跟随的链接。',
  },
  {
    title: '图片元素缺少 [alt] 属性',
    detail: '内容最佳做法：缺少替代文本影响理解。',
  },
];
