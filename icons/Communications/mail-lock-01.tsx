import * as React from "react";
import type { SVGProps } from "react";

interface MailLock01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailLock01Icon = (props: MailLock01IconProps) => {
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
        <path d="M2 5L8.91302 8.91697C11.4616 10.361 12.5384 10.361 15.087 8.91697L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.9942 19.4954C11.0292 19.4954 10.0644 19.4832 9.0947 19.4588C5.94803 19.3797 4.3747 19.3403 3.24424 18.2052C2.11376 17.07 2.08109 15.5377 2.01576 12.4729C1.99475 11.4875 1.99474 10.5079 2.01575 9.52248C2.08109 6.45778 2.11375 4.92543 3.24423 3.7903C4.3747 2.65517 5.94803 2.61563 9.09469 2.53655C11.034 2.48781 12.9543 2.48781 14.8937 2.53656C18.0404 2.61565 19.6136 2.65519 20.7442 3.79031C21.8746 4.92544 21.9073 6.45779 21.9726 9.5225C21.9831 10.0152 21.9884 10.0066 21.9884 10.4978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7394 15.6771L16.7394 14.2868C16.7394 14.0814 16.7479 13.8735 16.8216 13.6817C17.0175 13.1712 17.5365 12.5024 18.4815 12.5024C19.4264 12.5024 19.9659 13.1712 20.1618 13.6817C20.2354 13.8735 20.244 14.0814 20.244 14.2868L20.244 15.6771M16.8089 21.5H20.1949C21.1917 21.5 21.9998 20.6934 21.9998 19.6984V17.6971C21.9998 16.7021 21.1917 15.8955 20.1949 15.8955H16.8089C15.812 15.8955 15.0039 16.7021 15.0039 17.6971V19.6984C15.0039 20.6934 15.812 21.5 16.8089 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MailLock01Icon;
