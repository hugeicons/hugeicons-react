import * as React from "react";
import type { SVGProps } from "react";

interface TransitionBottomIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TransitionBottomIcon = (props: TransitionBottomIconProps) => {
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
        <path d="M18 2C19.4001 2 20.1002 2 20.635 2.27248C21.1054 2.51217 21.4878 2.89462 21.7275 3.36502C22 3.8998 22 4.59987 22 6C22 7.40013 22 8.1002 21.7275 8.63498C21.4878 9.10538 21.1054 9.48783 20.635 9.72752C20.1002 10 19.4001 10 18 10L6 10C4.59987 10 3.8998 10 3.36502 9.72752C2.89462 9.48783 2.51217 9.10538 2.27248 8.63498C2 8.1002 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2L18 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 18L12 10M12 18C11.2998 18 9.99153 16.0057 9.5 15.5M12 18C12.7002 18 14.0085 16.0057 14.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 16C2 18.3389 2 19.5083 2.53646 20.3621C2.81621 20.8073 3.19267 21.1838 3.63789 21.4635C4.49167 22 5.66111 22 8 22L16 22C18.3389 22 19.5083 22 20.3621 21.4635C20.8073 21.1838 21.1838 20.8073 21.4635 20.3621C22 19.5083 22 18.3389 22 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TransitionBottomIcon;
