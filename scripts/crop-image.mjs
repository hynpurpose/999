#!/usr/bin/env node
/**
 * 按像素区域裁剪图片（用于把网页截图裁到 PPT 需要的画幅）。
 * 用法: node scripts/crop-image.mjs <输入> <输出> <x> <y> <宽> <高>
 */
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const [input, output, x, y, w, h] = process.argv.slice(2);
if (!input || !output || w === undefined) {
  console.error('用法: node scripts/crop-image.mjs <输入> <输出> <x> <y> <宽> <高>');
  process.exit(1);
}

const ps = `
Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Image]::FromFile('${path.resolve(input)}')
$bmp = New-Object System.Drawing.Bitmap ${w}, ${h}
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($src, (New-Object System.Drawing.Rectangle 0,0,${w},${h}), (New-Object System.Drawing.Rectangle ${x},${y},${w},${h}), [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$src.Dispose()
$bmp.Save('${path.resolve(output)}', [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output 'cropped ${w}x${h}'
`;

console.log(execFileSync('powershell', ['-NoProfile', '-Command', ps], { encoding: 'utf8' }).trim());
