import * as React from "react";
import type { SVGProps } from "react";

interface SwipeLeft06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeLeft06Icon = (props: SwipeLeft06IconProps) => {
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
        <path d="M15.0005 4.5H21.0005M15.0005 4.5C15.0005 3.79977 16.9948 2.49153 17.5005 2M15.0005 4.5C15.0005 5.20023 16.9948 6.50847 17.5005 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.51233 13.515V3.48599C6.51233 2.66436 7.17917 1.99829 8.00176 1.99829C8.82435 1.99829 9.49119 2.66436 9.49119 3.48599V8.68808M9.49119 8.68808V11.0117M9.49119 8.68808C10.2961 7.56965 12.0987 7.94217 12.4824 9.68104C12.4887 9.7099 12.4939 9.73898 12.4981 9.76822M12.5132 11.0077V10.0048C12.5132 9.92575 12.5093 9.84644 12.4981 9.76822M12.4981 9.76822C12.9913 8.41786 15.2558 8.93285 15.5024 10.8611M15.5024 10.8611V12.0071M15.5024 10.8611C15.9063 9.37059 18.5581 10.4123 18.5007 12.1547V15.3332C18.4977 17.0592 18.2096 18.3108 17.1835 19.3402C16.2355 20.472 16.4585 21.1056 16.4349 22.0019M6.51233 8.99075C5.1934 10.1846 3.69642 11.8162 3.5053 12.2025C2.61598 13.5547 2.93227 14.6155 4.19609 16.4177C5.13663 17.7589 6.3981 19.2536 6.46418 19.3284C7.13679 20.0898 7.00497 20.696 7.00497 21.9909" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SwipeLeft06Icon;
