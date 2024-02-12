import * as React from "react";
import type { SVGProps } from "react";

interface Airplane02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Airplane02Icon = (props: Airplane02IconProps) => {
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
        <path d="M10 9.5L5.27531 4.47562C4.85705 4.02447 4.92403 3.69493 5.41729 3.40962C6.34454 2.87327 7.06689 2.8587 8.04428 3.39508L12.949 6.08672C13.2982 6.27833 13.6406 6.47256 14 6.57852" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 13.6632L14.6103 20.4696C14.7826 21.0255 15.086 21.1262 15.556 20.8567C16.4396 20.3501 16.7958 19.765 16.8197 18.7107L16.9395 13.4198C16.9555 12.7131 16.9526 12.0215 17.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.32846 10.9842L10.2154 9.60554L14.6377 6.38133L14.6416 6.37848L14.6491 6.37298C14.7535 6.29658 16.3094 5.16235 17.1919 4.77578C18.2765 4.30064 19.2869 4.52153 20.3739 4.82512C20.9362 4.98215 21.2173 5.06066 21.4202 5.20714C21.742 5.43955 21.9513 5.79725 21.9943 6.18849C22.0215 6.43507 21.9498 6.71456 21.8065 7.27353L21.8065 7.27355C21.5294 8.35428 21.2181 9.32816 20.2588 10.0175C19.4782 10.5784 17.7045 11.341 17.5856 11.3918L17.5771 11.3955L17.5726 11.3974L12.5317 13.5644L10.3782 14.4875L10.3782 14.4876C9.5974 14.8223 9.207 14.9896 8.94139 15.3002C8.31933 16.0275 8.23148 17.3437 7.99931 18.2493C7.87101 18.7498 7.16748 19.617 6.54058 19.4868C6.15355 19.4065 6.14613 18.922 6.09796 18.6131L5.6342 15.6389C5.5233 14.9276 5.51479 14.913 4.94599 14.4626L2.56757 12.5792C2.32053 12.3836 1.89903 12.135 2.022 11.7641C2.22119 11.1633 3.33408 10.9957 3.83747 11.1363C4.74834 11.3907 5.94747 11.9737 6.89684 11.8058C7.3022 11.7341 7.64428 11.4841 8.32844 10.9842L8.32846 10.9842Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Airplane02Icon;
