import * as React from "react";
import type { SVGProps } from "react";

interface WorkoutStretchingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkoutStretchingIcon = (props: WorkoutStretchingIconProps) => {
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
        <path d="M16 5.5C16 6.32843 15.3284 7 14.5 7C13.6716 7 13 6.32843 13 5.5C13 4.67157 13.6716 4 14.5 4C15.3284 4 16 4.67157 16 5.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.3602 15L15.3039 14.454C16.3786 13.8323 16.9159 13.5214 16.9885 13.0784C16.9999 13.0092 17.0028 12.9391 16.9973 12.8694C16.9622 12.4229 16.4524 12.0789 15.4329 11.3907L10.7259 8.21359C8.87718 6.96577 8.45184 4.69114 9.75097 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.7259 8.21359C8.22588 10.7136 7 17.6324 7 21.0003M10.7259 8.21359C8.87718 6.96577 8.45184 4.69114 9.75097 3M10.7259 8.21359L13.3725 10M14.3602 15L15.3039 14.454C16.3786 13.8323 16.9159 13.5214 16.9885 13.0784C16.9999 13.0092 17.0028 12.9391 16.9973 12.8694C16.9622 12.4229 16.4524 12.0789 15.4329 11.3907L13.3725 10M15.0002 21.0003C14.0268 19.8647 13.0257 18.3 12.0502 16.8578C11.3666 15.8474 11.0249 15.3422 10.9845 14.8132M13.3725 10C12.5697 11.0391 12.0164 12.0207 11.6026 12.8942C11.1636 13.8209 10.9441 14.2843 10.9845 14.8132M10.9845 14.8132L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WorkoutStretchingIcon;
