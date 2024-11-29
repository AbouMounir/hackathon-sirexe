import { React} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import { Menu, Bell } from "lucide-react-native";


export default function TopBarScreen() {
    return (
        <View style={styles.titleAppContainer}>
            <View style={styles.left}>
                <TouchableOpacity>
                    <Menu color="#78350F" size={28} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Coop. Minière Sud</Text>
            </View>
            <TouchableOpacity>
                <Bell color="#78350F" size={24} />
            </TouchableOpacity>
          </View>
    );
}

const styles = StyleSheet.create({
    titleAppContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    left: {
        flexDirection: 'row',
        alignContent:'center'
    },
    headerTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#78350F',
        marginLeft:12,
    }
})