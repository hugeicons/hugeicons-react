import * as React from "react";
import type { SVGProps } from "react";

interface FolderOpenIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderOpenIcon = (props: FolderOpenIconProps) => {
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
        <path d="M19 12.0062H12.032C11.2053 12.0062 10.2405 11.9085 9.56941 12.491C9.15369 12.8518 8.94068 13.4264 8.51464 14.5755L5.94715 20.6496C5.93321 20.688 5.92619 20.7074 5.91951 20.7248C5.63042 21.4775 4.92271 21.98 4.12591 21.9994M19 12.0062V11C19 9.58579 19 8.87868 18.5661 8.43934C18.1321 8 17.4337 8 16.0368 8H9.94852M19 12.0062C20.5839 12.0062 21.1672 12.0062 21.6011 12.4456C21.7344 12.5806 21.841 12.74 21.9152 12.9154C22.157 13.4866 21.8627 14.231 21.2741 15.7197L20.7472 17.0526C19.8257 19.3834 19.365 20.5488 18.418 21.2334C18.3526 21.2807 18.2858 21.3259 18.2176 21.3692C17.2309 21.9952 15.9777 21.9913 13.4714 21.9835L4.12591 21.9994M4.12591 21.9994C4.12236 21.9995 4.1188 21.9996 4.11525 21.9997C4.09679 22 4.07654 22 4.03604 22C3.97978 22 3.95166 22 3.92787 21.9994C2.87415 21.9737 2.02596 21.115 2.00057 20.0482C2 20.0241 2 19.9956 2 19.9387V9C2 7.11438 2 6.17157 2.5786 5.58579C3.15719 5 4.08843 5 5.9509 5H6.15448C7.13233 5 7.62126 5 8.04925 5.20162C8.96231 5.63174 9.5196 6.92798 9.94852 8M9.94852 8H7.92635" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.9984 3L20.9984 5C20.2268 3.2341 18.4647 2 16.4144 2C14.7786 2 13.3263 2.78555 12.4141 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderOpenIcon;
