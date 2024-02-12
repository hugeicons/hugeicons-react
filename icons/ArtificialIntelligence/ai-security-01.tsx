import * as React from "react";
import type { SVGProps } from "react";

interface AiSecurity01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiSecurity01Icon = (props: AiSecurity01IconProps) => {
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
        <path d="M11.9983 2C9.14883 2 7.30123 4.01899 5.11615 4.7549C4.22768 5.05413 3.78345 5.20374 3.60366 5.41465C3.42388 5.62556 3.37124 5.93375 3.26595 6.55013C2.13925 13.146 4.6019 19.244 10.475 21.6175C11.106 21.8725 11.4216 22 12.0014 22C12.5812 22 12.8967 21.8725 13.5277 21.6175C19.4005 19.2439 21.8608 13.146 20.7338 6.55013C20.6284 5.93364 20.5758 5.6254 20.3959 5.41449C20.2161 5.20358 19.7719 5.05405 18.8835 4.75499C16.6976 4.01915 14.8479 2 11.9983 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4499 6.50098V8.48M6.96289 10.0014H9.01487M14.986 10.0014H17.0379M14.986 12.9746H17.0379M6.96289 12.9746H9.01487M10.4499 14.5202V16.4992M13.4754 14.5202V16.4992M13.4646 6.50098V8.48M10.0149 14.4685H13.986C14.5382 14.4685 14.986 14.0208 14.986 13.4685V9.48C14.986 8.92771 14.5382 8.48 13.986 8.48H10.0149C9.46258 8.48 9.01487 8.92771 9.01487 9.48V13.4685C9.01487 14.0208 9.46258 14.4685 10.0149 14.4685Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AiSecurity01Icon;
