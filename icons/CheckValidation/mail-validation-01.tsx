import * as React from "react";
import type { SVGProps } from "react";

interface MailValidation01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailValidation01Icon = (props: MailValidation01IconProps) => {
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
        <path d="M6.91211 6.83838L9.85413 8.57781C11.5693 9.5919 12.2549 9.5919 13.9701 8.57781L16.9121 6.83838" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.9121 17.3384C14.9121 17.3384 15.4121 17.3384 15.9121 18.3384C15.9121 18.3384 17.5003 15.8384 18.9121 15.3384" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 10.3118L21.9589 6.43829C21.9478 4.96285 21.1512 2.01198 18.0539 2.01198H6.10527C4.73685 1.91134 2 2.34718 2 7.1423V14.2514C2.00001 15.472 2.27229 17.115 3.61079 18.1055C4.47577 18.7456 5.61117 18.8049 6.68416 18.858L8.93115 18.9692" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9809 16.9592C21.9809 19.7432 19.7346 22 16.9636 22C14.1926 22 11.9463 19.7432 11.9463 16.9592C11.9463 14.1753 14.1926 11.9185 16.9636 11.9185C19.7346 11.9185 21.9809 14.1753 21.9809 16.9592Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MailValidation01Icon;
