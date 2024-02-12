import * as React from "react";
import type { SVGProps } from "react";

interface TwoFinger05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TwoFinger05Icon = (props: TwoFinger05IconProps) => {
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
        <path d="M12.8111 5.70939C12.955 4.89355 12.4102 4.11556 11.5944 3.97171C10.7785 3.82786 10.0006 4.37261 9.8567 5.18845L9.07528 9.62008L8.14704 14.6982L5.88875 12.3369C5.17559 11.6238 4.00086 11.6888 3.37081 12.4764C2.88873 13.079 2.87541 13.9314 3.33844 14.5488L6.35188 18.5667C7.03576 19.4786 7.3777 19.9345 7.7892 20.2889C8.41699 20.8295 9.16928 21.2056 9.97845 21.3835C10.5088 21.5001 11.0787 21.5001 12.2185 21.5001H14.701C17.0433 21.5001 19.0716 19.8741 19.5812 17.588L20.893 11.7039L20.9798 11.2115C21.1237 10.3956 20.5789 9.61763 19.7631 9.47377C18.9472 9.32992 18.1692 9.87467 18.0254 10.6905M12.8111 5.70939L13.1584 3.73978C13.3023 2.92394 14.0803 2.37918 14.8961 2.52304C15.7119 2.66689 16.2567 3.44488 16.1128 4.26072L15.2446 9.18476M12.8111 5.70939L12.0297 10.141M15.2446 9.18476L14.9841 10.662M15.2446 9.18476C15.3885 8.36892 16.1664 7.82417 16.9823 7.96802C17.7981 8.11188 18.3429 8.88986 18.199 9.70571L18.0254 10.6905M18.0254 10.6905L17.9385 11.1829" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TwoFinger05Icon;