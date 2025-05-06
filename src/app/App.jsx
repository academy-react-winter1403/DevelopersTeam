import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import "./../components/common/header/i18n"; 
import { router } from "./../config/router";

function App() {
  const client = new QueryClient();

 

  return (
    <QueryClientProvider client={client}>
      <div>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );

}

export default App;
