import * as React from "react";
import type { SVGProps } from "react";

interface Ppt02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Ppt02Icon = (props: Ppt02IconProps) => {
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
        <path d="M14.7864 22H10.5C7.22839 22 5.59257 22 4.45656 21.2022C4.13107 20.9736 3.84211 20.7025 3.59846 20.3971C2.74805 19.3313 2.74805 17.7966 2.74805 14.7273V12.1818C2.74805 9.21865 2.74805 7.73706 3.21849 6.55375C3.97477 4.65142 5.57419 3.15088 7.60187 2.44135C8.86316 2 10.4424 2 13.6008 2C15.4057 2 16.3081 2 17.0288 2.2522C18.1874 2.65765 19.1014 3.5151 19.5335 4.60214C19.8024 5.27832 19.8024 6.12494 19.8024 7.81818V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.80664 12C2.80664 10.1591 4.29902 8.66667 6.13997 8.66667C6.80576 8.66667 7.59068 8.78333 8.23801 8.60988C8.81316 8.45576 9.2624 8.00652 9.41652 7.43136C9.58997 6.78404 9.47331 5.99912 9.47331 5.33333C9.47331 3.49238 10.9657 2 12.8066 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.20508 17.9154V13.5C7.20508 13.2239 7.42894 13 7.70508 13H8.93289C9.42209 13 9.92021 13.2172 10.0934 13.6656C10.2333 14.0279 10.2275 14.3526 10.0932 14.7218C9.91731 15.2052 9.39379 15.4577 8.87008 15.4577H7.70668M17.7386 13H19.4942M19.4942 13H21.2498M19.4942 13V18M12.7227 17.9154V13.5C12.7227 13.2239 12.9465 13 13.2227 13H14.285C14.8631 13 15.4441 13.3134 15.5437 13.8715C15.5844 14.0991 15.5837 14.3199 15.5404 14.5578C15.4365 15.1283 14.8506 15.4577 14.2592 15.4577H12.7227" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Ppt02Icon;
