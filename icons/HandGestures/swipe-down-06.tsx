import * as React from "react";
import type { SVGProps } from "react";

interface SwipeDown06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeDown06Icon = (props: SwipeDown06IconProps) => {
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
        <path d="M18.501 8.00838V2.01758M18.501 8.00838C17.8011 8.00838 16.4933 6.01714 16.002 5.51221M18.501 8.00838C19.201 8.00838 20.5088 6.01714 21.0001 5.51221" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.51282 13.5149V3.48587C6.51282 2.66424 7.17966 1.99817 8.00225 1.99817C8.82484 1.99817 9.49168 2.66423 9.49168 3.48587V8.68796M9.49168 8.68796V11.0116M9.49168 8.68796C10.2966 7.56953 12.0992 7.94205 12.4829 9.68091C12.4892 9.70978 12.4944 9.73886 12.4986 9.7681M12.5137 11.0076V10.0047C12.5137 9.92562 12.5098 9.84631 12.4986 9.7681M12.4986 9.7681C12.9918 8.41774 15.5028 8.92645 15.5028 10.861M15.5028 10.861V12.007M15.5028 10.861C15.9068 9.37047 18.5586 10.4122 18.5012 12.1546V15.3331C18.4982 17.0591 18.2101 18.3107 17.184 19.3401C16.236 20.4719 16.459 21.1055 16.4354 22.0018M6.51282 8.99062C5.19389 10.1845 3.69691 11.816 3.50578 12.2024C2.61647 13.5545 2.93276 14.6154 4.19658 16.4176C5.13711 17.7588 6.39859 19.2535 6.46467 19.3283C7.13727 20.0897 7.00546 20.6959 7.00546 21.9908" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SwipeDown06Icon;
