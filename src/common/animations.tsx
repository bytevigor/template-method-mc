import { Curve, Node } from '@motion-canvas/2d';
import {
  easeInOutQuart,
  linear,
  loop,
  PossibleVector2,
  Reference,
  spawn,
} from '@motion-canvas/core';

export function* slideIn(node: Reference<Node>) {
  yield* node().position([0, 0], 0.5, easeInOutQuart);
}

export function* slideOut(node: Reference<Node>, outPos: PossibleVector2) {
  yield* node().position(outPos, 0.5, easeInOutQuart);
}

export function* scrollScreenshot(node: Reference<Node>) {
  yield* node().y(-7000, 25, linear);
}

export function* wiggle(node: Reference<Node>, amplitude: any) {
  yield* node().rotation(amplitude * 12, 0.3);
  yield* node().rotation(amplitude * -12, 0.3);
  yield* node().rotation(0, 0.3);
}

export function* spin(node: Reference<Node>, amplitude: any) {
  node().rotation(amplitude * 360, 0.3);
}

const DASH = [8, 8, 8, 32, 8, 8, 8];
const DASH_OFFSET = DASH.reduce((a, b) => a + b, 0);

export function animatedDash(parts = 5, duration = 8) {
  return (node: Curve) => {
    node.lineDash(() => {
      return [node.arcLength() / parts - DASH_OFFSET, ...DASH];
    });
    spawn(
      loop(() =>
        node
          .lineDashOffset(0)
          .lineDashOffset(node.arcLength(), duration, linear)
      )
    );
  };
}
