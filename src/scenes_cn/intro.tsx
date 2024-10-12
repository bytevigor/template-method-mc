import { Grid, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, createRef, waitUntil } from '@motion-canvas/core';
import { WhiteLabel, setupView } from '../common/styles';
import { Logo } from '../common/logo';
import { slideOut } from '../common/animations';

export default makeScene2D(function* (view) {
  // Create your animations here
  setupView(view);

  const title = createRef<Txt>();
  const subTitle = createRef<Txt>();

  view.add(
    <Grid width={'100%'} height={'100%'} stroke={'#666'} start={0} end={1}>
      <Txt ref={title} {...WhiteLabel} fontSize={125} y={-70}></Txt>
      <Txt ref={subTitle} {...WhiteLabel} fontSize={100} y={100}></Txt>
    </Grid>
  );

  const logoRef = createRef<Logo>();
  view.add(<Logo ref={logoRef} x={0} y={0} scale={0} text="@波波微课" />);

  yield* logoRef().scale(1, 1);
  yield* waitUntil('s1_start');
  yield logoRef().animateToCorner();

  yield* title().text(`📋模板方法`, 1);
  yield* subTitle().text('Template Method', 1);

  yield* waitUntil('s1_end');
  yield* all(
    slideOut(title, [0, -1000]),
    slideOut(subTitle, [0, -1000]),
    slideOut(logoRef, [0, 1000])
  );
});
