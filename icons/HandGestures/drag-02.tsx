import * as React from "react";
import type { SVGProps } from "react";

interface Drag02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Drag02Icon = (props: Drag02IconProps) => {
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
        <path d="M8.49219 16.7703L8.73989 16.5275C9.30129 15.9774 9.62108 15.2257 9.62871 14.4382L9.67857 9.2945C9.68533 8.59711 9.91028 7.86035 10.543 7.571C11.4998 7.13342 12.6824 7.38049 12.8954 9.42626L13.2235 11.155L18.8029 4.45448C19.9704 3.35289 22.0428 4.74545 21.139 6.471L17.8577 10.4208C19.1381 11.2809 23.8619 16.1714 20.0364 18.6606C19.4847 19.1413 18.1779 19.8385 17.038 20.2011C15.9512 20.5469 15.2691 21.7304 14.9346 21.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.48385 3.51398C9.48385 4.35006 10.1353 5.02784 10.9388 5.02784C11.7423 5.02784 12.3937 4.35006 12.3937 3.51398C12.3937 2.6779 11.7423 2.00012 10.9388 2.00012C10.1353 2.00012 9.48385 2.6779 9.48385 3.51398ZM9.48385 3.51398H8.83998L8.06938 3.58624M3.98971 8.94285C4.82668 8.9291 5.46389 9.58457 5.47714 10.3961C5.4904 11.2077 4.86756 11.9061 4.03059 11.9198C3.19362 11.9336 2.5115 11.2487 2.49824 10.4372C2.48499 9.62562 3.15274 8.95659 3.98971 8.94285ZM3.98971 8.94285L4.07935 7.60966M5.77458 4.65096L5.44678 4.9579L5.15713 5.27066" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Drag02Icon;
