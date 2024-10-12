import { Layout, Line, LineProps } from '@motion-canvas/2d';
import { Center, Origin, PossibleVector2, Vector2 } from '@motion-canvas/core';
import { Colors } from './styles';

export function Arrow({
  from,
  to,
  fromDirection,
  toDirection,
  ...props
}: LineProps & {
  from: Layout;
  to: Layout;
  fromDirection?: Origin;
  toDirection?: Origin;
}) {
  const fromVertical = fromDirection & Center.Vertical;
  const toVertical = toDirection & Center.Vertical;
  let center = (): PossibleVector2 =>
    Vector2.lerp(
      from.cardinalPoint(fromDirection)(),
      to.cardinalPoint(toDirection)(),
      0.5
    );

  if (fromVertical !== toVertical) {
    center = fromVertical
      ? () => [
          from.cardinalPoint(fromDirection)().x,
          to.cardinalPoint(toDirection)().y,
        ]
      : () => [
          to.cardinalPoint(toDirection)().x,
          from.cardinalPoint(fromDirection)().y,
        ];
  }

  return (
    <Line
      lineWidth={8}
      stroke={Colors.blue}
      endArrow
      startOffset={20}
      radius={8}
      endOffset={20}
      points={[
        from.cardinalPoint(fromDirection),
        center,
        to.cardinalPoint(toDirection),
      ]}
      {...props}
    />
  );
}
