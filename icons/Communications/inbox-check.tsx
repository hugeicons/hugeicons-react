import * as React from "react";
import type { SVGProps } from "react";

interface InboxCheckIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const InboxCheckIcon = (props: InboxCheckIconProps) => {
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
        <path d="M20.9999 13.9824H16.0742C15.2321 13.9824 14.5705 14.686 14.1994 15.4296C13.7962 16.2375 12.9888 16.9824 11.4999 16.9824C10.011 16.9824 9.20361 16.2375 8.80042 15.4296C8.4293 14.686 7.76765 13.9824 6.92554 13.9824H1.99988" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.66 5.97537C16.66 5.97537 17.0371 6.09064 17.5607 6.85858C17.5607 6.85858 18.3286 5.20059 19.3933 4.62463" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.0166 12.4918C21.0166 16.974 21.0166 19.2152 19.6242 20.6077C18.2316 22.0001 15.9905 22.0001 11.5082 22.0001C7.02596 22.0001 4.78482 22.0001 3.39234 20.6077C1.99988 19.2152 1.99988 16.974 1.99988 12.4918C1.99988 8.00948 1.99988 5.76834 3.39234 4.37586C4.78482 2.9834 7.02596 2.9834 11.5082 2.9834" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 5.98324C22 8.18312 20.2167 9.96647 18.0168 9.96647C15.8169 9.96647 14.0336 8.18312 14.0336 5.98324C14.0336 3.78336 15.8169 2 18.0168 2C20.2167 2 22 3.78336 22 5.98324Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default InboxCheckIcon;
