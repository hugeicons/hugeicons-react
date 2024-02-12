import * as React from "react";
import type { SVGProps } from "react";

interface DragLeft04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DragLeft04Icon = (props: DragLeft04IconProps) => {
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
        <path d="M21.4979 13.0526V13.2264M21.4979 13.2264C21.4979 12.3517 20.8545 11.6051 19.9767 11.4613L18.7672 11.2632V12.1579M21.4979 13.2264V15.4386C21.4979 17.3832 21.4979 18.3555 21.1965 19.1296C20.7357 20.3132 19.7873 21.2485 18.5869 21.7029C17.802 22 16.8159 22 14.8439 22C13.8098 22 13.2926 22 12.8114 21.8957C12.0772 21.7366 11.3946 21.4 10.825 20.9163C10.4517 20.5992 10.1414 20.1913 9.52082 19.3755L6.78658 15.7805C6.36644 15.2281 6.37853 14.4654 6.81595 13.9262C7.38762 13.2215 8.45352 13.1633 9.10061 13.8014L10.4844 15.2557V6.5C10.4844 5.67157 11.1568 5 11.9862 5C12.8156 5 13.4881 5.67157 13.4881 6.5V9.4737M18.7672 12.1579C18.7672 11.1696 17.9522 10.3684 16.9468 10.3684H16.0367V11.2632M18.7672 12.1579V13.0526M13.4881 9.4737H14.2163C15.2216 9.4737 16.0367 10.2749 16.0367 11.2632M13.4881 9.4737V12.1579M16.0367 11.2632V12.1579" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4844 9.5C9.25317 8.81764 8.48193 7.50601 8.48193 6C8.48193 3.79086 10.275 2 12.4868 2C14.6986 2 16.4917 3.79086 16.4917 6C16.4917 7.50601 15.6584 8.81764 14.4272 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.88235 6.02265H2.50195M2.50195 6.02265C2.50195 6.50074 3.01683 6.71697 3.33902 7.01135L4.52062 8.00993M2.50195 6.02265C2.50195 5.51157 3.02493 5.29858 3.33902 5.00137L4.52062 3.98999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DragLeft04Icon;
