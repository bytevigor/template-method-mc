import { Grid, Txt, makeScene2D } from '@motion-canvas/2d';
import { createRef, waitFor, waitUntil, all } from '@motion-canvas/core';
import { WhiteLabel, setupView } from '../common/styles';
import { slideOut } from '../common/animations';

export default makeScene2D(function* (view) {
  // Create your animations here
  setupView(view);

  const titleRef = createRef<Txt>();
  const whenToUseRef = createRef<Txt>();
  const summaryRef = createRef<Txt>();

  view.add(
    <Grid width={'100%'} height={'100%'} stroke={'#666'} start={0} end={1}>
      <Txt ref={titleRef} {...WhiteLabel} y={0} fontSize={100}></Txt>
      <Txt
        ref={whenToUseRef}
        {...WhiteLabel}
        fontSize={50}
        x={0}
        y={50}
        width={'80%'}
        textWrap={true}
      ></Txt>
      <Txt
        ref={summaryRef}
        {...WhiteLabel}
        fontSize={50}
        x={0}
        y={50}
        width={'80%'}
        textWrap={true}
      ></Txt>
    </Grid>
  );

  yield* waitUntil('s7_start');

  yield* titleRef().text('🎬适用场合', 0.7);
  yield* waitFor(3.5);
  yield* titleRef().y(-350, 0.3);

  yield* whenToUseRef().text(
    `
当你有一个通用的流程需要多个类共享，但某些步骤需要根据具体情况进行自定义时，可以考虑使用模板方法设计模式。
    `,
    2
  );

  yield* waitUntil('summary');
  yield* slideOut(whenToUseRef, [0, 1000]);
  yield* titleRef().opacity(0, 0.3);
  titleRef().text('📝本课小结');
  yield* titleRef().opacity(1, 0.3);
  yield* summaryRef().text(
    `
模板方法设计模式通过定义一个算法的骨架，允许子类在不改变算法结构的前提下重新定义算法的某些步骤。它提高了代码的复用性和扩展性，使我们能够轻松地在不同场景下使用相同的算法框架。
      `,
    0.7
  );
  yield* waitUntil('s7_end');
  yield* all(
    slideOut(titleRef, [0, -1000]),
    slideOut(whenToUseRef, [0, 1000]),
    slideOut(summaryRef, [0, 1000])
  );
});
