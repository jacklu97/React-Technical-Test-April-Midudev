import { SortBy, type User } from '../types.d'

interface Props {
  users: User[]
  showColors: boolean
  onUserDelete: (index: string) => void
  onHeaderSort: (sort: SortBy) => void
}

const UsersList = ({ users, showColors, onUserDelete, onHeaderSort }: Props) => {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Foto</th>
          <th className='pointer' onClick={() => { onHeaderSort(SortBy.NAME) }} >Nombre</th>
          <th className='pointer' onClick={() => { onHeaderSort(SortBy.LAST) }} >Apellido</th>
          <th className='pointer' onClick={() => { onHeaderSort(SortBy.COUNTRY) }} >Pais</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const backgroundColor = index % 2 === 0 ? '#333' : '#555'
          const color = showColors ? backgroundColor : 'transparent'
          return (
            <tr key={user.login.uuid} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => {
                  onUserDelete(user.login.uuid)
                }} >Borrar</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UsersList
