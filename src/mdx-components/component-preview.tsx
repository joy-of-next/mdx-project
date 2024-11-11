import { COMPONENT_PREVIEW_MAPPING } from "@/shared/component-preview-mapping";
import styles from "./component-preview.module.css";
import { Suspense } from "react";

export function ComponentPreview({ name }: { name: string }) {
  const Preview = COMPONENT_PREVIEW_MAPPING[name] ?? NotFondComponent;

  return (
    <div className={styles.componentPreview}>
      <Suspense>
        <Preview />
      </Suspense>
    </div>
  );
}

function NotFondComponent({ name }: { name: string }) {
  return <div>Not fond component: {name}</div>;
}
