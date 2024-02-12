import * as React from "react";
import type { SVGProps } from "react";

interface CursorCircleSelection02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorCircleSelection02Icon = (props: CursorCircleSelection02IconProps) => {
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
        <path d="M9.30945 9.37832C10.7997 7.77346 22.0092 11.7048 22 13.1402C21.9895 14.7678 17.6224 15.2685 16.4119 15.6081C15.684 15.8124 15.489 16.0217 15.3212 16.785C14.561 20.2419 14.1794 21.9613 13.3096 21.9997C11.9231 22.061 7.85508 10.9445 9.30945 9.37832Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.6776 7.65217C19.8002 7.94578 19.908 8.24711 20 8.55522M18.0629 5.08488C17.3736 4.30961 16.5551 3.65176 15.6412 3.14511M12.721 2.12462C11.6288 1.94158 10.4517 1.9609 9.37136 2.17778M6.08403 3.54547C5.0775 4.21914 4.21142 5.0863 3.539 6.09376M2.17479 9.3864C1.95891 10.4711 1.94226 11.6525 2.12898 12.7474M3.14447 15.6406C3.64363 16.5414 4.28964 17.3494 5.05017 18.0325M7.66402 19.6832C7.9532 19.8035 8.24984 19.9093 8.55306 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CursorCircleSelection02Icon;
