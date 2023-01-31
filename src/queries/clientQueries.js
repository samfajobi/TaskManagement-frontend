import { gql } from "@apollo/client";


const GET_CLIENT = gql`
query getClient  {
  staffs{
      id,
      name,
      email,
      phone
  }
}
`

export { GET_CLIENT };