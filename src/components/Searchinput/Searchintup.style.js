import { StyleSheet } from "react-native";
import color from "../../constants/color"

export default styles = StyleSheet.create ({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        paddingTop: 10,
    },
    input: {
        color: "white",
        backgroundColor: "#7BCAF0",
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        width: "80%",
    },
    textinput: {
        color: "black",
    }
})