import React from 'react'
import Page4Logo from './Page4Logo'
import Page4Text from './Page4Text'
import Page4Suggestion from './Page4Suggestion'
import Page4center from './Page4center'
import P4CentMid from './P4CentMid'
import Pge4Suggestion from './Pge4Suggestion'

const Page4 = () => {
  return (
    <div className='w-[100vw] min-h-[100vh] bg-slate-100 relative'>
      <Page4Logo/>
      <Page4Text/>
      <Page4Suggestion/>
      <Page4center/>
      <P4CentMid/>
      <Page4center/>
      <Pge4Suggestion/>
    </div>
  )
}

export default Page4