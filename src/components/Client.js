import { gql, useQuery } from "@apollo/client";
import { ClientRow } from "./ClientRow";

const GET_CLIENT = gql`
  query getCLient  {
    staffs{
        name,
        email,
        phone
    }

  }
`

export const Client = () => {
    const { loading, error, data} = useQuery(GET_CLIENT)
      console.log(data)
      if(loading) return <div>Loading.....</div>
      if(error) return <div>Something went wrong</div>

      return (
      <>
      
       {!loading && !error && (
        <table class="table-fixed space-x-12">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data.staffs.map(client => (
            <ClientRow  key={client.id} client={client}/>
          ))}
        </tbody>
      </table>
       )}
      </>
      )
}
