import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const ClientRow = ({client}) => {
  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td><DeleteOutlineOutlinedIcon /></td>
    </tr>
  )
}
