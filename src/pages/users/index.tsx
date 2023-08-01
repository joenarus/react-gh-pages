import useSWR from 'swr'
 

const Users = () => {
    const { data, error, isLoading } = useSWR(`
    {
      users {
        id
        firstname
        lastname
      }
    }`)
    return (
      <div>
        {isLoading ? (
          <div> Loading </div>
        ) : (
          <div>
            {data?.users.map((user) => {
              return (
                <div key={user.id}>{user.firstname} {user.lastname}</div>
              )
            })}
          </div>
        )}
      </div>
    )
}

export default Users