import { gql } from "@apollo/client"

const DELETE_STAFF = gql`
    mutation deleteStaff($id: ID!) {
        deleteStaff(id: $id) {
            id,
            name,
            email
        }
    }
`

export { DELETE_STAFF };
