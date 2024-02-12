import * as React from "react";
import type { SVGProps } from "react";

interface CursorProgress04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorProgress04Icon = (props: CursorProgress04IconProps) => {
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
        <path d="M17 17.0001C16.5207 15.2115 15.1308 13.9103 13.4627 13.4616M17 17.0001C18.3097 15.6905 18.7415 13.8354 18.2955 12.166M17 17.0001C18.789 17.4795 20.6114 16.9259 21.8341 15.705M17 17.0001C17.4792 18.7886 18.8692 20.0898 20.5372 20.5386M17 17.0001C15.6904 18.3097 15.2585 20.1647 15.7045 21.8339M17 17.0001C15.2109 16.5208 13.3886 17.0744 12.166 18.2955M13.4627 13.4616C12.2102 14.7137 11.7099 16.589 12.166 18.2955M13.4627 13.4616C14.7149 12.2098 16.5896 11.71 18.2955 12.166M18.2955 12.166C20.0177 12.6264 21.3739 13.9827 21.8341 15.705M21.8341 15.705C22.29 17.4114 21.7897 19.2866 20.5372 20.5386M20.5372 20.5386C19.285 21.7902 17.4103 22.29 15.7045 21.8339M15.7045 21.8339C13.9824 21.3736 12.6264 20.0175 12.166 18.2955" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.38086 2.46562C4.21503 0.490411 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CursorProgress04Icon;
