import {
  Circle,
  Img,
  Node,
  NodeProps,
  Rect,
  Txt,
} from '@motion-canvas/2d/lib/components';
import {
  easeInOutCubic,
  easeInOutQuint,
} from '@motion-canvas/core/lib/tweening';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { createRef } from '@motion-canvas/core/lib/utils';
import { all } from '@motion-canvas/core/lib/flow';

import { Colors, WhiteLabel } from './styles';
import profile from './assets/profile.jpeg';
import { Vector2 } from '@motion-canvas/core';

export interface LogoProps extends NodeProps {
  text: string;
}

export class Logo extends Node {
  private logoContainerRef = createRef<Rect>();
  private textRef = createRef<Txt>();
  private logoScale = createSignal(1);
  private radius = createSignal(625 * this.logoScale());

  public constructor(props?: LogoProps) {
    super({
      ...props,
    });

    this.add(
      <Rect ref={this.logoContainerRef} scale={1} y={0} zIndex={99999}>
        <Circle
          width={() => this.radius()}
          height={() => this.radius()}
          fill={Colors.text}
          zIndex={99999}
        />
        <Img
          src={profile}
          scale={1.3 * this.logoScale()}
          radius={360}
          zIndex={99999}
        />
        <Txt
          {...WhiteLabel}
          ref={this.textRef}
          fontSize={98}
          y={390}
          zIndex={99999}
          text={props.text}
        ></Txt>
      </Rect>
    );
  }

  public *animateToCorner() {
    yield* all(
      // this.textRef().opacity(0, 0.45),
      this.logoContainerRef().scale(0.3, 0.6, easeInOutCubic),
      // this.logoContainerRef().opacity(0.5, 0.6),
      this.logoContainerRef().position(
        [835, 380],
        0.6,
        easeInOutQuint,
        Vector2.arcLerp
      )
      // this.logoContainerRef().size(
      //   [1920 - 160, 1080 - 160],
      //   0.6,
      //   easeInOutCubic,
      //   Vector2.polarLerp
      // )
    );
  }

  public *animateToCenter() {
    yield* all(
      this.textRef().opacity(1, 0.45),
      this.logoContainerRef().scale(1, 0.6, easeInOutCubic),
      this.logoContainerRef().opacity(1, 0.6),
      this.logoContainerRef().position(0, 0.6, easeInOutQuint, Vector2.arcLerp),
      this.logoContainerRef().size(
        [1920 - 160, 1080 - 160],
        0.6,
        easeInOutCubic,
        Vector2.polarLerp
      )
    );
  }
}
