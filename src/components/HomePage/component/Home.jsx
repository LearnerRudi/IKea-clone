import React from 'react'
import Welcome from './Welcome'
import ShopNow from './ShopNow'
import Slider from './slider'
import FamilyOffer from './FamilyOffer'
import FurnitureSlider from './FurnitureSlider'
import Accessories from './Accessories'
import Explore from './Explore'
import CardSlider from './CardSlider'
import Collection from './Collection'
function Home() {
  return (
    <div>
        <Welcome/>
        <ShopNow/>
        <Slider/>
        <Explore/>
        <CardSlider/>
        <Collection/>
        <FamilyOffer/>
        <FurnitureSlider/>
        <Accessories/>
    </div>
  )
}

export default Home