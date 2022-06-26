import { Platform } from "react-native";
import colors from "./colors";

export default {
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto"
    }
 }