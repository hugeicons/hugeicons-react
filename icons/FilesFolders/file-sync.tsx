import * as React from "react";
import type { SVGProps } from "react";

interface FileSyncIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileSyncIcon = (props: FileSyncIconProps) => {
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
        <path d="M20 12.1818V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44135C5.81714 3.15089 4.22281 4.65142 3.46894 6.55375C3 7.73706 3 9.21865 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.74797 21.9384 7.21706 21.9952 10 21.9996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17L13.0228 17.5944C13.5374 15.7277 15.5114 14.6199 17.4318 15.1201C18.4149 15.3761 19.1934 16.0039 19.6501 16.806M21 20L19.9774 19.4056C19.4628 21.2723 17.4888 22.3801 15.5684 21.8799C14.6081 21.6298 13.8431 21.0251 13.3824 20.2496" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileSyncIcon;
