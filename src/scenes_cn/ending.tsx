import { Grid, Txt, makeScene2D } from '@motion-canvas/2d';
import {
  all,
  createRef,
  loopFor,
  loopUntil,
  waitFor,
  waitUntil,
} from '@motion-canvas/core';
import { setupView } from '../common/styles';
import { Logo } from '../common/logo';

export default makeScene2D(function* (view) {
  // Create your animations here
  setupView(view);

  view.add(
    <Grid
      width={'100%'}
      height={'100%'}
      stroke={'#666'}
      start={0}
      end={1}
    ></Grid>
  );

  const logoRef = createRef<Logo>();
  view.add(<Logo ref={logoRef} x={0} y={0} scale={0} text="@波波微课" />);

  yield* logoRef().scale(0.9, 1);
  yield* waitUntil('s8_start');
  // yield* loopFor(4, () => logoRef().scale(0.8, 0.8).to(1, 0.8));
  yield* waitUntil('s8_end');
});
