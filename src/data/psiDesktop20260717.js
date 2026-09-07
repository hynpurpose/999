/**
 * PageSpeed Insights 实验室数据 — 桃李官网桌面端
 * 来源：2026-07-17 报告导出（Lighthouse 13.4.0 · Simulated Desktop）
 * 真实用户体验（CrUX）：No Data
 */

export const PSI_META = {
  url: 'https://www.tolybread.cn/',
  formFactor: 'desktop',
  formFactorLabel: '桌面端',
  capturedAt: '2026年7月17日 21:12',
  lighthouse: '13.4.0',
  tool: 'PageSpeed Insights',
  fieldData: 'No Data',
};

/** 0–100；代理式浏览为 x/3 */
export const PSI_CATEGORIES = [
  { key: 'performance', label: '性能', score: 23 },
  { key: 'accessibility', label: '无障碍', score: 65 },
  { key: 'best-practices', label: '技术规范', score: 54 },
  { key: 'seo', label: 'SEO', score: 83 },
];

export const PSI_AGENT = {
  label: '代理式浏览',
  earned: 0,
  max: 3,
  note: '确保高质量的智能体可浏览性，并验证 WebMCP 集成（此类别仍在开发中）',
};

export const PSI_METRICS = [
  { key: 'fcp', label: '首次内容绘制', short: 'FCP', display: '1.9 秒', status: 'fail' },
  { key: 'lcp', label: '最大内容绘制', short: 'LCP', display: '3.3 秒', status: 'fail' },
  { key: 'tbt', label: '总阻塞时间', short: 'TBT', display: '560 毫秒', status: 'fail' },
  { key: 'cls', label: '累积布局偏移', short: 'CLS', display: '0.432', status: 'fail' },
  { key: 'si', label: '速度指数', short: 'SI', display: '7.2 秒', status: 'fail' },
];

/** 性能洞察 / 诊断精选 */
export const PSI_PERF_INSIGHTS = [
  {
    severity: 'fail',
    title: '阻塞渲染的请求',
    detail: '预计可节省 3,020 毫秒',
  },
  {
    severity: 'fail',
    title: '布局偏移的元素摘要',
    detail: '累积布局偏移 CLS 0.432，首屏稳定性差',
  },
  {
    severity: 'fail',
    title: 'LCP 分解 / LCP 请求发现',
    detail: '最大内容绘制路径偏长，资源发现偏晚',
  },
  {
    severity: 'warn',
    title: '优化图片传输',
    detail: '预计可节省 1,308 KiB',
  },
  {
    severity: 'warn',
    title: '使用高效的缓存生存周期',
    detail: '预计可节省 363 KiB',
  },
  {
    severity: 'warn',
    title: '减少未使用的 JavaScript',
    detail: '预计可节省 196 KiB',
  },
  {
    severity: 'warn',
    title: '减少未使用的 CSS',
    detail: '预计可节省 16 KiB',
  },
  {
    severity: 'warn',
    title: '避免过大的网络负载',
    detail: '总大小为 4,731 KiB',
  },
  {
    severity: 'warn',
    title: '图片元素未设置明确的 width 和 height',
    detail: '易加剧布局偏移',
  },
  {
    severity: 'info',
    title: '避免长时间的主线程任务',
    detail: '发现 5 个长任务',
  },
];

export const PSI_PERF_PASSED_HINT =
  '已通过审计（节选）：文档请求延迟、字体显示、压缩 CSS/JS、移动端视口、JavaScript 执行时间 1.0 秒、主线程工作 1.5 秒等';

export const PSI_A11Y_FINDINGS = [
  {
    title: '图片元素缺少 [alt] 属性',
    detail: '导航/功能图标缺少替代文本（如 icon1–icon9）',
    sample: '<img src="/static/images/icon3.png">',
  },
  {
    title: '链接没有可辨识的名称',
    detail: 'Logo 等链接缺少可辨识文本',
    sample: 'div.logo > a  →  <a href="/">',
  },
  {
    title: '标题元素未按顺序降序排列',
    detail: '出现 h3 / h5 跳级等结构问题',
  },
  {
    title: '背景色与前景色对比度不足',
    detail: '导航分类等文字对比度偏低',
  },
  {
    title: 'viewport 禁止缩放',
    detail: 'maximum-scale=1, user-scalable=no',
  },
  {
    title: '文档缺少主区域标记',
    detail: '缺少 <main> 等 landmark',
  },
];

export const PSI_BP_FINDINGS = [
  {
    severity: 'fail',
    title: '使用已弃用的 API',
    detail: '发现 1 个警告',
  },
  {
    severity: 'fail',
    title: '使用第三方 Cookie',
    detail: '发现 4 个 Cookie',
  },
  {
    severity: 'fail',
    title: '浏览器错误已记录到控制台',
    detail: '控制台存在报错记录',
  },
  {
    severity: 'fail',
    title: '问题已记录在 Chrome DevTools 的 Issues 面板中',
    detail: 'Issues 面板有待处理项',
  },
];

export const PSI_SEO_FINDINGS = [
  {
    title: '链接无法被爬取',
    detail:
      '搜索引擎可能使用链接属性抓取网站。导航中存在 javascript:void(0) 锚点，更多页面可能难以被发现。',
    sample: 'div.nav-menu-list > … > a  →  href="javascript:void(0);"',
    examples: ['吐司面包', '丹麦面包', '甜面包', '蛋糕', '糕点', '月饼'],
  },
];

export const PSI_AGENT_FINDINGS = [
  {
    title: '累积布局偏移',
    detail: 'CLS 0.432',
  },
  {
    title: '无障碍树结构不完善',
    detail: '完善的无障碍树有助于智能体导航与交互；例如链接必须具有可辨识的文本（品牌 Logo 链接等）。',
    sample: 'div.top > div.container > div.logo > a',
  },
  {
    title: 'llms.txt 未遵循建议',
    detail: '获取 llms.txt 失败。若文件不符合建议，大模型可能难以理解如何抓取或使用站点内容。',
  },
];

export const PSI_AGENT_NA =
  '不适用（节选）：WebMCP 表单覆盖范围、WebMCP 工具已注册、WebMCP 模式有效';

/** 分值颜色：对齐 Lighthouse 习惯 */
export function gaugeTone(score) {
  if (score >= 90) return { stroke: '#15803D', text: '#15803D', label: '良好' };
  if (score >= 50) return { stroke: '#C2410C', text: '#C2410C', label: '需改进' };
  return { stroke: '#B91C1C', text: '#B91C1C', label: '较差' };
}
