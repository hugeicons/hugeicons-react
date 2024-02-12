import * as React from "react";
import type { SVGProps } from "react";

interface SpeedTrain02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SpeedTrain02Icon = (props: SpeedTrain02IconProps) => {
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
        <path d="M2 3H6.73259C9.34372 3 10.6493 3 11.8679 3.40119C13.0866 3.80239 14.1368 4.57795 16.2373 6.12907L19.9289 8.85517C19.9692 8.88495 19.9894 8.89984 20.0084 8.91416C21.2491 9.84877 21.985 11.307 21.9998 12.8603C22 12.8841 22 12.9091 22 12.9593C22 12.9971 22 13.016 21.9997 13.032C21.9825 14.1115 21.1115 14.9825 20.032 14.9997C20.016 15 19.9971 15 19.9593 15H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 11H6.095C8.68885 11 9.98577 11 11.1857 11.451C12.3856 11.9019 13.3983 12.77 15.4238 14.5061L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 7H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 19H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SpeedTrain02Icon;
