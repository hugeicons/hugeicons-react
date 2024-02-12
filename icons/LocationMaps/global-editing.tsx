import * as React from "react";
import type { SVGProps } from "react";

interface GlobalEditingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GlobalEditingIcon = (props: GlobalEditingIconProps) => {
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
        <path d="M10.0775 22C5.46844 21.0621 2 16.9868 2 12.1015C2 6.52261 6.5233 2 12.1031 2C16.9838 2 21.0562 5.46043 22 10.0613" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.4332 13.8485C18.7685 13.4851 18.9362 13.3035 19.1143 13.1975C19.5442 12.9418 20.0736 12.9339 20.5107 13.1765C20.6918 13.2771 20.8646 13.4537 21.2103 13.8067C21.5559 14.1598 21.7287 14.3364 21.8272 14.5214C22.0647 14.9679 22.0569 15.5087 21.8066 15.9478C21.7029 16.1298 21.5251 16.3011 21.1694 16.6437L16.9378 20.7194C16.2638 21.3686 15.9268 21.6932 15.5056 21.8577C15.0845 22.0222 14.6214 22.0101 13.6954 21.9859L13.5694 21.9826C13.2875 21.9752 13.1466 21.9715 13.0646 21.8785C12.9827 21.7855 12.9939 21.6419 13.0162 21.3548L13.0284 21.1988C13.0914 20.3906 13.1228 19.9865 13.2807 19.6232C13.4385 19.2599 13.7107 18.965 14.2552 18.375L18.4332 13.8485Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GlobalEditingIcon;
