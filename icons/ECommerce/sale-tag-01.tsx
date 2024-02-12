import * as React from "react";
import type { SVGProps } from "react";

interface SaleTag01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SaleTag01Icon = (props: SaleTag01IconProps) => {
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
        <path d="M6.98633 3.70018C9.78335 6.79475 14.3961 0.115888 17.1255 2.53972C18.696 3.93438 18.1995 7.01371 16.1607 9.01998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.7897 13.9839C13.8075 13.6494 13.9014 13.0373 13.3927 12.5722M13.3927 12.5722C13.2353 12.4282 13.0201 12.2983 12.7272 12.1951C11.6788 11.8256 10.391 13.0623 11.302 14.1944C11.7917 14.803 12.1692 14.9901 12.1337 15.6812C12.1087 16.1673 11.6311 16.6752 11.0018 16.8686C10.4551 17.0367 9.85198 16.8142 9.47052 16.3879C9.00476 15.8675 9.0518 15.3769 9.04782 15.163M13.3927 12.5722L13.9668 11.998M9.51204 16.4528L8.9668 16.998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.2726 6.63297C19.1981 6.81072 19.4057 7.39517 19.682 9.01695C19.9309 10.4776 20.0007 12.2303 20.0007 12.9765C19.9753 13.2514 19.8625 13.508 19.682 13.7174C17.7469 15.7454 13.9064 19.5752 11.9681 21.4777C11.2074 22.1569 10.0597 22.1715 9.25241 21.5481C7.59928 20.0612 6.01095 18.3803 4.45501 16.8624C3.82993 16.0573 3.84458 14.9129 4.52567 14.1543C6.57621 12.0271 10.2867 8.38595 12.3813 6.37442C12.5913 6.19447 12.8486 6.08191 13.1243 6.05664C13.5943 6.05652 14.4005 6.11969 15.1859 6.16523" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SaleTag01Icon;
