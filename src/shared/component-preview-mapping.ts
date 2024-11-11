import React from "react";

export const COMPONENT_PREVIEW_MAPPING: Record<
  string,
  React.LazyExoticComponent<() => React.JSX.Element>
> = {
  "hero-example": React.lazy(() => import("@/components/hero-example")),
};
