import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function ProfileHeader({ user }: { user: any }) {

    return (
        <View style={styles.headerContainer}>
            <Image style={styles.image} source={require('../assets/profile.jpg')} />
            <View style={styles.infoProfileContainer}>
                <Text style={styles.profileName}>{user.name}</Text>
                <Text style={styles.profileMotivation}>{user.categorie}</Text>
                <Text style={styles.profileDescription}>{user.description}</Text>
                <TouchableOpacity style={styles.modifierBtn}>
                    <Text style={styles.modifierBtnText}>
                        <Icon name="pencil" color="#119B4A" size={15} /> Modifier
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    infoProfileContainer: {
        flexDirection: 'column',
        marginLeft: 20,
        gap: 5,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    profileMotivation: {
        fontSize: 14,
        color: '#119B4A',
    },
    profileDescription: {
        fontSize: 14,
        color: '#666',
        width: 200,
    },
    modifierBtn: {
        borderColor: '#119B4A',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        width: 100,
        marginTop: 5,
    },
    modifierBtnText: {
        color: '#119B4A',
        textAlign: 'center',
    },
})