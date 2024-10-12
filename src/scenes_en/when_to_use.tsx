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

  yield* titleRef().text('🎬When to Use?', 0.7);
  yield* waitFor(3.5);
  yield* titleRef().y(-350, 0.3);

  yield* whenToUseRef().text(
    `
This pattern is useful when you have a general process that needs to be shared among multiple classes, but certain steps need to be customized based on specific requirements.
    `,
    2
  );

  yield* waitUntil('summary');
  yield* slideOut(whenToUseRef, [0, 1000]);
  yield* titleRef().opacity(0, 0.3);
  titleRef().text('📝Summary');
  yield* titleRef().opacity(1, 0.3);
  yield* summaryRef().text(
    `
The Template Method Design Pattern allows you to define the skeleton of an algorithm, enabling subclasses to redefine certain steps without changing the overall structure.
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
