import { makeProject } from '@motion-canvas/core';

import intro from './scenes_cn/intro?scene';
import real_world_example from './scenes_cn/real_world_example?scene';
import definition from './scenes_cn/definition?scene';
import java_code_example from './scenes_cn/java_code_example?scene';
import when_to_use from './scenes_cn/when_to_use?scene';
import ending from './scenes_cn/ending?scene';
import audio from './audio/template_method_cn.mp3';
import { Code, LezerHighlighter } from '@motion-canvas/2d';
import { parser } from '@lezer/java';

Code.defaultHighlighter = new LezerHighlighter(parser);

export default makeProject({
  experimentalFeatures: true,
  scenes: [
    intro,
    real_world_example,
    definition,
    java_code_example,
    when_to_use,
    ending,
  ],
  audio: audio,
});
