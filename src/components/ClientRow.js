import { useMutation } from "@apollo/client";
import { DELETE_STAFF } from "../mutations/clientMutation";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { GET_CLIENT } from "../queries/clientQueries";




export const ClientRow = ({client}) => {
  const [ deleteStaff ] = useMutation(DELETE_STAFF, {
    variables: { id: client.id},

    update(cache, {data: {deleteStaff}}) {
      const { clients } = cache.readQuery({query: GET_CLIENT });
      cache.writeQuery({
        query: GET_CLIENT,
        data: {clients: clients?.filter(client => client.id !== deleteStaff.id)}
      })
    }
  });  

  // console.log(client.id)
  console.log(deleteStaff.id)
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td><button onClick={deleteStaff}><DeleteOutlineOutlinedIcon /></button></td>
    </tr>
  )
};  