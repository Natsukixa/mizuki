---
title: "调机器优化指南"
published: 2025-08-25
pinned: true
description: "全面解析FPS游戏系统优化方法，适用中高配置电脑，包含N卡设置、系统优化和游戏设置。"
tags: [游戏优化, FPS, NVIDIA, 系统调优]
category: "游戏优化"
licenseName: "MIT"
author: "秋绘w"
draft: false
date: 2025-08-25
# 主封面图
images:
  - url: './1.png'
    alt: 'NVIDIA控制面板-调整桌面尺寸和位置设置界面'
  - url: './2.png'
    alt: '禁用全屏优化设置界面'
  - url: './3.png'
    alt: 'NVIDIA控制面板-配置Surround PhysX界面'
  - url: './4.png'
    alt: 'NVIDIA控制面板-管理3D设置界面'
  - url: './5.png'
    alt: '显示卡设置界面'
pubDate: 2025-01-20
---

# 调机器优化

针对FPS游戏进行系统优化，适用中高配置电脑。

## N卡优化

1. 管理3D设置
   ![管理3D设置](./4.png)

2. 调整桌面尺寸和位置
   ![调整桌面尺寸和位置](./1.png)

3. 配置Surround PhysX
   ![配置Surround PhysX](./3.png)

## 系统设置

1. 显示卡设置（替换为对应游戏）
   ![显示卡设置](./5.png)

2. 禁用全屏优化（找到对应的游戏程序，右键属性）
   ![禁用全屏优化](./2.png)

<br/>

## Apex游戏设置

1. 启动项设置
```
-novid -mat_minmize_on_alt_tab1 +lobby_max_fps0 -high +fps_max unlimited

```