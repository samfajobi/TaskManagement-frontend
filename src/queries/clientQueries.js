import { gql } from "@apollo/client";


const GET_CLIENT = gql`
query getCLient  {
  staffs{
      id,
      name,
      email,
      phone
  }

}
`

export { GET_CLIENT };