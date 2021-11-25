import React from 'react';
import { Image, Text, View } from 'react-native';

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    price: "$$",
    reviews: "1500",
    rating: 4.5,
    categories: [{title: 'Indian'}, {title: 'Comfort food'}]
}

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(' · ');

const description = `${formattedCategories} ${price ? " · " + price : ""} · 🎫 · ${rating} ⭐️ (${reviews}+)`

export default function About() {
    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantName name={name} />
            <RestaurantDescription description={description}/>
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
)
const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15
        }}>{props.name}</Text>
)
const RestaurantDescription = (props) => (
    <Text
        style={{
            fontSize: 15.5,
            fontWeight: "400",
            marginTop: 10,
            marginHorizontal: 15
        }}>{props.description}</Text>
)