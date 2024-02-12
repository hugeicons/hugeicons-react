import * as React from "react";
import type { SVGProps } from "react";

interface CameraMicrophone01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CameraMicrophone01Icon = (props: CameraMicrophone01IconProps) => {
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
        <path d="M7 6.00049C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.2079 14.7476C16.3447 14.3566 16.1386 13.9288 15.7476 13.7921C15.3566 13.6553 14.9288 13.8614 14.7921 14.2524L16.2079 14.7476ZM9.20794 14.2524C9.07118 13.8614 8.64335 13.6553 8.25237 13.7921C7.86139 13.9288 7.6553 14.3566 7.79206 14.7476L9.20794 14.2524ZM11.25 18.5C11.25 18.9142 11.5858 19.25 12 19.25C12.4142 19.25 12.75 18.9142 12.75 18.5H11.25ZM13 11.25V13.25H14.5V11.25H13ZM11 13.25V11.25H9.5V13.25H11ZM12 14.25C11.4477 14.25 11 13.8023 11 13.25H9.5C9.5 14.6307 10.6193 15.75 12 15.75V14.25ZM13 13.25C13 13.8023 12.5523 14.25 12 14.25V15.75C13.3807 15.75 14.5 14.6307 14.5 13.25H13ZM12 10.25C12.5523 10.25 13 10.6977 13 11.25H14.5C14.5 9.86929 13.3807 8.75 12 8.75V10.25ZM12 8.75C10.6193 8.75 9.5 9.86929 9.5 11.25H11C11 10.6977 11.4477 10.25 12 10.25V8.75ZM14.7921 14.2524C14.3832 15.4213 13.2832 16.25 12 16.25V17.75C13.9485 17.75 15.5979 16.4917 16.2079 14.7476L14.7921 14.2524ZM12 16.25C10.7168 16.25 9.61682 15.4213 9.20794 14.2524L7.79206 14.7476C8.40211 16.4917 10.0515 17.75 12 17.75V16.25ZM11.25 17V18.5H12.75V17H11.25Z" fill="currentColor" />
      </svg>
    </>
  );
};

export default CameraMicrophone01Icon;
