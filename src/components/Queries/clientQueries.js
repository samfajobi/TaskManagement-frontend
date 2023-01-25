import { gql } from "@apollo/client";


const GET_CLIENT = gql`
query getCLient  {
  staffs{
      name,
      email,
      phone
  }

}
`

export { GET_CLIENT };