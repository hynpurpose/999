# -*- coding: utf-8 -*-
"""Generate the Sanjiu GEO bid document as a formatted .docx."""
from pathlib import Path

from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

OUT = Path(r"j:\GEO Home\Slide_Medical_999\三九养胃舒颗粒GEO项目招标文件.docx")

INK = RGBColor(0x1A, 0x1A, 0x1A)
BLUE = RGBColor(0x00, 0x4C, 0xE5)
RED = RGBColor(0xC8, 0x20, 0x2A)
GRAY_LINE = "D4D4D4"
HEADER_BG = "F1F3F7"


def set_run_font(run, name="宋体", size=12, bold=False, color=INK, east="宋体"):
    run.bold = bold
    run.font.size = Pt(size)
    run.font.color.rgb = color
    run.font.name = name
    r = run._element
    rPr = r.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:ascii"), name)
    rFonts.set(qn("w:hAnsi"), name)
    rFonts.set(qn("w:eastAsia"), east)


def shade_cell(cell, fill):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), fill)
    shd.set(qn("w:val"), "clear")
    tcPr.append(shd)


def set_cell_border(cell, color="808080"):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcBorders = OxmlElement("w:tcBorders")
    for edge in ("top", "left", "bottom", "right"):
        el = OxmlElement(f"w:{edge}")
        el.set(qn("w:val"), "single")
        el.set(qn("w:sz"), "4")
        el.set(qn("w:space"), "0")
        el.set(qn("w:color"), color)
        tcBorders.append(el)
    tcPr.append(tcBorders)


def set_cell_text(cell, text, *, size=10.5, bold=False, align="left", color=INK, east="宋体"):
    cell.text = ""
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.line_spacing = 1.25
    if align == "center":
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    elif align == "right":
        p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    else:
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    run = p.add_run(text)
    set_run_font(run, size=size, bold=bold, color=color, east=east)
    set_cell_border(cell)
    for pp in cell.paragraphs:
        pf = pp.paragraph_format
        pf.left_indent = Cm(0.08)
        pf.right_indent = Cm(0.08)


def add_page_number(paragraph):
    """Insert PAGE / NUMPAGES field into a paragraph."""
    def _fld(instr):
        run = paragraph.add_run()
        r = run._r
        fldChar1 = OxmlElement("w:fldChar")
        fldChar1.set(qn("w:fldCharType"), "begin")
        r.append(fldChar1)

        run2 = paragraph.add_run()
        r2 = run2._r
        instrText = OxmlElement("w:instrText")
        instrText.set(qn("xml:space"), "preserve")
        instrText.text = instr
        r2.append(instrText)

        run3 = paragraph.add_run()
        r3 = run3._r
        fldChar2 = OxmlElement("w:fldChar")
        fldChar2.set(qn("w:fldCharType"), "end")
        r3.append(fldChar2)
        return run2

    set_run_font(paragraph.add_run("— "), size=9, east="宋体")
    _fld(" PAGE ")
    set_run_font(paragraph.add_run(" —"), size=9, east="宋体")


def setup_doc():
    doc = Document()
    sec = doc.sections[0]
    sec.page_width = Cm(21.0)
    sec.page_height = Cm(29.7)
    sec.left_margin = Cm(2.54)
    sec.right_margin = Cm(2.54)
    sec.top_margin = Cm(2.6)
    sec.bottom_margin = Cm(2.4)
    sec.header_distance = Cm(1.2)
    sec.footer_distance = Cm(1.2)

    # header
    hp = sec.header.paragraphs[0]
    hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = hp.add_run("三九养胃舒颗粒 GEO（生成式引擎优化）项目招标文件")
    set_run_font(r, size=9, color=RGBColor(0x66, 0x66, 0x66), east="宋体")
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "6")
    bottom.set(qn("w:space"), "4")
    bottom.set(qn("w:color"), "004CE5")
    pBdr.append(bottom)
    hp._p.get_or_add_pPr().append(pBdr)

    # footer
    fp = sec.footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    add_page_number(fp)

    # default style
    normal = doc.styles["Normal"]
    normal.font.name = "Times New Roman"
    normal.font.size = Pt(12)
    rPr = normal.element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:ascii"), "Times New Roman")
    rFonts.set(qn("w:hAnsi"), "Times New Roman")
    rFonts.set(qn("w:eastAsia"), "宋体")
    pf = normal.paragraph_format
    pf.line_spacing_rule = WD_LINE_SPACING.ONE_POINT_FIVE
    pf.space_after = Pt(0)
    pf.space_before = Pt(0)
    return doc


def p(doc, text, *, size=12, bold=False, align="justify", space_before=0, space_after=6,
      first_line=True, color=INK, east="宋体", line=1.5):
    para = doc.add_paragraph()
    if align == "center":
        para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    elif align == "right":
        para.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    elif align == "left":
        para.alignment = WD_ALIGN_PARAGRAPH.LEFT
    else:
        para.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    pf = para.paragraph_format
    pf.space_before = Pt(space_before)
    pf.space_after = Pt(space_after)
    pf.line_spacing = line
    if first_line and align == "justify":
        pf.first_line_indent = Cm(0.74)
    run = para.add_run(text)
    set_run_font(run, size=size, bold=bold, color=color, east=east)
    return para


