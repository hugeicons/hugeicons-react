import * as React from "react";
import type { SVGProps } from "react";

interface MapsOffIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MapsOffIcon = (props: MapsOffIconProps) => {
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
        <path d="M4.5 4.5C3.73931 4.94127 2.72098 5.45609 2.27164 6.24482C2 6.72165 2 7.30232 2 8.46367V16.6283C2 18.1542 2 18.9172 2.34226 19.3418C2.57001 19.6244 2.88916 19.8143 3.242 19.8773C3.77226 19.9719 4.42148 19.5953 5.71987 18.8421C6.60156 18.3306 7.45011 17.7994 8.50487 17.9435C8.98466 18.009 9.44231 18.2366 10.3576 18.6917L14.1715 20.588C14.9964 20.9982 15.004 21 15.9214 21H18C19.1298 21 19.9211 21 20.5 20.8712" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 17.9876V10.1657C22 8.22611 22 7.25631 21.4142 6.65374C20.8284 6.05118 19.8856 6.05118 18 6.05118H15.9214C15.004 6.05118 14.9964 6.0494 14.1715 5.63658L10.8399 3.96938C9.44885 3.2733 8.75329 2.92523 8.01236 2.94942C7.64015 2.96157 7.28518 3.06672 6.85352 3.26792M15 5.99585V11.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.9998 15.0093V20.9379M8.01953 8.14258L8.01953 17.9197" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MapsOffIcon;
