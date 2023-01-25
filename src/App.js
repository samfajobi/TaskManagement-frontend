import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Client } from "./components/Client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="App">
         <Client/>
        </div>
      </ApolloProvider>
    </>
   
   
  );
}

export default App;
