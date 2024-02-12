import * as React from "react";
import type { SVGProps } from "react";

interface WorkflowSquare10IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkflowSquare10Icon = (props: WorkflowSquare10IconProps) => {
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
        <path d="M9.69406 3.61971C10.8161 2.53268 11.3771 1.98917 12.0634 2.00004C12.7496 2.01091 13.2931 2.57192 14.3802 3.69394C15.4672 4.81596 16.0107 5.37697 15.9998 6.06324C15.989 6.7495 15.428 7.29302 14.3059 8.38004C13.1839 9.46707 12.6229 10.0106 11.9366 9.99972C11.2504 9.98885 10.7069 9.42784 9.61983 8.30581C8.5328 7.18379 7.98929 6.62278 8.00016 5.93652C8.01103 5.25025 8.57204 4.70674 9.69406 3.61971Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 13.4999C7 14.8806 5.88071 15.9999 4.5 15.9999C3.11929 15.9999 2 14.8806 2 13.4999C2 12.1192 3.11929 10.9999 4.5 10.9999C5.88071 10.9999 7 12.1192 7 13.4999Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 13.4999C22 12.1192 20.8807 10.9999 19.5 10.9999C18.1193 10.9999 17 12.1192 17 13.4999C17 14.8806 18.1193 15.9999 19.5 15.9999C20.8807 15.9999 22 14.8806 22 13.4999Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 9.99988L12 16.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 8.49988L6.5 11.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 8.49988L17.5 11.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 19.3999C9.5 18.2685 9.5 17.7028 9.85147 17.3513C10.2029 16.9999 10.7686 16.9999 11.9 16.9999H12.1C13.2314 16.9999 13.7971 16.9999 14.1485 17.3513C14.5 17.7028 14.5 18.2685 14.5 19.3999V19.5999C14.5 20.7312 14.5 21.2969 14.1485 21.6484C13.7971 21.9999 13.2314 21.9999 12.1 21.9999H11.9C10.7686 21.9999 10.2029 21.9999 9.85147 21.6484C9.5 21.2969 9.5 20.7312 9.5 19.5999V19.3999Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default WorkflowSquare10Icon;
