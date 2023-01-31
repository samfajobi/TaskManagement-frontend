import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import AddClient from "./components/AddClient";
import { Client } from "./components/Client";


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        staffs: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
});
 

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="App">
         <AddClient />
         <Client/>
        </div>
      </ApolloProvider>
    </>  
  );
}

export default App;
