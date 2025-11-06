"use client";

import Image from "next/image";
import { DEFAULT_FACE_COLOR, EYE_CIRCLES } from "../model/eyes";

type Props = {
  src?: string;
  faceColor?: string;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function BlinkingMascot({
  src = "/mascot.png",
  faceColor = DEFAULT_FACE_COLOR,
  width = 360,
  className,
  style,
}: Props) {
  return (
    <div
      className={className}
      style={
        {
          position: "relative",
          display: "inline-block",
          width,
          aspectRatio: "4 / 5",
          ["--face"]: faceColor,
          ...style,
        } as React.CSSProperties
      }
    >
      {/* 마스코트 이미지 */}
      <Image
        src={src}
        alt="mascot"
        fill
        sizes={`${width}px`}
        style={{
          objectFit: "contain",
          userSelect: "none",
          zIndex: 1,
        }}
        draggable={false}
        priority
      />

      {/* 눈꺼풀 오버레이 */}
      {EYE_CIRCLES.map(({ cx, cy, r }, i) => {
        const size = r * 2 * 100;
        const left = (cx - r) * 100;
        const top = (cy - r) * 100;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}%`,
              height: `${size}%`,
              clipPath: "circle(50% at 50% 50%)", // 눈 모양
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "var(--face)",
                transformOrigin: "top center",
                transform: "scaleY(0)",
                animation: "blink 4s infinite ease-in-out",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
