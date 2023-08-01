import { useRouter } from 'next/router'

const UserProfile = () => {
    const router = useRouter()
    
    return (
        <div>User: {router.query.id}</div>
    )
}

export default UserProfile
