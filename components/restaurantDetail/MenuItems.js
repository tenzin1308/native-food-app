import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Divider } from 'react-native-elements'

const foods = [
    {
        title: 'Lasagna',
        description: 'with butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://s23209.pcdn.co/wp-content/uploads/2016/03/Easiest-Lasagna-EverIMG_0217.jpg'
    },
    {
        title: 'Steam MoMo',
        description: 'with butter lettuce, tomato and sauce bechamel',
        price: '$13',
        image: 'https://femina.wwmindia.com/thumb/content/2020/jul/momos-01-thumb1596107536.jpg?width=1200&height=900'
    },
    {
        title: 'Chicken Lollipop',
        description: 'with butter lettuce, tomato and sauce bechamel',
        price: '$12.50',
        image: 'https://myfoodstory.com/wp-content/uploads/2020/02/Chicken-Lollipop-4.jpg'
    },
    {
        title: 'Tacos',
        description: 'with butter lettuce, tomato and sauce bechamel',
        price: '$15',
        image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520956952-chicken-tacos-horizontal.jpg?resize=1200:*'
    },
    {
        title: 'Lasagna',
        description: 'with butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://s23209.pcdn.co/wp-content/uploads/2016/03/Easiest-Lasagna-EverIMG_0217.jpg'
    },
    {
        title: 'Steam MoMo',
        description: 'with butter lettuce, tomato and sauce bechamel',
        price: '$13',
        image: 'https://femina.wwmindia.com/thumb/content/2020/jul/momos-01-thumb1596107536.jpg?width=1200&height=900'
    },
    {
        title: 'Chicken Lollipop',
        description: 'with butter lettuce, tomato and sauce bechamel',
        price: '$12.50',
        image: 'https://myfoodstory.com/wp-content/uploads/2020/02/Chicken-Lollipop-4.jpg'
    },
    {
        title: 'Tacos',
        description: 'with butter lettuce, tomato and sauce bechamel',
        price: '$15',
        image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520956952-chicken-tacos-horizontal.jpg?resize=1200:*'
    }
]

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600"
    }
})

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle} >
                        <BouncyCheckbox
                            iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
                            fillColor="green"
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} orientation='vertical' style={{marginHorizontal: 20}} />
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={{width: 240, justifyContent: 'space-evenly'}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)
const FoodImage = (props) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 8}} />
    </View>
)