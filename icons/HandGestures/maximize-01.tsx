import * as React from "react";
import type { SVGProps } from "react";

interface Maximize01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Maximize01Icon = (props: Maximize01IconProps) => {
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
        <path d="M19.9264 22.2516V20.691C19.9264 20.288 20.0525 19.8966 20.2639 19.5531C21.7583 17.1245 22.2279 14.5196 21.9002 13.505C20.857 11.3418 17.3758 10.4907 15.76 10.2878L16.7966 5.12292C16.9705 4.30387 16.3513 3.47938 15.4135 3.28136C14.4758 3.08334 13.5746 3.58679 13.4007 4.40583L11.3462 14.0815L8.77462 12.4424C8.77462 12.4424 7.47969 11.406 6.44041 12.4424C5.40114 13.4788 6.44041 14.7701 6.44041 14.7701L10.3488 19.7776C10.6003 20.0997 10.7468 20.4908 10.7688 20.8984L10.8401 22.2177" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.86652 4.36134C9.86652 4.36134 10.1119 2.14335 9.86652 1.90156M9.86652 1.90156C9.54812 1.58797 7.32887 1.85194 7.32887 1.85194M9.86652 1.90156L6.89759 4.84002M2.10957 7.08754C2.10957 7.08754 1.86414 9.30553 2.10957 9.54732M2.10957 9.54732C2.42796 9.86092 4.64721 9.59694 4.64721 9.59694M2.10957 9.54732L5.07849 6.60886" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Maximize01Icon;
