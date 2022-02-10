import type { NextPage } from 'next'
import { Provider } from 'react-redux'
import { Congratulation } from '../component/congratulation'

import store from '../store'






const Home: NextPage = () => {
  return (
    
    <Provider store={store}>
    <Congratulation/>
    </Provider>
  )
}

export default Home
