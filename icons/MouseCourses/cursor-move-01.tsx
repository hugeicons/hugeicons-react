import * as React from "react";
import type { SVGProps } from "react";

interface CursorMove01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorMove01Icon = (props: CursorMove01IconProps) => {
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
        <path d="M10 3.32038C6.75053 2.8233 3.67361 2.85605 2.76477 3.76477C0.592862 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L18 14.8519" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9998 2L16.9998 5M16.9998 2C16.7994 2 15.7378 2.98517 15.2998 3.39172M16.9998 2C17.2002 2 18.2798 3 18.6998 3.39172" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9998 12L16.9998 9M16.9998 12C17.2002 12 18.2618 11.0148 18.6998 10.6083M16.9998 12C16.7993 12 15.7198 11 15.2998 10.6083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6.99977L15 6.99979M12 6.99977C12 7.2002 12.9852 8.26179 13.3917 8.69979M12 6.99977C12 6.79935 13 5.71979 13.3917 5.2998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 6.99982L19 6.9998M22 6.99982C22 6.79939 21.0148 5.7378 20.6083 5.2998M22 6.99982C22 7.20024 21 8.2798 20.6083 8.69979" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CursorMove01Icon;
