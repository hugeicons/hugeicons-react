import * as React from "react";
import type { SVGProps } from "react";

interface PointingRight02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PointingRight02Icon = (props: PointingRight02IconProps) => {
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
        <path d="M2 19.8917H3.61802C4.54364 19.8917 5.51198 20.6158 6.31081 20.9983C7.78747 21.7055 10.6774 22.6731 12.0382 21.3209C14.1833 19.1893 14.576 16.2081 14.5 14.4999L20.25 14.4999C21.2165 14.4999 22 13.7164 22 12.7499C22 11.7834 21.2165 10.9999 20.25 10.9999L13.9999 10.9999M13.9999 10.9999L10 10.9999M13.9999 10.9999C13.9823 10.9765 11.8247 8.12164 10.3914 7.62367C9.10844 7.17793 7.96635 8.03229 6.90859 8.67457C6.08953 9.1719 4.06844 11 2.99509 11H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4.5L16 4.5M22 4.5C22 3.79977 20.0057 2.49153 19.5 2M22 4.5C22 5.20023 20.0057 6.50847 19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PointingRight02Icon;
