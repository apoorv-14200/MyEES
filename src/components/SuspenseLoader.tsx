import React, { Suspense, FC } from "react";
import { Spin, Space } from "antd";

const SuspenseLoader: FC = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseLoader;
