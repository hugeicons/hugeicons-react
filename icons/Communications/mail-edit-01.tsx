import * as React from "react";
import type { SVGProps } from "react";

interface MailEdit01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailEdit01Icon = (props: MailEdit01IconProps) => {
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
        <path d="M2 5.5L8.91302 9.41697C11.4616 10.861 12.5384 10.861 15.087 9.41697L22 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M21.9953 10.0284C21.9299 6.96114 21.8972 5.42749 20.7655 4.29141C19.6337 3.15532 18.0586 3.11574 14.9083 3.03659C12.9668 2.98781 11.0443 2.9878 9.10276 3.03658C5.95252 3.11573 4.3774 3.1553 3.24564 4.29139C2.11389 5.42748 2.08118 6.96113 2.01577 10.0284C1.99474 11.0147 1.99474 11.9951 2.01577 12.9814C2.08119 16.0487 2.11389 17.5823 3.24565 18.7184C4.3774 19.8545 5.95252 19.8941 9.10277 19.9732C9.57102 19.985 10.0382 19.9939 10.5047 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.8522 13.4393L21.5446 14.1317C22.1304 14.7175 22.1304 15.6672 21.5446 16.253L17.9172 19.9487C17.6319 20.234 17.2669 20.4264 16.8702 20.5005L14.622 20.9885C14.2671 21.0656 13.951 20.7504 14.027 20.3952L14.5056 18.1599C14.5796 17.7632 14.772 17.3982 15.0574 17.1129L18.7309 13.4393C19.3167 12.8536 20.2665 12.8536 20.8522 13.4393Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MailEdit01Icon;
