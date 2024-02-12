import * as React from "react";
import type { SVGProps } from "react";

interface DeliverySecure01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DeliverySecure01Icon = (props: DeliverySecure01IconProps) => {
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
        <path d="M12 22H10.8889C6.69863 22 4.6035 22 3.30175 20.7447C2 19.4895 2 17.4692 2 13.4286V8H22V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8L2.96154 5.69231C3.70726 3.90257 4.08013 3.0077 4.8359 2.50385C5.59167 2 6.56112 2 8.5 2H15.5C17.4389 2 18.4083 2 19.1641 2.50385C19.9199 3.0077 20.2927 3.90257 21.0385 5.69231L22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 8V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.7365 16.1746L16.7365 14.7836C16.7365 14.5782 16.7451 14.3702 16.8187 14.1783C17.0148 13.6676 17.5341 12.9985 18.4796 12.9985C19.4251 12.9985 19.9649 13.6676 20.1609 14.1783C20.2346 14.3702 20.2432 14.5782 20.2432 14.7836L20.2431 16.1746M16.806 22.0001H20.194C21.1914 22.0001 22 21.1931 22 20.1977V18.1955C22 17.2001 21.1914 16.3931 20.194 16.3931H16.806C15.8086 16.3931 15 17.2001 15 18.1955V20.1977C15 21.1931 15.8086 22.0001 16.806 22.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DeliverySecure01Icon;
