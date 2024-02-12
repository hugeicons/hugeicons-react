import * as React from "react";
import type { SVGProps } from "react";

interface DatesIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DatesIcon = (props: DatesIconProps) => {
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
        <path d="M10.9636 5.99551C11.3366 7.83866 10.1271 10.4978 6.95602 9.91137M7.8335 7.06712C8.72649 6.01836 10.894 5.58666 13.4668 6.46779C14.5796 6.77279 16.9813 7.96201 18.0837 8.84049C19.4291 9.73543 21.3451 11.6343 21.8452 13.6085C22.3912 15.4267 21.545 18.1685 18.8881 19.9664C16.3472 21.6858 12.7871 21.7305 9.33156 16.3699C9.20435 16.3699 5.23013 9.90445 7.8335 7.06712Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.9997 14.0812C4.05858 13.6669 6.39981 14.9253 5.99813 17.9956M16.9376 7.8064C16.9376 7.61697 16.5266 6.65909 16.1208 6.15967C14.2928 3.5281 11.5815 2.58081 9.67706 3.16933C7.70149 3.66382 5.81061 5.50466 4.91185 6.84754C3.84928 8.139 2.79246 10.3538 2.48429 11.4657C1.59585 14.0361 2.01026 16.2588 3.05645 17.1548C3.74142 17.7929 5.92067 18.6864 9.15793 17.1548" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.002 13.0211C11.002 13.0211 11.0013 14.245 12.2193 14.2445C13.4374 14.244 13.4368 15.4677 13.4368 15.4677M14.0118 9.99731C14.0118 9.99731 14.0111 11.2212 15.2291 11.2207C16.4472 11.2202 16.4466 12.4438 16.4466 12.4438M15.5672 14.5508C15.5672 14.5508 15.5665 15.7746 16.7845 15.7741C18.0026 15.7736 18.002 16.9973 18.002 16.9973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DatesIcon;
