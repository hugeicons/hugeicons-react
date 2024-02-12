import * as React from "react";
import type { SVGProps } from "react";

interface AiDnaIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiDnaIcon = (props: AiDnaIconProps) => {
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
        <path d="M7.49108 14.002C3.00088 11.602 3.00088 10.402 3.00088 10.002C3.00088 9.60195 3.00088 8.40195 7.49108 6.00195M7.49108 14.002C3.00088 16.402 3 17.202 3 18.002M7.49108 14.002C11.9804 11.6025 11.9804 10.4025 11.9804 10.0022C11.9804 9.60195 11.9804 8.40148 7.49108 6.00195M7.49108 6.00195C11.9813 3.60195 11.9813 2.80195 11.9813 2.00195M7.49108 6.00195L5.30781 4.74625C3.00057 3.28344 3 2.6427 3 2.00195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.4118 12.001V13.98M10.9248 15.5014H12.9768M18.9479 15.5014H20.9998M18.9479 18.4746H20.9998M10.9248 18.4746H12.9768M14.4118 20.0202V21.9992M17.4373 20.0202V21.9992M17.4266 12.001V13.98M13.9768 19.9685H17.9479C18.5002 19.9685 18.9479 19.5208 18.9479 18.9685V14.98C18.9479 14.4277 18.5002 13.98 17.9479 13.98H13.9768C13.4245 13.98 12.9768 14.4277 12.9768 14.98V18.9685C12.9768 19.5208 13.4245 19.9685 13.9768 19.9685Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AiDnaIcon;
