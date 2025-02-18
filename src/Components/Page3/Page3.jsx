import React from 'react'
import Page3Logo from './Page3Logo'
import Page3LogoText from './Page3LogoText'
import Page3Suggestion from './Page3Suggestion'
import P3Offers from './P3Offers'
import P3Offer2 from './P3Offer2'

const Page3 = () => {
  return (
    <div className='w-[100vw] min-h-[100vh] relative bg-[#F1F5FF]'>
        <Page3Logo/>
        <Page3LogoText/>
        <Page3Suggestion/>
        <P3Offers/>
    </div>
  )
}

export default Page3