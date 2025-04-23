import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./../config/router";
import { Provider } from "react-redux";

function App() {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        {/* <Provider store={}> */}
          <RouterProvider router={router} />
        {/* </Provider> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
