import { useMutation } from "@apollo/client";
import { DELETE_STAFF } from "../mutations/clientMutation";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



export const ClientRow = ({client}) => {
  const [ deleteStaff ] = useMutation(DELETE_STAFF, {
    variables: { id: client.id}
  });
  console.log(client.id)
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td><button onClick={deleteStaff}><DeleteOutlineOutlinedIcon /></button></td>
    </tr>
  )
};  