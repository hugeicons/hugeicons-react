import * as React from "react";
import type { SVGProps } from "react";

interface Atom02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Atom02Icon = (props: Atom02IconProps) => {
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
        <path fillRule="evenodd" clipRule="evenodd" d="M20.3541 3.64593C18.5085 1.8004 13.2722 4.04455 8.65837 8.65837C4.04455 13.2722 1.8004 18.5085 3.64593 20.3541C5.49146 22.1996 10.7278 19.9555 15.3416 15.3416C19.9555 10.7278 22.1996 5.49146 20.3541 3.64593Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3.64593 3.64593C1.8004 5.49146 4.04455 10.7278 8.65837 15.3416C13.2722 19.9555 18.5085 22.1996 20.3541 20.3541C22.1996 18.5085 19.9555 13.2722 15.3416 8.65837C10.7278 4.04455 5.49146 1.8004 3.64593 3.64593Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.009 12H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Atom02Icon;
