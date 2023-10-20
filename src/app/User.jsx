async function getUsers() {
    const res = await fetch('http://localhost:4000/users', {
        next: {
            revalidate: 0
        }
    })

    return res.json()
}
export default async function Users() {
    const users = await getUsers()

    return (
      <div>
        {users.map((user) => (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.age}</p>
            </div>
            )
        )}
      </div>
    )
}