import * as React from "react";
import type { SVGProps } from "react";

interface BubbleChatSecureIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BubbleChatSecureIcon = (props: BubbleChatSecureIconProps) => {
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
        <path d="M11.5048 2C6.21213 2.24942 2 6.43482 2 11.5606C2 14.1004 3.03385 16.4082 4.72026 18.1208C5.09156 18.4979 5.33946 19.0131 5.23941 19.5433C5.07429 20.4103 4.7001 21.2189 4.1522 21.8929C5.59376 22.1611 7.0927 21.9196 8.3782 21.2359C8.83262 20.9943 9.05983 20.8734 9.22016 20.8489C9.3805 20.8244 9.61016 20.8676 10.0695 20.9538C10.7076 21.0737 11.3554 21.1337 12.005 21.1329C17.3782 21.1329 21.763 17.0792 22 11.9941" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9992 2C16.7328 2 15.9117 2.8076 14.9405 3.10196C14.5456 3.22165 14.3482 3.2815 14.2683 3.36586C14.1884 3.45022 14.165 3.5735 14.1182 3.82005C13.6174 6.4584 14.712 8.89759 17.3222 9.84699C17.6027 9.949 17.7429 10 18.0006 10C18.2583 10 18.3986 9.94899 18.679 9.84698C21.2891 8.89758 22.3826 6.45839 21.8817 3.82005C21.8349 3.57346 21.8114 3.45016 21.7315 3.36579C21.6516 3.28143 21.4542 3.22162 21.0593 3.10199C20.0878 2.80766 19.2657 2 17.9992 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9955 12H12.0045M8 12H8.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BubbleChatSecureIcon;
