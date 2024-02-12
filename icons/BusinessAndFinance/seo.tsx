import * as React from "react";
import type { SVGProps } from "react";

interface SeoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SeoIcon = (props: SeoIconProps) => {
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
        <path d="M5 20L7.41286 17.5871M7.41286 17.5871C8.21715 18.3914 9.32826 18.8889 10.5556 18.8889C13.0102 18.8889 15 16.899 15 14.4444C15 11.9898 13.0102 10 10.5556 10C8.10096 10 6.11111 11.9898 6.11111 14.4444C6.11111 15.6717 6.60857 16.7829 7.41286 17.5871Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 15.1877C2.36394 14.0914 2 12.8191 2 11.4623C2 7.34099 5.35786 4 9.5 4H14.5C18.6421 4 22 7.34099 22 11.4623C22 14.7114 19.913 17.4756 17 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SeoIcon;
