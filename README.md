# 模版方法设计模式视频教程源码

模版方法设计模式视频教程，中英文双语，使用[MotionCanvas](https://motioncanvas.io/)制作。

## 运行

要求先安装 node.js 16 或以上版本

```shell
npm install
npm start
```

访问`http://localhost:9000`

默认运行的是中文版，改成英文版只需修改`src\project.ts`，将**所有**导入的中文场景目录改为英文目录，例如：

```ts
import intro from './scenes_cn/intro?scene';
```

改为

```ts
import intro from './scenes_en/intro?scene';
```

## 双语视频制作流程

1. 选题编写中文版文案，手写+ChatGPT 辅助，或 ChatGTP 初稿+手写修改
   1. 提示词：通俗易懂，可以直接朗读的形式(方便 TTS 转成语音)
2. 通过 fliki.ai 生成语音，按需调整用词，标点，间隔时间，尽可能确保流畅
3. 使用 MotionCanvas 制作中文版动画视频，关于 MotionCanvas 的使用，参考我的[B 站系列视频](https://space.bilibili.com/518029478/lists/3499354)
4. 导出并上传到中文视频平台，例如 B 站
5. 使用 ChatGPT 将中文文案翻译成英文文案
   1. 提示词：美式英语，通俗易懂，可以直接朗读的形式(方便 TTS 转成语音)
6. 在 MotionCanvas 中，将中文版场景复制一份，放在英文版目录中，将其中语音改为英文，将场景中的中文文案改为英文，调整[时间事件 Time Events](https://www.bilibili.com/video/BV1ec1CYwEq5)同步动画和语音
7. 导出英文视频并上传到英文视频平台，例如 Youtube

## 好处

- 从中文转其他语言（比如英文）比较方便
- 编程实现各种动画效果
- 可版本控制，修改视频(文案/语音/动画）再导出很快

## 不足

- 入门门槛有点高，需要编程经验，适合程序员
- 刚开始比可视化视频编辑工具耗时，熟练后相当
- MotionCanvas 当前版本仅支持一个 audio，可以使用[Revideo](https://re.video/)支持每个场景一个 audio

## 结论

适合制作周期较长的`精品`类视频，参考 bytebytego。
