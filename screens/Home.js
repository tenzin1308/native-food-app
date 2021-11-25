import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import ResturantItems, { localRestaurants } from '../components/home/ResturantItems'
import SearchBar from '../components/home/SearchBar'

const YELP_API_KEY = 'lh6RLzf9KwCzCracqjAfSuDlFc389UXrp5RB8qQ44fHAw8R_W7_L1EDDwLORaF0LmeOoX1d_cnWkCYow4MFBAiTXhCEqP_UEOWUylx6VRciC5qjnTiQt6hCjf82fYXYx'

export default function Home({ navigation }) {
    const [restaurantsData, setRestaurantsData] = useState(localRestaurants)
    const [city, setCity] = useState('NewYork')
    const [activeTab, setActiveTab] = useState('Delivery')

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        }
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantsData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            )
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab])

    return (
        <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
            <View style={{ backgroundColor: 'white', padding: 15}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity} />
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ResturantItems restaurantsData={restaurantsData} navigation={navigation}/>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}