def h1(doc, text):
    para = doc.add_paragraph()
    para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    pf = para.paragraph_format
    pf.space_before = Pt(18)
    pf.space_after = Pt(14)
    pf.line_spacing = 1.5
    run = para.add_run(text)
    set_run_font(run, name="黑体", size=18, bold=True, east="黑体")
    return para


def h2(doc, text):
    para = doc.add_paragraph()
    para.alignment = WD_ALIGN_PARAGRAPH.LEFT
    pf = para.paragraph_format
    pf.space_before = Pt(14)
    pf.space_after = Pt(8)
    pf.line_spacing = 1.5
    run = para.add_run(text)
    set_run_font(run, name="黑体", size=14, bold=True, east="黑体")
    return para


def h3(doc, text):
    para = doc.add_paragraph()
    para.alignment = WD_ALIGN_PARAGRAPH.LEFT
    pf = para.paragraph_format
    pf.space_before = Pt(10)
    pf.space_after = Pt(6)
    pf.line_spacing = 1.5
    run = para.add_run(text)
    set_run_font(run, name="黑体", size=12, bold=True, east="黑体")
    return para


def bullet(doc, text, *, size=12):
    para = doc.add_paragraph()
    para.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    pf = para.paragraph_format
    pf.left_indent = Cm(0.74)
    pf.first_line_indent = Cm(-0.37)
    pf.space_before = Pt(1)
    pf.space_after = Pt(3)
    pf.line_spacing = 1.5
    run = para.add_run("·  " + text)
    set_run_font(run, size=size, east="宋体")
    return para


def numbered(doc, n, text, *, size=12):
    para = doc.add_paragraph()
    para.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    pf = para.paragraph_format
    pf.left_indent = Cm(0.74)
    pf.first_line_indent = Cm(-0.74)
    pf.space_before = Pt(1)
    pf.space_after = Pt(4)
    pf.line_spacing = 1.5
    run = para.add_run(f"{n}. {text}")
    set_run_font(run, size=size, east="宋体")
    return para


def quote(doc, text):
    para = doc.add_paragraph()
    para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    pf = para.paragraph_format
    pf.space_before = Pt(6)
    pf.space_after = Pt(8)
    pf.line_spacing = 1.5
    run = para.add_run(text)
    set_run_font(run, name="楷体", size=12, bold=True, east="楷体", color=BLUE)
    return para


def table(doc, head, rows, widths=None, head_size=10, body_size=10):
    t = doc.add_table(rows=1 + len(rows), cols=len(head))
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = True
    for i, h in enumerate(head):
        cell = t.rows[0].cells[i]
        set_cell_text(cell, h, size=head_size, bold=True, align="center", east="黑体")
        shade_cell(cell, HEADER_BG)
    for ri, row in enumerate(rows):
        for ci, val in enumerate(row):
            cell = t.rows[ri + 1].cells[ci]
            align = "center" if ci > 0 and len(head) <= 4 else "left"
            if ci == 0:
                align = "left"
            set_cell_text(cell, str(val), size=body_size, align=align)
    if widths:
        for row in t.rows:
            for i, w in enumerate(widths):
                row.cells[i].width = Cm(w)
    # spacer after table
    sp = doc.add_paragraph()
    sp.paragraph_format.space_after = Pt(8)
    sp.paragraph_format.space_before = Pt(0)
    return t


def page_break(doc):
    doc.add_page_break()


