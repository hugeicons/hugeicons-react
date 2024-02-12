import * as React from "react";
import type { SVGProps } from "react";

interface MailSecure02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailSecure02Icon = (props: MailSecure02IconProps) => {
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
        <path d="M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 19.5C11.5 19.5 10.0691 19.4878 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C21.9947 10.0172 22 11.0086 22 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9992 13.5C16.7328 13.5 15.9117 14.3076 14.9405 14.602C14.5456 14.7217 14.3482 14.7815 14.2683 14.8659C14.1884 14.9502 14.165 15.0735 14.1182 15.3201C13.6174 17.9584 14.712 20.3976 17.3222 21.347C17.6027 21.449 17.7429 21.5 18.0006 21.5C18.2583 21.5 18.3986 21.449 18.679 21.347C21.2891 20.3976 22.3826 17.9584 21.8817 15.3201C21.8349 15.0735 21.8114 14.9502 21.7315 14.8658C21.6516 14.7814 21.4542 14.7216 21.0593 14.602C20.0878 14.3077 19.2657 13.5 17.9992 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MailSecure02Icon;
