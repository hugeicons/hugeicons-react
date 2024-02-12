import * as React from "react";
import type { SVGProps } from "react";

interface WhistleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WhistleIcon = (props: WhistleIconProps) => {
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
        <path d="M3.10335 11.5252C4.55184 9.4378 7.06778 8.86485 8.53726 9.00054H11.0605C11.5883 9.09126 11.7336 9.30978 12.3875 10.3428C12.5064 10.6673 14.4417 10.4487 14.9503 10.5017C15.5087 9.96055 14.9503 8.85082 16.1907 9.00826C18.3191 9.00826 20.3586 8.91699 21.2922 9.0542C21.6777 9.11085 21.863 9.45879 21.9186 9.84439C22.1418 11.3942 21.876 12.5285 21.6189 12.7882C20.9321 14.004 18.9499 15.1828 17.9673 14.9959C15.1327 14.9959 14.5197 14.9221 14.2739 15.3924L13.4097 17.6267C12.8326 18.8562 10.8094 21.283 7.41581 20.9705C4.02221 20.6581 2.54663 17.9449 2.24363 16.6574C1.94063 15.8329 1.6539 13.6141 3.10335 11.5252Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.4895 5.00318V3.00195M10.9943 6.00379L9.99622 5.00318M15.9846 6.00379L16.9827 5.00318" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.08411 17C9.18868 17 10.0841 16.1046 10.0841 15C10.0841 13.8954 9.18868 13 8.08411 13C6.97954 13 6.08411 13.8954 6.08411 15C6.08411 16.1046 6.97954 17 8.08411 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WhistleIcon;
