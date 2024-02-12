import * as React from "react";
import type { SVGProps } from "react";

interface CraneIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CraneIcon = (props: CraneIconProps) => {
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
        <path d="M15.2537 16.001H5.25085C3.59353 16.001 2.25 17.3441 2.25 19.001C2.25 20.6578 3.59353 22.001 5.25085 22.001H15.2537C16.911 22.001 18.2545 20.6578 18.2545 19.001C18.2545 17.3441 16.911 16.001 15.2537 16.001Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.0759 6.6132L11.4062 5.06679C10.8378 4.54026 10.5536 4.277 10.2015 4.13902C9.84944 4.00104 9.02609 4.00104 8.25113 4.00104L8.25504 4.00104C6.36889 4.00104 5.42581 4.00104 4.83985 4.58683C4.25391 5.17261 4.25391 6.11542 4.25391 8.00104V9.00104C4.25391 10.8866 4.25391 11.8294 4.83985 12.4152C5.42581 13.001 6.36889 13.001 8.25504 13.001H10.5709C12.1524 13.001 12.9433 13.001 13.4853 12.579C13.6157 12.4775 13.7331 12.3602 13.8346 12.2298C14.2567 11.6879 14.2567 10.8973 14.2567 9.31623C14.2567 8.59208 14.1529 7.99229 14.0338 7.66276C13.8729 7.35142 13.6072 7.10535 13.0759 6.6132ZM13.0759 6.6132C13.0759 6.6132 16.1175 3.24104 16.5736 2.82104C17.079 2.41682 17.3538 1.99904 19.0943 2.00504C19.4253 1.99845 19.8145 1.99904 20.2586 1.99904M20.2586 5.49704V6.00104M20.2106 11.497V11.941C20.2106 12.0346 20.2346 11.989 20.2346 11.989C20.3565 11.9939 20.7148 12.085 20.7148 12.085C20.7148 12.085 21.8071 12.421 21.747 13.621C21.714 14.281 21.1912 14.8243 20.5587 14.965C19.8607 15.1203 19.0343 14.761 18.7582 14.005M20.2586 8.50304V9.00104" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.2476 19.001H10.2566M6.25098 19.001H6.25995M14.2442 19.001H14.2532" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CraneIcon;
