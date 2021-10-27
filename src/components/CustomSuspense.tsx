// import { Spin } from 'antd';
import React, { FC, Suspense, useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Spin, Space } from "antd";

const SHOW_FALLBACK_DELAY = 500;

export interface CustomSuspenseProps {
  fallback?: any;
  fallbackDelay?: number;
  enableDelay?: boolean;
}

const FallbackWrapper: FC<{
  onMount: () => any;
}> = ({ children, onMount }) => {
  useEffect(() => {
    onMount();
  }, []);

  return <>{children}</>;
};

const defaultFallback = (
  <div className="loading">
    <Space size="middle">
      <Spin size="large" />
    </Space>
  </div>
);
const CustomSuspense: FC<CustomSuspenseProps> = ({
  children,
  enableDelay = false,
  fallback = defaultFallback,
  fallbackDelay = SHOW_FALLBACK_DELAY,
}) => {
  const [showFallback, setShowFallback] = useState(!enableDelay);
  console.log("in custom suspense", children);
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <FallbackWrapper
            onMount={() => {
              if (!enableDelay) return;
              setShowFallback(false);
              setTimeout(() => {
                setShowFallback(true);
              }, fallbackDelay);
            }}
          >
            {showFallback && fallback}
          </FallbackWrapper>
        }
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default CustomSuspense;
