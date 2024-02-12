import * as React from "react";
import type { SVGProps } from "react";

interface RotateLeft03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateLeft03Icon = (props: RotateLeft03IconProps) => {
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
        <path d="M7.62439 10.4603L7.18049 11.2254C6.69017 12.0705 6.98115 13.151 7.83041 13.6389M7.83041 13.6389L8.59927 14.0807M7.83041 13.6389C7.40578 13.395 6.8628 13.5398 6.61764 13.9623C6.12732 14.8074 6.4183 15.888 7.26756 16.3759M7.26756 16.3759L8.03642 16.8176M7.26756 16.3759C6.86508 16.1446 6.35028 16.3284 6.18724 16.7614L6.07912 17.0486C5.77461 17.8574 6.10237 18.7667 6.85407 19.1986L7.98647 19.8487C9.65746 20.8087 10.493 21.2887 11.3051 21.4176C11.7762 21.4923 12.4932 21.3874 13.0286 21.2818C13.4917 21.1904 13.9772 21.2502 14.386 21.4851L15.2814 21.9995M9.16221 11.3436L4.16461 8.47247C3.52766 8.10654 3.30943 7.2961 3.67717 6.6623C4.04491 6.0285 4.85937 5.81134 5.49631 6.17727L13.1561 10.5776L12.6257 8.62003C12.3929 7.76111 12.9628 6.89392 13.8471 6.76128C14.5238 6.65979 15.1851 7.02616 15.4548 7.652L17.3923 12.4371C17.763 13.3526 18.6395 14.2379 19.4985 14.7314" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.86336 4.96563C9.26026 5.36127 10.9869 5.24713 11.6238 5.16769M8.86336 4.96563C8.46647 4.56999 8.45511 2.63795 8.5348 2.00306M8.86336 4.96563C9.88443 3.1974 13.944 0.376851 17.9724 3.1974C19.919 4.5604 20.1937 5.41935 20.5016 5.99478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateLeft03Icon;
