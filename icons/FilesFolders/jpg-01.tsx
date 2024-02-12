import * as React from "react";
import type { SVGProps } from "react";

interface Jpg01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Jpg01Icon = (props: Jpg01IconProps) => {
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
        <path d="M3.5 13.0005V12.1968C3.5 9.22938 3.5 7.74569 3.96894 6.5607C4.72281 4.65567 6.31714 3.15301 8.33836 2.44247C9.59563 2.00049 11.1698 2.00049 14.3182 2.00049C16.1173 2.00049 17.0168 2.00049 17.7352 2.25305C18.8902 2.65907 19.8012 3.51774 20.232 4.60633C20.5 5.28346 20.5 6.13128 20.5 7.82692V12.0147V13.0005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12.0005C3.5 10.1596 4.99238 8.66716 6.83333 8.66716C7.49912 8.66716 8.28404 8.78382 8.93137 8.61037C9.50652 8.45625 9.95576 8.00701 10.1099 7.43185C10.2833 6.78453 10.1667 5.99961 10.1667 5.33382C10.1667 3.49287 11.6591 2.00049 13.5 2.00049" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.85557 16.0003V19.8146C6.85557 20.5586 6.7733 21.354 6.12731 21.7298C5.83866 21.8977 5.53212 21.9841 5.14791 21.9981C4.72633 22.0136 4.31829 21.8248 4.04875 21.502C3.66917 21.0477 3.53846 20.6353 3.5 19.977M10.2436 21.9654V16.0003H12.2308C12.9634 16.0003 13.6149 16.5255 13.6408 17.2534C13.6465 17.4115 13.6463 17.5658 13.6406 17.7214C13.6137 18.4528 12.9588 18.9828 12.2226 18.9828H11M20.5 16.9945C20.4604 16.1854 19.9981 15.9809 18.5 16.0003H17.5C16.9477 16.0003 16.5 16.4454 16.5 16.9945V20.9712C16.5 21.5203 16.9477 21.9654 17.5 21.9654H20C20.2761 21.9654 20.5 21.7429 20.5 21.4683V19.977C20.5 19.7025 20.2761 19.4799 20 19.4799H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Jpg01Icon;
