import * as React from "react";
import type { SVGProps } from "react";

interface StructureCheckIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StructureCheckIcon = (props: StructureCheckIconProps) => {
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
        <path d="M15.0212 5C15.0212 3.58579 15.0212 2.87868 15.5324 2.43934C16.0435 2 16.8662 2 18.5116 2C20.1569 2 20.9797 2 21.4907 2.43934C22.0019 2.87868 22.0019 3.58579 22.0019 5C22.0019 6.41421 22.0019 7.12132 21.4907 7.56066C20.9797 8 20.1569 8 18.5116 8C16.8662 8 16.0435 8 15.5324 7.56066C15.0212 7.12132 15.0212 6.41421 15.0212 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.0212 19C15.0212 17.5858 15.0212 16.8787 15.5324 16.4393C16.0435 16 16.8662 16 18.5116 16C20.1569 16 20.9797 16 21.4907 16.4393C22.0019 16.8787 22.0019 17.5858 22.0019 19C22.0019 20.4142 22.0019 21.1213 21.4907 21.5607C20.9797 22 20.1569 22 18.5116 22C16.8662 22 16.0435 22 15.5324 21.5607C15.0212 21.1213 15.0212 20.4142 15.0212 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.05525 17.0436C9.82537 17.0436 12.0298 14.7831 12.0298 12.0053C12.0298 9.22755 9.78417 6.97571 7.01404 6.97571M7.05525 17.0436C4.28512 17.0436 1.99829 14.7831 1.99829 12.0053C1.99829 9.22755 4.24392 6.97571 7.01404 6.97571M7.05525 17.0436C6.98548 19.1734 8.54461 19.951 9.65482 19.9917H12.0298M7.01404 6.97571C6.94356 4.81563 8.52985 4.05604 9.65482 4.0083H12.0406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.70987 10.8793L6.63847 13.0465C6.56037 13.1282 6.43027 13.1287 6.35155 13.0476L5.37964 12.0462" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default StructureCheckIcon;
