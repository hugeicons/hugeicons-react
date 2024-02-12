import * as React from "react";
import type { SVGProps } from "react";

interface Touch08IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Touch08Icon = (props: Touch08IconProps) => {
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
        <path d="M7.77937 13.9566V9.49309M7.77937 9.49309V3.97813C7.77937 3.15856 8.46267 2.49805 9.28263 2.49805C10.1026 2.49805 10.7487 3.15856 10.7487 3.97813V7.97397M7.77937 9.49309C6.46464 10.6839 5.04987 12.1882 4.85935 12.5736C3.97288 13.9223 4.06579 14.5753 5.05371 16.2256C5.8928 17.6273 7.02125 19.1829 7.08713 19.2576C7.75758 20.017 7.62428 20.0172 8.59605 20.7303C9.46383 21.3323 11.2638 21.7517 15.4835 21.3323C18.9211 20.8015 19.7447 17.8022 19.7268 16.3689V12.8293C19.941 9.8874 18.7107 9.75461 16.4768 9.46504M10.7487 7.97397V10.4974M10.7487 7.97397C11.3062 7.06531 13.3308 7.43252 13.7255 9.1484M13.7611 10.4935V9.49309C13.7611 9.41423 13.7572 9.33512 13.746 9.2571M13.7255 9.1484C13.7271 9.15562 13.7288 9.16286 13.7304 9.17013C13.7367 9.19892 13.7419 9.22793 13.746 9.2571M13.7255 9.1484C13.7296 9.18336 13.7364 9.2196 13.746 9.2571M13.7255 9.1484C13.5853 7.95243 16.6173 8.24397 16.7407 10.3473V11.4904" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Touch08Icon;
