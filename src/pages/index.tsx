import type { NextPage } from 'next'
import { Dashboard } from '../component/UserProfile/Dashboard'
import { Profile } from '../component/UserProfile/Profile'






const Home: NextPage = () => {
  return (
    <Dashboard>
      <Profile />
    </Dashboard>
  )
}

export default Home
