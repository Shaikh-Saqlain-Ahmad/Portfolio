import React from 'react';
import { Button } from "@/components/ui/button";

interface ButtonDemoProps {
  href: string;
  download?: string;
  children: React.ReactNode;
}

export function ButtonDemo({ href, download, children }: ButtonDemoProps) {
  return (
    <Button>
      <a className="scroll-m-20 text-xl font-semibold tracking-tight" href={href} download={download}>
        {children}
      </a>
    </Button>
  );
}

export default ButtonDemo;
