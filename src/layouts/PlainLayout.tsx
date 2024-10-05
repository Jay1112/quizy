import { ReactNode } from "react";

interface PlainLayoutProps {
  children?: ReactNode
  className? : string
}

function PlainLayout({ children, className }: PlainLayoutProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

export default PlainLayout;
