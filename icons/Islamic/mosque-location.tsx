import * as React from "react";
import type { SVGProps } from "react";

interface MosqueLocationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MosqueLocationIcon = (props: MosqueLocationIconProps) => {
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
        <path d="M11.0065 7.49915C10.5502 6.89218 9.82364 6.49957 9.00534 6.49957C7.62396 6.49957 6.50413 7.61839 6.50413 8.99851C6.50413 10.2075 7.36342 11.216 8.5051 11.4475M8.95009 17.9947C8.69915 17.9947 8.45252 17.9276 8.23443 17.8002C5.24742 15.8848 2.00195 13.1277 2.00195 9.13906C2.00195 5.22648 5.18994 2.00146 8.95009 2.00146C10.9176 2.00146 12.7283 2.88438 14.0078 4.28674" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.6197 15.5502C11.2594 13.8948 11.0273 12.2324 12.9736 10.2139C15.0182 8.38941 16.1957 7.52656 16.5094 7.00732C16.823 7.52656 18.0196 8.38941 20.0643 10.2139C21.9173 11.8674 21.8007 13.8948 20.4404 15.5502M12.6197 15.5502H12.0975M12.6197 15.5502H20.4404M20.4404 15.5502H20.9005M11.0273 15.5502H12.0975M12.0975 15.5502V21.0929C12.1374 21.7604 12.0975 22.0718 13.3079 21.9844H16.4905M20.9005 15.5502H21.9989M20.9005 15.5502V21.1943C21.0172 22.1009 20.2955 21.9419 19.834 21.9844H16.4905M16.4905 21.9844L16.5259 19.8506" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MosqueLocationIcon;
