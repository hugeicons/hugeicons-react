import * as React from "react";
import type { SVGProps } from "react";

interface Tap02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Tap02Icon = (props: Tap02IconProps) => {
  const animationName = props.animate ? 'spinAnimation' : '';

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 24 24"
        width={props.size || 24}
        height={props.size || 24}
        fill={"none"}
        {...props}
        style={{
          ...props.style,
          animation: props.animate ? `${animationName} 2s linear infinite` : undefined,
          transform: `rotate(${props.rotate || 0}deg)`,
        }}
      >
        <path d="M16.2499 22.0018C16.2802 20.1368 16.213 20.522 16.3656 20.0475C16.5182 19.573 17.1087 18.7488 17.4741 17.699C18.4967 14.7603 17.9524 13.5543 16.4382 12.618C14.8428 11.6315 13.2322 11.2488 11.8211 11.371V6.73412C11.8211 5.77221 11.2755 5.02979 10.3121 5.02979C9.34882 5.02979 8.86277 5.86743 8.86277 6.82933L8.91343 11.6649M8.89521 22.0018V21.3334C8.89521 20.5482 8.63746 20.213 7.5474 18.6363C6.34577 16.8982 6.35081 16.8157 6.07555 16.0589C6.02681 15.7056 5.72823 14.881 6.83244 13.7307L8.91343 11.6649M8.91343 15.1913V11.6649" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.49776 6.02368C6.43198 5.10371 6.99798 3.28377 8.55112 2.5228C9.19157 2.1333 10.9495 1.53023 12.6309 2.60481C14.2879 3.66382 14.3997 5.22521 14.5039 6.01333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Tap02Icon;
