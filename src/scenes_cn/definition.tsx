import { Grid, Img, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, createRef, waitFor, waitUntil } from '@motion-canvas/core';
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

  yield* titleRef().text('定义', 0.5);
  yield* titleRef().y(-350, 0.2);
  yield* defintionRef().text(
    `模板方法设计模式让你能够定义一个算法的通用结构，并将具体的实现延迟到子类中。`,
    1
  );
  yield* waitUntil('wiki');

  yield* defintionRef().opacity(0, 0.2);
  yield* defintionRef().text(``, 0.2);
  yield* defintionRef().opacity(1, 0.2);

  yield* all(
    defintionRef().text(
      `
模板方法是一种行为设计模式，它在基类中定义了一个算法的骨架，并允许子类在不改变算法结构的前提下重新定义算法的某些步骤。
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
  yield* titleRef().text('模板方法 vs. 策略', 0.5);

  yield* waitUntil('comp1');
  yield* defintionRef().y(50, 0.2);
  yield* defintionRef().text(
    `模板方法和策略模式都是用于定义算法的设计模式，但它们的侧重点不同。模板方法模式强调的是在一个通用框架内定义算法的结构，然后让子类根据需要重写部分步骤。它关注的是一个固定的流程，而不是选择不同的算法。而策略模式则更关注算法的可替换性。它允许你在运行时选择不同的算法实现，但不会影响算法的结构。`,
    1
  );

  yield* waitUntil('comp2');
  yield* defintionRef().opacity(0, 0.2);
  yield* defintionRef().text(``, 0.2);
  yield* defintionRef().opacity(1, 0.2);
  yield* defintionRef().text(
    `策略模式将算法的每个实现封装在独立的类中，并通过接口使它们可以互换使用，而模板方法则是通过继承来实现算法结构的部分定制。`,
    1
  );

  yield* waitUntil('s3_end');
  yield* all(
    titleRef().opacity(0, 0.5),
    defintionRef().opacity(0, 0.5),
    wikipediaIconRef().opacity(0, 0.5)
  );
});
