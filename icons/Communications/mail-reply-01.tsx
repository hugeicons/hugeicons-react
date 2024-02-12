import * as React from "react";
import type { SVGProps } from "react";

interface MailReply01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailReply01Icon = (props: MailReply01IconProps) => {
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
        <path d="M1.99988 5L8.9129 8.92462C11.4386 10.3585 12.5612 10.3585 15.0869 8.92462L21.9999 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M21.9193 11.0333C21.9193 10.54 21.914 10.0467 21.9036 9.55195C21.8386 6.47439 21.806 4.93561 20.6794 3.79572C19.5528 2.65584 17.9849 2.61614 14.8491 2.53671C12.9164 2.48776 11.0028 2.48776 9.07011 2.5367C5.9343 2.61611 4.36639 2.65582 3.23981 3.79571C2.11324 4.9356 2.08069 6.47438 2.01557 9.55194C1.99464 10.5415 1.99465 11.5252 2.01558 12.5147C2.08069 15.5924 2.11325 17.1311 3.23982 18.271C4.36639 19.4109 5.9343 19.4505 9.07012 19.5299C10.0365 19.5544 10.998 19.5667 11.9596 19.5667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.0001 21.5003C21.884 18.9758 21.9869 18.0573 20.3438 16.8793C19.5362 16.3003 17.9115 15.9188 15.7177 16.1248M17.4519 13.5928L15.1552 15.7464C14.9611 15.9406 14.9597 16.2561 15.1519 16.4521L17.4519 18.6401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MailReply01Icon;
