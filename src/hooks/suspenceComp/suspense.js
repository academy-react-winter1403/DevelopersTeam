import React, { Suspense, lazy } from 'react';


export const LazyComponent = lazy(() => import('../lazy'));

const SuspenceComp = () =>{
    return (
        <div>
          <Suspense fallback={<div>در حال بارگذاری ...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      );
}

export default SuspenceComp;
