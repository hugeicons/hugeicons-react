import * as React from "react";
import type { SVGProps } from "react";

interface ConnectIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ConnectIcon = (props: ConnectIconProps) => {
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
        <path d="M4.51255 19.4866C7.02498 21.8794 10.016 20.9223 11.2124 19.9532C11.8314 19.4518 12.1097 19.1277 12.3489 18.8884C13.1864 18.1107 13.1326 17.3331 12.5882 16.711C12.3704 16.462 10.9731 15.1198 9.63313 13.7439C8.93922 13.0499 8.46066 12.5595 8.05149 12.1647C7.50354 11.6185 7.02499 10.9922 6.30715 11.0101C5.64913 11.0101 5.17057 11.5904 4.57237 12.1886C3.88422 12.8767 3.37598 13.7439 3.19652 14.5216C2.65814 16.7947 3.49562 18.4098 4.51255 19.4866ZM4.51255 19.4866L2.00012 21.999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.4867 4.5146C16.9736 2.12066 13.9929 3.09581 12.7962 4.06535C12.177 4.567 11.8987 4.89126 11.6593 5.13066C10.8216 5.90868 10.8755 6.68671 11.42 7.30913C11.4983 7.39869 11.7292 7.62963 12.055 7.95269M19.4867 4.5146C20.504 5.59187 21.3528 7.22535 20.8142 9.49959C20.6347 10.2776 20.1264 11.1452 19.438 11.8337C18.8397 12.4322 18.361 13.0127 17.7028 13.0127C16.9847 13.0306 16.6121 12.5114 16.064 11.965M19.4867 4.5146L21.9999 2.00098M16.064 11.965C15.6547 11.57 15.07 10.972 14.3759 10.2776C13.5175 9.396 12.6355 8.52819 12.055 7.95269M16.064 11.965L14.5024 13.4895M10.5114 9.50597L12.055 7.95269" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ConnectIcon;
