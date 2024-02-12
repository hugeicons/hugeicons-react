import * as React from "react";
import type { SVGProps } from "react";

interface CroissantIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CroissantIcon = (props: CroissantIconProps) => {
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
        <path d="M3.50341 10.4966C3.04778 10.9578 2.72516 11.8278 2.17324 13.8272C2.05648 14.2501 1.97095 14.6874 2.01096 15.1241C2.07035 15.7722 2.29098 16.1732 2.73162 16.5049C3.19908 16.8567 3.80783 16.9443 4.39515 16.9443H5.91432C6.96217 16.9443 8.06107 16.7368 8.76226 15.9663C9.56056 15.0891 9.76762 14.1152 9.51839 13.4725M10.0196 3.55303L13.3694 2.22724C14.3939 1.82173 15.6252 1.93944 16.3719 2.74334C16.7342 3.1334 16.9656 3.53013 17.0371 4.049V6.1118C17.0371 7.31599 16.5164 8.50529 15.4733 9.12554C14.8748 9.48139 14.2961 9.73101 13.5284 10.0007M4.00465 8.01678C5.21107 5.86706 6.08024 4.98634 8.01464 4.049C8.45636 3.81113 8.82491 3.67465 9.17351 3.6508C10.5662 3.55551 11.315 5.197 11.882 6.45929L12.8896 8.70248C12.981 8.906 13.0517 9.11866 13.0862 9.33874C13.2427 10.337 13.0888 10.8375 12.5259 11.4886L11.6088 12.396C11.219 12.7817 10.8028 13.1698 10.2765 13.3319C10.1279 13.3777 9.98568 13.403 9.84441 13.4086C8.90728 13.4453 8.02746 12.9406 7.14287 12.6323C6.01024 12.2375 5.17279 11.6015 4.00465 10.4966C3.38259 9.51219 3.41239 8.9681 4.00465 8.01678Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.0372 7.5447C18.2145 7.74949 18.8756 7.86774 20.0447 8.04284C20.5026 8.1098 20.8451 8.04812 21.2292 7.79034C21.8241 7.39104 22.1548 6.62976 21.923 5.95452C21.6953 5.29117 21.1421 4.7633 20.0447 4.05776C18.8918 3.25689 18.2334 2.92336 17.0372 2.56335M2.50098 17.0093C2.5948 18.3967 3.0792 19.2816 4.50597 20.9943C5.15186 21.6554 5.62309 21.9275 6.2479 21.9929C6.73799 22.0442 7.21463 21.8062 7.52179 21.4233C7.89935 20.9525 8.05274 20.5663 8.01471 19.9981L7.51346 17.0093" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CroissantIcon;
