import * as React from "react";
import type { SVGProps } from "react";

interface NotificationOff02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NotificationOff02Icon = (props: NotificationOff02IconProps) => {
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
        <path d="M18 18.1673C13.7297 19.4388 8.39263 19.2542 4.43205 17.6135C3.268 17.1313 2.31727 16.1637 2.52992 14.7696C2.66061 13.9129 3.30684 13.1995 3.78561 12.5029C4.41272 11.5793 4.47503 10.5719 4.47513 9.50002C4.47513 8.12107 4.84851 6.61016 5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 3.48831C8.75404 2.55352 10.3103 2 11.9962 2C16.1487 2 19.5149 5.35786 19.5149 9.5C19.5149 10.5718 19.5772 11.5793 20.2038 12.5029C20.6822 13.1995 21.3279 13.9129 21.4584 14.7696C21.5788 15.5596 21.4422 15.9946 20.9887 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 22L2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NotificationOff02Icon;
