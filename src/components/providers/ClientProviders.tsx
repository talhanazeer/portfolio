"use client";

import { MagneticCursor } from "./MagneticCursor";
import { SmoothScroll } from "./SmoothScroll";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <MagneticCursor />
      {children}
    </SmoothScroll>
  );
}
