import * as React from "react";
import type { SVGProps } from "react";

interface ThumbsUpEllipseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThumbsUpEllipseIcon = (props: ThumbsUpEllipseIconProps) => {
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
        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.1525 8.7864L12.975 9.34293C12.8295 9.79895 12.7567 10.027 12.8127 10.207C12.8579 10.3527 12.9573 10.4783 13.0927 10.5609C13.26 10.6631 13.5131 10.6631 14.0194 10.6631H14.2887C16.0021 10.6631 16.8588 10.6631 17.2634 11.1553C17.3097 11.2116 17.3508 11.2714 17.3864 11.3341C17.6977 11.8832 17.3438 12.6227 16.636 14.1019C15.9865 15.4593 15.6617 16.138 15.0587 16.5375C15.0003 16.5761 14.9403 16.6126 14.8789 16.6468C14.244 17 13.4574 17 11.8843 17H11.5431C9.63715 17 8.68419 17 8.09209 16.4432C7.5 15.8864 7.5 14.9902 7.5 13.1978V12.5679C7.5 11.6259 7.5 11.155 7.67223 10.7239C7.84445 10.2929 8.17424 9.93842 8.8338 9.22954L11.5614 6.29801C11.6298 6.22449 11.664 6.18772 11.6942 6.16225C11.9757 5.92447 12.4102 5.95124 12.6563 6.22152C12.6826 6.25047 12.7115 6.29112 12.7691 6.37241C12.8592 6.49956 12.9043 6.56314 12.9436 6.62613C13.2952 7.19002 13.4016 7.85988 13.2405 8.4958C13.2225 8.56683 13.1992 8.64006 13.1525 8.7864Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ThumbsUpEllipseIcon;
