import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import ResturantItems, { localRestaurants } from '../components/ResturantItems'
import SearchBar from '../components/SearchBar'

// const YELP_API_KEY = process.env.REACT_NATIVE_YELP_API
const YELP_API_KEY = 'lh6RLzf9KwCzCracqjAfSuDlFc389UXrp5RB8qQ44fHAw8R_W7_L1EDDwLORaF0LmeOoX1d_cnWkCYow4MFBAiTXhCEqP_UEOWUylx6VRciC5qjnTiQt6hCjf82fYXYx'

export default function Home() {
    const [restaurantsData, setRestaurantsData] = useState(localRestaurants)
    const [city, setCity] = useState('NewYork')

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        }
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json() )
                .then((json) => setRestaurantsData(json.businesses))
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city])

    return (
        <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
            <View style={{ backgroundColor: 'white', padding: 15}}>
                <HeaderTabs />
                <SearchBar cityHandler={setCity} />
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ResturantItems restaurantsData={restaurantsData}/>
            </ScrollView>
        </SafeAreaView>
    )
}
