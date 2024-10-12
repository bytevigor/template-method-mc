import { Grid, Img, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, createRef, waitUntil } from '@motion-canvas/core';
import { Colors, WhiteLabel, setupView } from '../common/styles';
import wikipideaIcon from '../images/Wikipedia-logo-v2-en.svg.png';

export default makeScene2D(function* (view) {
  // Create your animations here
  setupView(view);

  const titleRef = createRef<Txt>();
  const defintionRef = createRef<Txt>();
  const wikipediaIconRef = createRef<Img>();

  view.add(
    <Grid width={'100%'} height={'100%'} stroke={'#666'} start={0} end={1}>
      <Txt ref={titleRef} {...WhiteLabel} y={0} fontSize={100}></Txt>
      <Txt
        ref={defintionRef}
        {...WhiteLabel}
        fontSize={50}
        x={0}
        y={-50}
        width={'85%'}
        textWrap={true}
      ></Txt>
      <Img
        ref={wikipediaIconRef}
        src={wikipideaIcon}
        scale={0}
        x={0}
        y={250}
        fill={Colors.sapphire}
      ></Img>
    </Grid>
  );

  yield* waitUntil('s3_start');

  yield* titleRef().text('Definition', 0.5);
  yield* titleRef().y(-350, 0.2);
  yield* defintionRef().text(
    `The Template Method Design Pattern lets you define the general structure of an algorithm while deferring the implementation of certain steps to subclasses.`,
    1
  );
  yield* waitUntil('wiki');

  yield* defintionRef().opacity(0, 0.2);
  yield* defintionRef().text(``, 0.2);
  yield* defintionRef().opacity(1, 0.2);

  yield* all(
    defintionRef().text(
      `
The Template Method is a behavioral design pattern that defines the skeleton of an algorithm in a base class, allowing subclasses to redefine specific steps without changing the algorithm’s structure.
    `,
      1
    ),
    wikipediaIconRef().scale(0.25, 1)
  );

  yield* waitUntil('compare');
  yield* all(
    titleRef().opacity(0, 0.2),
    defintionRef().opacity(0, 0.2),
    wikipediaIconRef().opacity(0, 0.2)
  );
  titleRef().text('');
  defintionRef().text('');
  yield* all(titleRef().opacity(1, 0.2), defintionRef().opacity(1, 0.2));
  yield* titleRef().text('Template Method vs. Strategy', 0.5);

  yield* waitUntil('comp1');
  yield* defintionRef().y(50, 0.2);
  yield* defintionRef().text(
    `The Template Method emphasizes defining the structure of an algorithm within a common framework, allowing subclasses to override parts of the process as needed. It focuses on a fixed process rather than choosing between different algorithms.`,
    1
  );

  yield* waitUntil('comm11');
  yield* defintionRef().opacity(0, 0.2);
  yield* defintionRef().text(``, 0.2);
  yield* defintionRef().opacity(1, 0.2);
  yield* defintionRef().text(
    `The Strategy Pattern emphasizes the interchangeability of algorithms. It allows you to choose between different algorithm implementations at runtime without affecting the structure of the algorithm.`,
    1
  );

  yield* waitUntil('comp2');
  yield* defintionRef().opacity(0, 0.2);
  yield* defintionRef().text(``, 0.2);
  yield* defintionRef().opacity(1, 0.2);
  yield* defintionRef().text(
    `The Strategy Pattern encapsulates each implementation in separate classes, making them interchangeable through interfaces, while the Template Method achieves partial customization through inheritance.`,
    1
  );

  yield* waitUntil('s3_end');
  yield* all(
    titleRef().opacity(0, 0.5),
    defintionRef().opacity(0, 0.5),
    wikipediaIconRef().opacity(0, 0.5)
  );
});
