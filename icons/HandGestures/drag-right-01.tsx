import * as React from "react";
import type { SVGProps } from "react";

interface DragRight01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DragRight01Icon = (props: DragRight01IconProps) => {
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
        <path d="M8.66774 8.4877C7.64819 7.87648 6.96631 6.76432 6.96631 5.49372C6.96631 3.56459 8.53813 2.00073 10.4771 2.00073C12.416 2.00073 13.9878 3.56459 13.9878 5.49372C13.9878 6.76432 13.306 7.87648 12.2864 8.4877" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18.0127 2.99023L19.7598 4.43095C20.0154 4.70291 20.0581 4.90799 19.932 5.20934C19.8864 5.31849 19.8088 5.41067 19.7201 5.48911L18.0127 6.99909M14.415 4.97515H18.8312" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.56028 21.9331L8.58577 21.3034C8.61069 20.6879 8.44841 20.0756 8.10476 19.5609C6.75272 17.536 5.71955 16.3829 4.30356 14.4078C4.1914 14.2514 4.08651 14.0857 4.04231 13.8989C3.70086 12.4556 5.46518 10.5772 7.09939 12.7405L8.69475 14.3711L8.69475 6.33905C8.9063 4.69321 11.5057 4.36674 11.944 6.33903L11.944 10.077C13.5654 9.92995 20.1188 11.0541 18.882 15.5361C18.824 15.7461 18.7686 15.9606 18.7114 16.1708C18.5031 16.9367 17.9936 18.0548 17.5029 19.0078C16.9574 20.0676 17.101 21.5647 17.0086 21.9993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DragRight01Icon;
