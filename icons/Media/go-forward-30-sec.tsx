import * as React from "react";
import type { SVGProps } from "react";

interface GoForward30SecIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GoForward30SecIcon = (props: GoForward30SecIconProps) => {
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
        <path d="M12 5L13.1039 3.45459C13.5149 2.87911 13.7205 2.59137 13.5907 2.32411C13.4609 2.05684 13.1311 2.04153 12.4714 2.01092C12.3152 2.00367 12.158 2 12 2C6.4772 2 2 6.47715 2 12C2 17.5228 6.4772 22 12 22C17.5229 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7522 12.5999C16.7522 11.2199 16.8182 10.8479 16.5542 10.4039C16.2902 9.95986 15.6302 9.99826 14.9702 9.99826C14.3102 9.99826 13.8302 9.95986 13.5122 10.3199C13.1222 10.7399 13.2902 11.5199 13.2422 12.5999C13.3502 14.0399 13.0562 15.1799 13.5062 15.6599C13.8302 16.0559 14.4053 15.9959 15.0902 16.0079C15.7701 15.9996 16.1822 16.0319 16.5182 15.6479C16.8902 15.3119 16.7102 13.9799 16.7522 12.5999Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M7.24805 11.1241C7.38005 10.0801 8.22005 9.96011 9.06005 10.0021C9.72005 9.97211 10.74 10.0201 10.752 11.5201C10.74 13.0801 9.50405 12.9713 9.50405 12.9961C9.50405 13.0209 10.8 12.9601 10.752 14.5201C10.74 15.9001 9.84005 16.0441 9.00005 15.9961C8.16005 16.0561 7.38005 15.8401 7.24805 14.8801" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default GoForward30SecIcon;
