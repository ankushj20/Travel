import React from 'react'
import Page2Logo from './Page2Logo'
import PageLogoText from './PageLogoText'
import Page2Suggestion from './Page2Suggestion'
import AlltripsBrousher from './AlltripsBrousher'
import Page2ChnagingDiv from './Page2ChnagingDiv'

const Page2 = () => {
  return (
    <div className='w-[100vw] h-min-[100vh] relative '>
        <Page2Logo/>
        <PageLogoText/>
        <Page2Suggestion/>
        <AlltripsBrousher/>
        <Page2ChnagingDiv/>
    </div>
  )
}

export default Page2