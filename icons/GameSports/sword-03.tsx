import * as React from "react";
import type { SVGProps } from "react";

interface Sword03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Sword03Icon = (props: Sword03IconProps) => {
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
        <path d="M7.98749 9.49195L5.6781 7.51379C4.15497 6.2036 4.14987 4.30219 3.9873 3.02026C5.65365 3.09934 6.9444 3.25021 8.06843 4.19971L9.2443 5.53562L10.5168 6.9643M19.4582 18.4189L16.4935 15.419M14.0225 18.4189C14.0451 18.1466 14.2233 17.4408 15.0418 16.6846C15.7761 16.0062 17.3686 14.3801 18.0842 13.6751C18.4895 13.2757 19.1541 12.9954 19.4582 12.996M15.5693 12.8088L16.9059 14.2877M13.6772 14.4371L15.1715 15.7506M20.4625 17.981C21.2929 17.9826 22.0021 18.5959 22.0005 19.4258C21.9989 20.2557 21.2929 20.9833 20.4625 20.9817C19.6321 20.9801 18.9918 20.2499 18.9933 19.4201C19.047 18.5943 19.6578 18.0921 20.4625 17.981Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.59642 18.3932L7.55439 15.5009M4.56206 12.9873C4.83451 13.0094 5.59405 13.1913 6.27449 14.0413C6.8992 14.8217 8.5842 16.3308 9.2911 17.0446C9.69151 17.4489 9.97154 18.0893 9.97154 18.3932M7.26499 14.2301L15.504 4.66436C16.8447 3.16824 18.7183 3.13556 20.0041 2.99829C19.8923 4.66166 19.716 5.94835 18.744 7.05278L8.55008 15.9266M5.00667 19.499C5.00667 20.3289 4.3335 21.0016 3.50309 21.0016C2.67269 21.0016 1.99951 20.3289 1.99951 19.499C1.99951 18.6692 2.67269 17.9964 3.50309 17.9964C4.3335 17.9964 5.00667 18.6692 5.00667 19.499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Sword03Icon;
