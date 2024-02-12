import * as React from "react";
import type { SVGProps } from "react";

interface FileFavouriteIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileFavouriteIcon = (props: FileFavouriteIconProps) => {
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
        <path d="M4 12V16.1801C4 17.8738 4 18.7207 4.26796 19.3971C4.69875 20.4845 5.60979 21.3422 6.76478 21.7477C7.48322 22 8.38275 22 10.1818 22C13.3302 22 14.9044 22 16.1616 21.5585C18.1829 20.8488 19.7772 19.3478 20.5311 17.4449C21 16.2612 21 14.7792 21 11.8152V9.26898C21 6.19871 21 4.66357 20.1523 3.59748C19.9094 3.29202 19.6214 3.02085 19.2969 2.79219C18.3849 2.14945 17.1498 2.02435 15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.14185 2.44156C5.34859 1.71049 6.40183 2.0051 7.03454 2.47439C7.29397 2.66681 7.42368 2.76302 7.5 2.76302C7.57632 2.76302 7.70603 2.66681 7.96546 2.47439C8.59817 2.0051 9.65141 1.71049 10.8582 2.44156C12.4419 3.40102 12.8002 6.56632 9.14721 9.23676C8.45143 9.7454 8.10353 9.99972 7.5 9.99972C6.89647 9.99972 6.54857 9.7454 5.85279 9.23676C2.19977 6.56632 2.55813 3.40102 4.14185 2.44156Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FileFavouriteIcon;
