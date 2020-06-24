import React from 'react'
import Axios from 'axios'
import {SafeAreaView,View, Text, Button } from 'react-native'

const Main = ()=>{
    const fetchData = ()=>{
     
    }
    return(
        <SafeAreaView>
            <View>
                <Button title="Fetch Data" onPress={fetchData}/>
            </View>
        </SafeAreaView>
    )

}
export default Main