import * as React from "react";
import type { SVGProps } from "react";

interface MailReply02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailReply02Icon = (props: MailReply02IconProps) => {
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
        <path d="M21.9999 11C21.9999 10.5086 21.9946 10.0172 21.9841 9.52439C21.9188 6.45886 21.8861 4.92609 20.755 3.79066C19.6238 2.65523 18.0496 2.61568 14.9011 2.53657C12.9606 2.48781 11.0392 2.48781 9.0987 2.53656C5.95021 2.61566 4.37596 2.65521 3.24483 3.79065C2.1137 4.92608 2.08102 6.45885 2.01564 9.52438C1.99462 10.5101 1.99463 11.4899 2.01565 12.4756C2.08102 15.5412 2.11371 17.0739 3.24484 18.2094C4.37596 19.3448 5.95021 19.3843 9.09871 19.4634C10.069 19.4878 11.0344 19.5 11.9999 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.99988 7.5L9.9419 9.23943C11.6571 10.2535 12.3427 10.2535 14.0579 9.23943L16.9999 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.0001 21.5003C21.884 18.9758 21.9869 18.0573 20.3438 16.8793C19.5362 16.3003 17.9115 15.9188 15.7177 16.1248M17.4519 13.5928L15.1552 15.7464C14.9611 15.9406 14.9597 16.2561 15.1519 16.4521L17.4519 18.6401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MailReply02Icon;
