import * as React from "react";
import type { SVGProps } from "react";

interface HeadphoneMuteIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HeadphoneMuteIcon = (props: HeadphoneMuteIconProps) => {
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
        <path d="M1.99805 2L21.998 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 13.11C17.92 12.75 18.718 12.48 18.8948 12.5042C19.5577 12.4383 19.927 12.9128 20.3059 13.373C21.2493 14.5188 21.7209 15.0918 21.8935 15.7236C22.0328 16.2334 22.078 16.836 21.778 17.496" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.99805 14.3046C6.99805 13.8694 6.98583 13.4782 6.63396 13.1722C6.50598 13.0609 6.3363 12.9836 5.99696 12.829C5.54806 12.6246 5.32361 12.5224 5.10121 12.5044C4.43396 12.4504 4.07497 12.9058 3.69018 13.3732C2.7468 14.519 2.27511 15.0919 2.10251 15.7237C1.96323 16.2336 1.96323 16.7668 2.10251 17.2766C2.35425 18.1981 3.14957 18.9705 3.73826 19.6856C4.10934 20.1363 4.46382 20.5475 5.10121 20.496C5.32361 20.478 5.54806 20.3757 5.99696 20.1713C6.3363 20.0167 6.50598 19.9394 6.63396 19.8281C6.98583 19.5221 6.99805 19.131 6.99805 18.6957V14.3046Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18.998 12.5V10.5C18.998 6.63401 15.864 3.5 11.998 3.5C10.6312 3.5 9.65805 3.9 8.51805 4.5M4.99805 12.5V10.5C4.99805 8.86982 5.63805 7.74 6.47805 6.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HeadphoneMuteIcon;
