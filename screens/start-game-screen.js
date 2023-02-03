import { TextInput, StyleSheet, View } from "react-native";
import PrimaryBtn from "../Components/primary-btn";

function StartGameScreen(){
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} maxLength={2}/>
            <PrimaryBtn>Reset</PrimaryBtn>
            <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#72063c',
        // shadow for android
        elevation: 4,
        // shadow for iOs
        shadowColor: 'balck',
        shadowOffset: {width: 4, height: 4},
        shadowRadius: 6,
        shadowOpacity:0.33
    },
    input: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
