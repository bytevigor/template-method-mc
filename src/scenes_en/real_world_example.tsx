import { Grid, Img, Txt, makeScene2D } from '@motion-canvas/2d';
import { createRef, waitFor, waitUntil, all } from '@motion-canvas/core';
import { WhiteLabel, setupView } from '../common/styles';
import chef from '../images/chef.webp';

export default makeScene2D(function* (view) {
  setupView(view);

  const titleRef = createRef<Txt>();
  const chefRef = createRef<Img>();

  view.add(
    <Grid width={'100%'} height={'100%'} stroke={'#666'} start={0} end={1}>
      <Txt ref={titleRef} {...WhiteLabel} y={0} fontSize={100}></Txt>
      <Img ref={chefRef} src={chef} scale={0} y={100} x={0}></Img>
    </Grid>
  );

  yield* waitUntil('s2_start');

  yield* titleRef().text('Real World Example', 0.7);
  yield* waitFor(0.5);
  yield* titleRef().y(-350, 0.3);

  yield* waitUntil('chef');
  yield* chefRef().scale(0.4, 0.5);

  yield* waitUntil('s2_end');
  yield* all(titleRef().opacity(0, 0.5), chefRef().opacity(0, 0.5));
});
