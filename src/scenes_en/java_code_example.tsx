import {
  Grid,
  Img,
  Layout,
  Rect,
  Txt,
  lines,
  makeScene2D,
} from '@motion-canvas/2d';
import {
  all,
  createRef,
  DEFAULT,
  waitFor,
  waitUntil,
} from '@motion-canvas/core';
import {
  Colors,
  DataColors,
  Theme,
  WhiteLabel,
  setupView,
} from '../common/styles';
import { createPageRef, Page } from '../common/Page';
import { CSCode } from '../common/Code';

const theme = {
  ...Theme,
  window: '#cc812b',
  event: '#d73838',
  music: '#0880b4',
  component: '#64811b',
  buttons: '#0f0d0c',
};

export default makeScene2D(function* (view) {
  // Create your animations here
  setupView(view);

  const titleRef = createRef<Txt>();
  const coffeeTxtRef = createRef<Txt>();
  const teaTxtRef = createRef<Txt>();

  view.add(
    <Grid width={'100%'} height={'100%'} stroke={'#666'} start={0} end={1}>
      <Txt ref={titleRef} {...WhiteLabel} fontSize={100} y={0}></Txt>
      <Txt
        ref={coffeeTxtRef}
        {...WhiteLabel}
        fontSize={200}
        x={-250}
        y={0}
        opacity={0}
      >
        ☕️
      </Txt>
      <Txt
        ref={teaTxtRef}
        {...WhiteLabel}
        fontSize={200}
        x={250}
        y={0}
        opacity={0}
      >
        🍵
      </Txt>
    </Grid>
  );

  yield* waitUntil('s6_start');

  yield* titleRef().text('Java Code Example', 0.5);

  yield* waitFor(1);
  yield* titleRef().y(-350, 0.3);
  yield* waitFor(0.5);

  yield* waitUntil('coffee_tea');
  yield* all(coffeeTxtRef().opacity(1, 0.5), teaTxtRef().opacity(1, 0.5));

  yield* waitUntil('c1_start');
  yield* all(
    titleRef().y(-700, 0.3),
    coffeeTxtRef().opacity(0, 0.3),
    teaTxtRef().opacity(0, 0.3)
  );

  const caffeineBeverageCode = `
abstract class CaffeineBeverage {
    final void prepareRecipe() {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    }

    abstract void brew();
    abstract void addCondiments();

    void boilWater() {
        System.out.println("Boiling water");
    }

    void pourInCup() {
        System.out.println("Pouring into cup");
    }
}
  `;

  const code1LayoutRef = createRef<Layout>();
  const code1PageRef = createPageRef();
  view.add(
    <Layout ref={code1LayoutRef} opacity={0}>
      <Page
        refs={code1PageRef}
        label="CaffeineBeverage.java"
        badge="Template Method Abstract Class"
        theme={theme}
        stroke={DataColors.main}
        strokeFirst
        width={1200}
        height={820}
        scale={1}
        position={[0, 0]}
        component={CSCode}
        lineHeight={'100%'}
        code={caffeineBeverageCode}
      />
    </Layout>
  );

  yield* code1LayoutRef().opacity(1, 0.5);

  // yield* waitUntil("state");
  // yield* code1PageRef.code.selection(lines(2), 0.6);

  // yield* waitUntil("cont");
  // yield* code1PageRef.code.selection(lines(2, 6), 0.6);

  // yield* waitUntil("get");
  // yield* code1PageRef.code.selection(lines(8, 10), 0.6);

  yield* waitUntil('c2_start');
  yield* code1LayoutRef().opacity(0, 0.5);
  code1LayoutRef().remove();
  code1LayoutRef().dispose();

  const teaCode = `
class Tea extends CaffeineBeverage {
    void brew() {
        System.out.println("Steeping the tea");
    }

    void addCondiments() {
        System.out.println("Adding Lemon");
    }
}
  `;

  const coffeeCode = `
class Coffee extends CaffeineBeverage {
    void brew() {
        System.out.println("Dripping Coffee through filter");
    }

    void addCondiments() {
        System.out.println("Adding Sugar and Milk");
    }
}
    `;

  const code2LayoutRef = createRef<Layout>();
  const code21PageRef = createPageRef();
  const code22PageRef = createPageRef();
  view.add(
    <Layout ref={code2LayoutRef}>
      <Page
        refs={code21PageRef}
        label="Tea.java"
        badge="Tea Class"
        theme={theme}
        stroke={DataColors.main}
        width={1100}
        height={550}
        scale={0.8}
        position={[-460, -50]}
        component={CSCode}
        lineHeight={'100%'}
        code={teaCode}
      />
      <Page
        refs={code22PageRef}
        label="Coffee.java"
        badge="Coffee Class"
        theme={theme}
        stroke={DataColors.main}
        width={1100}
        height={550}
        scale={0.8}
        position={[460, -50]}
        component={CSCode}
        lineHeight={'100%'}
        code={coffeeCode}
      />
    </Layout>
  );

  yield* code2LayoutRef().opacity(1, 0.5);

  yield* waitUntil('c3_start');
  yield* code2LayoutRef().opacity(0, 0.5);
  code2LayoutRef().remove();
  code2LayoutRef().dispose();

  const clientCode = `
public class Main {
    public static void main(String[] args) {
        CaffeineBeverage tea = new Tea();
        tea.prepareRecipe();
        // Output:
        // Boiling water
        // Steeping the tea
        // Pouring into cup
        // Adding Lemon

        CaffeineBeverage coffee = new Coffee();
        coffee.prepareRecipe();
        // Output:
        // Boiling water
        // Dripping Coffee through filter
        // Pouring into cup
        // Adding Sugar and Milk
    }
}
  `;

  const code3LayoutRef = createRef<Layout>();
  const code3PageRef = createPageRef();
  view.add(
    <Layout ref={code3LayoutRef}>
      <Page
        refs={code3PageRef}
        label="Main.java"
        badge="Client Code"
        theme={theme}
        stroke={DataColors.main}
        width={1000}
        height={800}
        component={CSCode}
        scale={1}
        lineHeight={'100%'}
        code={clientCode}
      />
    </Layout>
  );

  yield* code3LayoutRef().opacity(1, 0.5);

  yield* waitUntil('s6_end');
  yield* code3LayoutRef().opacity(0, 0.5);
});
