import React, { Suspense, FC } from "react";

const SuspenseLoader: FC = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          LOADING
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseLoader;