def build():
    doc = setup_doc()

    # ========== 封面 ==========
    for _ in range(3):
        p(doc, "", size=12, first_line=False, space_after=0, align="center")

    p(doc, "华润三九医药股份有限公司", size=16, bold=False, align="center",
      first_line=False, space_after=6, east="黑体")
    p(doc, "（招标人）", size=12, align="center", first_line=False, space_after=28, east="宋体")

    p(doc, "三九养胃舒颗粒", size=26, bold=True, align="center",
      first_line=False, space_after=8, east="黑体")
    p(doc, "GEO（生成式引擎优化）项目", size=22, bold=True, align="center",
      first_line=False, space_after=8, east="黑体")
    p(doc, "招  标  文  件", size=26, bold=True, align="center",
      first_line=False, space_after=28, east="黑体")

    p(doc, "项目周期：12 个月", size=14, align="center", first_line=False, space_after=4, east="宋体")
    p(doc, "费用上限：人民币叁佰万元整（￥3,000,000.00）", size=14, align="center",
      first_line=False, space_after=4, east="宋体")
    p(doc, "编制日期：2026 年 8 月", size=14, align="center", first_line=False, space_after=36, east="宋体")

    p(doc, "【请以此为准】", size=12, bold=True, align="center", first_line=False,
      space_after=4, color=RED, east="黑体")
    p(doc, "本文件为示意稿，条款以招标人最终盖章版为准。", size=10.5, align="center",
      first_line=False, space_after=0, east="宋体")

    page_break(doc)

    # ========== 编制说明 + 目录 ==========
    h1(doc, "编  制  说  明")
    p(doc, "本文件以《创维品牌 GEO（生成式引擎优化）项目招标文件》为骨架，替换为医药行业与三九养胃舒颗粒的产品参数，并在 KPI 设定、招标门槛、评标与报价、验收与罚则四处按新规则重写。文中基线数据取自 GEO ONE 监测系统 2026 年 8 月实测。")
    p(doc, "本项目的核心立场：不设定超出行业物理上限的指标；门槛不设在「承诺了什么」，而设在「当场做得出什么」；验收按词条类型分类分阶段执行，数据须经第三方系统与专业团队真机双重验真。")

    h1(doc, "目　　录")
    toc = [
        ("第一部分", "投标须知", "3"),
        ("", "一、项目概况", ""),
        ("", "二、比稿流程", ""),
        ("", "三、投标文件的递交与效力", ""),
        ("", "四、无效标情形", ""),
        ("", "五、中标与合同", ""),
        ("第二部分", "项目要求", ""),
        ("", "一、服务范围", ""),
        ("", "二、核心服务内容——六大执行模块", ""),
        ("", "三、交付物清单", ""),
        ("", "四、KPI 设定原则（重要）", ""),
        ("", "五、验收标准：分类分阶段", ""),
        ("", "六、数据验真办法（重要）", ""),
        ("", "七、合规要求与违约红线", ""),
        ("第三部分", "招标门槛与评标办法", ""),
        ("", "门槛一　数据查询能力（现场闭卷）", ""),
        ("", "门槛二　投放资源与投放逻辑", ""),
        ("", "门槛三　方案专业度（第一权重）", ""),
        ("", "门槛四　异常低价约束", ""),
        ("", "评标权重", ""),
        ("", "报价规则与低价惩罚", ""),
        ("第四部分", "资质条件与讲解要求", ""),
        ("第五部分", "投标文件格式", ""),
    ]
    for a, b, c in toc:
        para = doc.add_paragraph()
        pf = para.paragraph_format
        pf.space_before = Pt(2)
        pf.space_after = Pt(2)
        pf.line_spacing = 1.6
        if a:
            run = para.add_run(f"{a}　{b}")
            set_run_font(run, name="黑体", size=12, bold=True, east="黑体")
        else:
            run = para.add_run(f"　　{b}")
            set_run_font(run, size=12, east="宋体")

    page_break(doc)

    # ========== 第一部分 ==========
    h1(doc, "第一部分　投标须知")
    p(doc, "尊敬的投标单位：", first_line=False)
    p(doc, "华润三九医药股份有限公司就「三九养胃舒颗粒 GEO（生成式引擎优化）项目」展开招标工作，现正式邀请贵单位参加投标。")

    h2(doc, "一、项目概况")
    table(
        doc,
        ["项", "内容"],
        [
            ["招标名称", "三九养胃舒颗粒 GEO（生成式引擎优化）项目"],
            ["招标人", "华润三九医药股份有限公司"],
            ["项目周期", "自合同签订之日起 12 个月"],
            ["费用上限", "人民币叁佰万元整（￥3,000,000.00），含增值税专用发票税点"],
            ["项目性质", "OTC 中成药品牌在生成式 AI 搜索平台的可见性与推荐质量优化"],
        ],
        widths=[4.2, 11.8],
    )

    h3(doc, "项目内容")
    p(doc, "围绕 999 主品牌与三九养胃舒颗粒，在豆包、DeepSeek、元宝、千问、Kimi 等主流生成式 AI 平台开展品牌与产品的可见性优化运营。项目分 C 端（消费者选药场景）与 B 端（药店进货、医院配备渠道）两侧独立建组、独立验收。")
    p(doc, "本项目严格遵循真实内容、合规运营、科学监测、可复现验收四项原则，提升品牌与产品在 AI 搜索中的有效推荐率，纠正错误与负面信息，实现品牌在 AI 生态内的长效健康曝光。")
    p(doc, "本项目不接受联合体投标，不接受任何形式的分包或转包。", bold=True)

    h2(doc, "二、比稿流程")
    table(
        doc,
        ["环节", "时间", "说明"],
        [
            ["签署保密协议", "报名后 3 个工作日内", "未签署者不发放正式招标文件"],
            ["线上集中答疑", "开标前 14 日", "统一答复，形成书面澄清文件"],
            ["资格预审", "开标前 7 日", "核验第五章资质条件，不通过者不进入下一环节"],
            ["现场闭卷数据考", "开标当日上午", "详见第三部分「门槛一」，未通过者不进入述标环节"],
            ["方案述标", "开标当日下午", "每家不超过 30 分钟，技术标中不得涉及商务报价"],
            ["商务标开标", "述标结束后", "按第三部分评标办法计分"],
        ],
        widths=[4.0, 4.4, 7.6],
    )

    h2(doc, "三、投标文件的递交与效力")
    numbered(doc, 1, "投标文件应采用中文编定，A4 规格打印装订，全部文件须加盖投标公司公章。")
    numbered(doc, 2, "技术标正本一份、副本一份、电子版（U 盘）一份，一同装入不透明文件袋密封；商务标正、副本装入另一不透明文件袋密封。封口处骑缝盖章，外包装注明投标公司名称与「技术标／商务标」。")
    numbered(doc, 3, "投标人须在投标截止时间前将纸质版送达开标地址，逾期不收（以签收时间为准）。")
    numbered(doc, 4, "截止日之前，投标人可以书面形式补充、修改或撤回已提交的投标文件，补充与修改内容为投标文件的组成部分。")

    h2(doc, "四、无效标情形")
    p(doc, "发生下列情况之一，投标文件视为无效：")
    numbered(doc, 1, "未在规定截止时间前送达；")
    numbered(doc, 2, "投标文件未加盖公章，或未按要求密封；")
    numbered(doc, 3, "未按招标文件规定的格式与顺序编制；")
    numbered(doc, 4, "现场闭卷数据考未通过；")
    numbered(doc, 5, "报价触及第三部分规定的低价废标线；")
    numbered(doc, 6, "经核实存在资质借用、案例造假、数据造假情形。")

    h2(doc, "五、中标与合同")
    numbered(doc, 1, "中标人应于收到中标通知书后 10 日内与招标人签订项目合同。拒签或逾期未签的，应赔偿因此导致招标人遭受的一切损失。")
    numbered(doc, 2, "报价最低并非评标唯一标准，招标人无须解释确定中标人之理据。")
    numbered(doc, 3, "本招标文件所有信息资料均属招标人商业机密，无论是否中标，投标人不得向任何第三方透露。")

    page_break(doc)

    # ========== 第二部分 ==========
    h1(doc, "第二部分　项目要求")

    h2(doc, "一、服务范围")
    h3(doc, "1. 品牌与产品方向")
    table(
        doc,
        ["对象", "定位", "优化重点"],
        [
            ["999 主品牌", "集团品牌资产，源自 1985 年三九胃泰", "品牌信任度、品牌与产品的正确关联"],
            ["三九养胃舒颗粒", "核心单品，2025 年零售药店终端中成药胃药 TOP3", "消费者选药场景的推荐位与卖点露出"],
            ["温胃舒颗粒", "姊妹产品，主治胃寒", "与养胃舒的适应症区分，避免混淆"],
        ],
        widths=[3.6, 6.6, 5.8],
    )
    p(doc, "特别要求：必须在 AI 回答中把「养胃舒颗粒」与「三九胃泰颗粒」的适应症、人群、剂型明确区分。当前 AI 平台大量将两者混为一谈，属于优先纠偏项。", bold=True)

    h3(doc, "2. 双侧独立建组")
    bullet(doc, "C 端 · 消费者选药场景：品牌推荐、排行榜、性价比、口碑、症状与人群场景（慢性胃炎调理、熬夜加班、中老年、家庭常备等）。")
    bullet(doc, "B 端 · 渠道场景：药店进货、医院配备、医保报销、货源与供应链的品类问法。")
    p(doc, "C 端与 B 端分开建词库、分开投放、分开验收，任何一侧超额完成不得抵扣另一侧的缺口。")

    h3(doc, "3. 重点平台")
    p(doc, "豆包 · DeepSeek · 元宝 · 千问 · Kimi")
    p(doc, "以上五个平台为核心阵地，服务方须确保每日监测全覆盖。项目期内如出现月活环比增长超过 50% 的新兴生成式 AI 平台，服务方须在 3 个工作日内提交平台扩展建议方案，经招标人确认后纳入服务范围，不另行增加服务费用。")

    h2(doc, "二、核心服务内容——六大执行模块")

    h3(doc, "模块一：词库体系搭建与迭代")
    numbered(doc, 1, "分别搭建 C 端与 B 端词库，词条按「通用层／场景层」两级组织，其中购买意图明确的问法应占 80% 以上。")
    numbered(doc, 2, "词条来源须穷举：固定问法、行业与产品的购买动机／场景画像／核心卖点／核心痛点、搜索下拉、社媒热议。")
    numbered(doc, 3, "词条须经清洗打标，剔除非购买意图、与产品定位不符、品类共性、涉及产品痛点、搜索意图过低、重复六类无效词。")
    numbered(doc, 4, "合同签订后 10 个工作日内提交初版词库矩阵（C 端不少于 35 条监测词、B 端不少于 25 条），经招标人审批后启动执行。")
    numbered(doc, 5, "每月根据平台反馈与监测数据动态更新，及时增补或替换低效词。")

    h3(doc, "模块二：合规内容创作与分发")
    numbered(doc, 1, "围绕词库体系持续产出：产品评测、用药科普、症状与场景解读、用户口碑、医生问答、FAQ 结构化内容等多种体裁。")
    numbered(doc, 2, "内容须先过医学审核再发布：由具备医学背景的撰稿团队产出，经执业医师或药师复核，招标人终审。")
    numbered(doc, 3, "内容须符合 EEAT 原则（经验、专业、权威、信任），并符合《广告法》《药品广告审查办法》《互联网广告管理办法》：不得暗示或宣称治愈率、有效率；不得使用「根治」「无副作用」「最好的胃药」等绝对化表述；不得利用患者形象或名义作证明；OTC 产品科普须标注「请仔细阅读说明书或在药师指导下购买和使用」。")
    numbered(doc, 4, "每条内容须登记发布平台、发布链接、发布时间、审核记录，实现全链路可溯源。")
    numbered(doc, 5, "方案中须明确月度内容产出规划与操作手段。原则上月度不低于 100 篇，其中图文科普类不少于 800 字，FAQ 结构化内容不少于 300 字。轻量级补充内容可额外发布，不计入考核。")

    h3(doc, "模块三：专业信源建设与投放")
    numbered(doc, 1, "药品数据库类：完成国家药监局数据库信息核对，以及用药助手、大易医学、药智网等专业药品库的产品条目收录与信息准确性校正。")
    numbered(doc, 2, "医生问答类：在小荷健康、丁香医生、有问必答等医生问答平台建设合规问答内容，须为真实执业医师作答。")
    numbered(doc, 3, "健康门户类：在专业健康门户与权威媒体健康频道建设产品与品类内容。")
    numbered(doc, 4, "公域高权重账号：知乎、小红书、百家号、头条、B 站等平台的高权重账号投放。")
    numbered(doc, 5, "建立信源溯源追踪机制：当 AI 回答提及养胃舒的卖点或适应症时，须识别并备案底层引用来源，清晰呈现哪一篇内容真正影响了 AI 输出。")
    numbered(doc, 6, "每月输出「平台算法变化观察」，说明规则变动与相应调整策略。")

    h3(doc, "模块四：药品库与官网基础建设")
    numbered(doc, 1, "完成官网产品页、说明书页、FAQ 页的结构化数据（Schema.org / Drug、FAQPage）部署。")
    numbered(doc, 2, "修复 robots.txt 抓取权限、sitemap 缺失、标题层级不规范、页面结构不清晰等基础问题。")
    numbered(doc, 3, "补齐官网缺失的产品信息、使用场景、售后与购买渠道信息。")
    numbered(doc, 4, "完成线上线下渠道（电商旗舰店、连锁药房页面）的品牌与产品信息一致性校正。")

    h3(doc, "模块五：负面与错误信息纠偏")
    numbered(doc, 1, "建立品牌在 AI 平台的「健康度基线」，实时监测负面与不实信息。")
    numbered(doc, 2, "优先纠偏项：与三九胃泰颗粒混淆、功效被夸大为「根治」、禁忌与不良反应表述错误、对比场景中只推荐竞品。")
    numbered(doc, 3, "发现负面或错误内容后即刻启动合规稀释与信源置换策略，并在周报中同步进展。")
    numbered(doc, 4, "不得采用删帖、水军、技术手段干预平台排序等违规方式处理负面。")

    h3(doc, "模块六：数据监测与运营复盘")
    numbered(doc, 1, "部署 GEO 专属监测系统，招标人可随时登录查看实时数据看板。")
    numbered(doc, 2, "采集须为真实 AI 平台抓取，非模拟数据；全流程截图归档，截图覆盖率 100%。")
    numbered(doc, 3, "按工作日／周／月／季度／项目末节奏提交运营报告。")

    h2(doc, "三、交付物清单")
    table(
        doc,
        ["周期", "交付物", "格式要求"],
        [
            ["合同签订后 10 个工作日内", "初版词库矩阵 ＋ 执行方案明细 ＋ 医学审核流程说明", "可编辑文档"],
            ["每工作日", "监测数据", "实时数据看板（招标人账号可登录查看）"],
            ["每周", "周报", "含提及率趋势、本周内容发布明细、收录情况、下周计划"],
            ["每月", "月报", "含 KPI 达成率、发布与收录核销表、各平台引用率对比、信源溯源台账、负面纠偏进展、风险预警"],
            ["每季度", "季报", "含阶段策略评估、竞品动态观察、下阶段优化建议"],
            ["每阶段末", "阶段验收报告", "含第三方系统报告 ＋ 人工验真报告，作为结算依据"],
            ["项目末", "年度总结报告", "完整数据复盘 ＋ 品牌 AI 生态资产盘点 ＋ 长效运营建议 ＋ 信源溯源全链路台账"],
        ],
        widths=[4.4, 6.6, 5.0],
        body_size=9.5,
    )
    p(doc, "报告质量要求：月报及以上级别须包含数据可视化图表；引用数据须附截图证明；信源溯源须逐条列明 AI 回答参考来源与服务方发布内容的对应关系，并支持导出原始引用清单。")

    h2(doc, "四、KPI 设定原则（重要）")
    p(doc, "本项目不设定超出行业物理上限的指标。招标人认为，做不到的 KPI 只会买到假数据：指标超出物理上限时，有交付能力的公司算完成本便会退场，留下的公司只能用预设提示词、老会话与修图凑出「达标」报告。")
    p(doc, "因此本项目 KPI 遵循以下三条设定原则：")
    numbered(doc, 1, "先测基线，再定增量。所有目标值以进场体检的实测基线为起点分阶段约定，不使用绝对值空口承诺。")
    numbered(doc, 2, "平台决定的事不写成服务方承诺。收录率与引用占比按信源分档考核（专业信源收录率 ≥ 60%、公域平台 ≥ 30%），并要求提交可导出的原始引用清单，不设「全平台收录率 ≥ 80%」一类无法控制的硬承诺。")
    numbered(doc, 3, "不要求单调上涨。以「阶段目标 ＋ 每月 4 次采样均值」考核，替代「月月环比提升不得下滑」。平台发生重大改版时，双方启动复测并对目标进行重新校准。")

    h2(doc, "五、验收标准：分类分阶段")
    h3(doc, "基线（GEO ONE 监测系统 2026 年 8 月实测）")
    table(
        doc,
        ["对象", "提及率", "TOP1 提及率", "备注"],
        [
            ["C 端优化词", "1.4%", "0%", "竞品排名 NO.17 / 296"],
            ["B 端优化词", "3.4%", "0%", "竞品排名 NO.22 / 795"],
            ["监测词 · 舆情", "C 端负面 7%", "B 端负面 15%", "60 条监测词"],
        ],
        widths=[3.6, 3.4, 3.4, 5.6],
    )

    h3(doc, "分类分阶段目标与罚则")
    table(
        doc,
        ["验收对象", "阶段一（1–3 月）", "阶段二（4–9 月）", "阶段三（10–12 月）", "未达标处理"],
        [
            [
                "C 端优化词\n（12 条核心，自 35 条监测池圈定）",
                "提及率 8%\nTOP1 0.5%",
                "提及率 12%\nTOP1 5%",
                "提及率 25%\nTOP1 10%",
                "达标不足 4 条：当阶段服务费按缺口比例暂缓支付，进入 1 个月观察期；观察期仍未达标，该部分不予支付",
            ],
            [
                "B 端优化词\n（8 条核心，自 25 条监测池圈定）",
                "提及率 15%\nTOP1 1%",
                "提及率 20%\nTOP1 5%",
                "提及率 35%\nTOP1 12%",
                "达标不足 3 条：同上按缺口比例暂缓与核减；不允许用 C 端超额抵扣 B 端缺口",
            ],
            [
                "监测词 · 舆情\n（60 条）",
                "建立基线\n负面不上升",
                "负面压降至\n5% 以内",
                "正面占比\n≥ 80%",
                "单条错误信息超 30 天未纠偏：按条扣款，单月扣款上限为当月服务费的 20%",
            ],
            [
                "基础档案\n（药品库与官网）",
                "药品库收录完成",
                "官网问题整改率 100%",
                "结构化数据与 FAQ 全量上线",
                "逾期未完成：按合同总额万分之三／日计违约金，直至完成或从尾款中核减",
            ],
        ],
        widths=[3.2, 2.8, 2.8, 2.8, 4.4],
        head_size=9,
        body_size=9,
    )
    p(doc, "付款节奏：预付 20% ／ 阶段一验收后 25% ／ 阶段二验收后 30% ／ 阶段三验收后 25%。", bold=True)

    h2(doc, "六、数据验真办法（重要）")
    p(doc, "任何一方的数据都不能自己说了算。每个阶段验收须同时通过以下两道关：")

    h3(doc, "第一道 · 第三方数据系统报告")
    numbered(doc, 1, "谁出报告：由招标人指定或双方共同认可的第三方监测系统出具，服务方只有查看权，没有修改权与导出编辑权。")
    numbered(doc, 2, "报告必须含：原始查询日志、AI 答案原文、引用来源链接、答案分享链接、截图、IP 与时间戳，逐条可回溯。")
    numbered(doc, 3, "采样规则由招标人确定：每词条 × 每平台 × 每天不少于 100 次；统一新建会话、深度思考 ＋ 联网检索模式；手机端与电脑端同时覆盖。")
    numbered(doc, 4, "明确不接受：服务方自己查自己截的图、服务方后台导出的汇总表、只给百分比不给原始清单的报告。")

    h3(doc, "第二道 · 专业团队人工验真")
    numbered(doc, 1, "谁来验：招标人付费邀请独立第三方专业团队，既不是服务方，也不是招标人的项目执行部门。")
    numbered(doc, 2, "怎么验：甲乙双方各 20 台真机，随机抽取 20% 词条，全部在新对话下现场复现，逐条生成可分享的答案链接。")
    numbered(doc, 3, "核对什么：品牌是否被提及、提及位次、引用来源是否真为服务方发布的内容、答案表述是否合规。")
    numbered(doc, 4, "结果怎么用：系统数据与人工复核偏差超过 20% 时，当期一律以人工复核数据为准，并以人工验真报告作为结算依据。")

    h2(doc, "七、合规要求与违约红线")
    h3(doc, "合规要求")
    numbered(doc, 1, "内容真实、准确、原创，符合各平台内容政策、国家法律法规与 EEAT 标准。")
    numbered(doc, 2, "严格遵守《广告法》《药品管理法》《药品广告审查办法》《互联网广告管理办法》。")
    numbered(doc, 3, "全程由投标方自有专职团队操盘，医学审核不得外包。")
    numbered(doc, 4, "使用的内容素材须拥有合法版权或授权，由此产生的版权纠纷由服务方承担。")
    numbered(doc, 5, "投放链接可追踪、可核销，实现内容发布 → 平台收录 → AI 引用全链路可溯源。")

    h3(doc, "违约红线")
    p(doc, "以下情形招标人有权终止合作并追究责任：")
    table(
        doc,
        ["情形", "处理"],
        [
            ["连续两个阶段未达标", "招标人可单方终止合同，已付未消耗费用全额退回"],
            ["数据造假（预设提示词截图、复用老会话、修改截图或汇总表等）", "全额退款 ＋ 合同总额 20% 违约金，终止合作并列入供应商黑名单"],
            ["分包或转包", "视同根本违约，按上一条同等处理"],
            ["虚假或夸大内容、刷量操控、技术劫持算法", "同上，并由服务方承担全部行政与法律责任"],
            ["借用无关资质、案例造假", "投标阶段发现即废标；履约阶段发现按根本违约处理"],
        ],
        widths=[6.4, 9.6],
        body_size=10,
    )

    page_break(doc)

    # ========== 第三部分 ==========
    h1(doc, "第三部分　招标门槛与评标办法")
    p(doc, "本项目的门槛不设在「承诺了什么」，而设在「当场做得出什么」。四道门槛全部为可当场验证的硬指标。")

    h2(doc, "门槛一：数据查询能力（现场闭卷）")
    h3(doc, "怎么考")
    p(doc, "开标当天现场发放词条包：200 条词条 × 5 个平台 × 10 次采样，约 1 万条查询任务。投标方须在 2 小时内一次性提交全量结果，结果须含答案原文、品牌提及情况、引用链接与时间戳。")
    h3(doc, "淘汰线")
    bullet(doc, "逾期提交、分批提交、事后补交，一律作废；")
    bullet(doc, "现场从提交结果中随机抽取 20 条要求复现，偏差超过 20% 判定不通过；")
    bullet(doc, "未通过者不进入方案述标环节。")
    p(doc, "说明：手工逐条提问的公司，2 小时最多完成几百条；具备自建调度采集系统的公司，1 万条属于常规日产能。此门槛用于区分是否真的拥有可用的监测系统。")

    h2(doc, "门槛二：投放资源与投放逻辑")
    h3(doc, "怎么考")
    p(doc, "逐条列清投放资源：平台名称、账号量级、合作形式（自有／直签／代理）、单篇成本区间，并附被 AI 引用的实证截图。同时须讲清投放逻辑——各平台在目标 AI 上的引用权重排序、医药类内容的合规准入要求、为什么投这些平台。")
    h3(doc, "淘汰线")
    bullet(doc, "说不清账号归属与成本结构的，按转包处理；")
    bullet(doc, "资源清单接受当场抽查核验，抽查不到即视为虚报，按案例造假处理。")

    h2(doc, "门槛三：方案专业度（第一权重）")
    h3(doc, "怎么考")
    p(doc, "提交完整、可执行的方案：词库体系、内容与投放排期、医学审核流程、人员配置、阶段里程碑。方案须能落到「谁在哪一天做什么」，不得停留在方法论层面。")
    h3(doc, "淘汰线")
    p(doc, "方案分为第一权重，价格次之。方案分低于满分 60%（即低于 33 分）的，不进入商务标环节。")

    h2(doc, "门槛四：异常低价约束")
    p(doc, "见下文「报价规则与低价惩罚」。")

    h2(doc, "评标权重")
    table(
        doc,
        ["项目", "权重"],
        [
            ["方案", "55 分"],
            ["资源与团队", "25 分"],
            ["价格", "20 分"],
            ["合计", "100 分"],
        ],
        widths=[8.0, 8.0],
    )
    p(doc, "说明：价格分满分只有 20 分，方案分满分 55 分。杀价到底最多多拿 20 分，方案差一个档就掉 15 分——低价买不到中标。")

    h2(doc, "报价规则与低价惩罚")
    p(doc, "不依赖评委主观判断「多低算太低」，改用统计规则。")

    h3(doc, "第一步：计算基准价 P")
    quote(doc, "P = 剔除最高价与最低价各 1 家后，其余有效报价的算术平均值")
    p(doc, "投标不足 5 家时不剔除极值，直接取全部有效报价的算术平均值。")

    h3(doc, "第二步：计算价格分")
    quote(doc, "价格分 = 20 − 0.6 × D　　其中　D = |报价 − P| ÷ P × 100")
    p(doc, "D 为偏离百分点。公式双向对称，报高价同样扣分；价格分最低触底 0 分，不出现负分。")

    h3(doc, "第三步：低价三条附加线（仅适用于低于基准价一侧）")
    table(
        doc,
        ["区间", "名称", "价格分", "附加措施"],
        [
            ["偏离 ≤ 10 个百分点", "正常竞争区", "14 ~ 20 分", "按公式计分，无附加要求"],
            ["偏离 10 ~ 25 个百分点", "警示区", "5 ~ 14 分", "须随标提交《成本构成说明》与人力投入清单，缺项价格分归零"],
            ["低于基准价 25% 以上", "重罚区", "0 分", "价格分直接归零；《成本构成说明》无法自证的，在评标总分上再倒扣 10 分"],
            ["低于基准价 40% 以上", "废标区", "不计分", "认定为低于成本的恶意报价，作无效标处理，不进入评审"],
        ],
        widths=[4.0, 2.8, 2.4, 6.8],
        head_size=9.5,
        body_size=9.5,
    )

    h3(doc, "实算示例（预算上限 300 万，6 家投标）")
    p(doc, "剔除最高价 300 万与最低价 150 万后，其余四家（290、275、255、180）均值为 250 万，即基准价 P = 250 万。")
    table(
        doc,
        ["投标方", "报价", "相对基准价", "价格分", "处理"],
        [
            ["甲", "300 万", "+20.0%", "8.0", "正常计分"],
            ["乙", "290 万", "+16.0%", "10.4", "正常计分"],
            ["丙", "275 万", "+10.0%", "14.0", "正常计分"],
            ["丁", "255 万", "+2.0%", "18.8", "正常计分 · 价格分最高"],
            ["戊", "180 万", "−28.0%", "0", "重罚：价格分归零 ＋ 倒扣 10 分"],
            ["己", "150 万", "−40.0%", "—", "废标：不进入评审"],
        ],
        widths=[2.4, 2.6, 3.2, 2.6, 5.2],
    )
    p(doc, "规则要点：基准价由所有投标方共同决定，评委不需要判断「多低算太低」。报价越贴近同行共识越占优，越想靠杀价搅局，扣得越狠——最靠近基准价的丁拿到最高价格分 18.8，报 180 万的戊反而净输 10 分。")

    h3(doc, "报价其他要求")
    numbered(doc, 1, "报价须包括完成本项目有关的一切事务、费用，以及由税务部门规定由投标人缴纳的各种税项。")
    numbered(doc, 2, "投标人必须按招标文件要求填写报价表，不得更改清单内容，否则视为废标。")
    numbered(doc, 3, "中止条款：服务质量需符合招标人要求，招标人可随时中止后续合作，费用按已发生并验收合格部分结算。")
    numbered(doc, 4, "投标人应主动获取影响报价的所有信息资料。中标后以任何理由提出的额外索赔不予考虑。")

    page_break(doc)

    # ========== 第四部分 ==========
    h1(doc, "第四部分　资质条件与讲解要求")

    h2(doc, "一、资质条件")
    numbered(doc, 1, "主营业务为 GEO / AI 品牌优化，独立法人，成立满 3 年及以上。")
    numbered(doc, 2, "拥有自有专职技术研发团队、自有医学内容审核团队及自有 GEO 专属监测系统，全程自主运营。")
    numbered(doc, 3, "近 2 年拥有医药（OTC 优先）、大健康品类 GEO 真实落地案例，可提供完整监测数据与客户可核实的联系方式。")
    numbered(doc, 4, "医学审核团队须有执业医师或执业药师在册，可提供资格证明。")
    numbered(doc, 5, "本项目不接受联合体投标，亦不得分包或转包。")

    h2(doc, "二、讲解要求")
    numbered(doc, 1, "方案 PPT ＋ 纸质版装订成册 ＋ 执行案例完整数据 ＋ 服务团队介绍。")
    numbered(doc, 2, "须现场演示 GEO 监测系统：展示多设备多 IP 监测、信源溯源、原始日志导出、数据看板等功能。")
    numbered(doc, 3, "须现场说明医学审核流程，并出示内容样本与被 AI 引用的收录证明。")
    numbered(doc, 4, "须现场讲解 C 端与 B 端词库的构建逻辑与清洗打标规则。")
    numbered(doc, 5, "述标不超过 30 分钟，技术标中不得涉及商务报价。")

    page_break(doc)

    # ========== 第五部分 ==========
    h1(doc, "第五部分　投标文件格式")

    h2(doc, "一、技术标目录")
    numbered(doc, 1, "技术标目录")
    numbered(doc, 2, "投标书（按招标文件要求填写并加盖公章）")
    numbered(doc, 3, "授权委托书（按招标文件要求填写并加盖公章）")
    numbered(doc, 4, "法人代表证明书（按招标文件要求填写并加盖公章）")
    numbered(doc, 5, "营业执照（复印件加盖公章）")
    numbered(doc, 6, "公司资料（公司简介、服务团队介绍、医学审核团队资格证明）")
    numbered(doc, 7, "项目负责人与服务团队清单（含接口人履历）")
    numbered(doc, 8, "投标方案（电子文件 PPT、打印版 A4 画册、方案存储 U 盘，需讲解）")
    numbered(doc, 9, "同类标杆案例 2 ~ 3 个，含完整监测数据")
    numbered(doc, 10, "保密协议（按附件要求填写并加盖公章）")
    numbered(doc, 11, "投标人认为有必要补充的其他资料")

    h2(doc, "二、商务标目录")
    numbered(doc, 1, "商务标目录")
    numbered(doc, 2, "报价一览表（按招标文件要求填写并加盖公章）")
    numbered(doc, 3, "《成本构成说明》与人力投入清单（报价低于基准价 10% 以上者必交）")
    numbered(doc, 4, "投标人认为有必要补充的其他资料")

    p(doc, "", first_line=False, space_after=18)
    p(doc, "〈以下无正文〉", align="center", first_line=False, space_before=24, space_after=6)
    p(doc, "— 全文完 —", align="center", first_line=False, space_after=0)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc.save(str(OUT))
    print(f"saved {OUT}")
    print(f"size {OUT.stat().st_size} bytes")


if __name__ == "__main__":
    build()
