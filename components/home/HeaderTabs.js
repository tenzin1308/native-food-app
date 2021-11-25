import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function HeaderTabs({activeTab, setActiveTab}) {
    return (
        <View style={{flexDirection: "row", alignSelf: "center"}}>
            <HeaderButton
                text="Delivery"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30
    }}
    onPress={() => props.setActiveTab(props.text)}
    >
            <Text style={{color: props.activeTab === props.text ? 'white' : 'black', fontSize:15, fontWeight: "900"}}>{props.text}</Text>
    </TouchableOpacity>
)