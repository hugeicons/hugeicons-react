import * as React from "react";
import type { SVGProps } from "react";

interface CursorRectangleSelection02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorRectangleSelection02Icon = (props: CursorRectangleSelection02IconProps) => {
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
        <path d="M9.30945 9.37832C10.7997 7.77346 22.0092 11.7048 22 13.1402C21.9895 14.7678 17.6224 15.2685 16.4119 15.6081C15.684 15.8124 15.489 16.0217 15.3212 16.785C14.561 20.2419 14.1794 21.9613 13.3096 21.9997C11.9231 22.061 7.85508 10.9445 9.30945 9.37832Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 9.2L2 12.8M12.8 2L9.2 2M7.5 20H8.5M20 7.5V8.5M2.13343 4.69898C2.28806 3.97158 2.54837 3.42488 2.98663 2.98663C3.41266 2.56059 3.94119 2.3027 4.63858 2.14661M19.8666 4.69898C19.7119 3.97158 19.4516 3.42488 19.0134 2.98663C18.5963 2.5696 18.0811 2.31369 17.4054 2.15665M4.63858 19.8534C3.94119 19.6973 3.41266 19.4394 2.98663 19.0134C2.55627 18.583 2.2975 18.0481 2.14189 17.3402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CursorRectangleSelection02Icon;
