import { Image, StyleSheet, Text, View } from "react-native";

export function ProfileHeader({ user }: { user: any }) {

    return (
        <View style={styles.headerContainer}>
            <Image style={styles.image} source={require('../assets/profile.jpg')} />
            <View style={styles.infoProfileContainer}>
                <Text style={styles.profileName}>{user.name}</Text>
                <Text style={styles.profileMotivation}>{user.categorie}</Text>
                <Text style={styles.profileDescription}>{user.description}</Text>
                <View style={styles.modifierBtn}>
                    <Text style={styles.modifierBtnText}>Modifier</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: 20,
    },
    infoProfileContainer:{
        flexDirection: 'column',
        marginLeft: 10,
        gap: 5,
    },
    image:{
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    profileName:{
        fontWeight: 'bold',
        fontSize: 20    ,
    },
    profileMotivation:{
        fontSize: 14,
        color: '#119B4A',
    },
    profileDescription:{
        fontSize: 14,
        color: '#666',
        width: 200,
    },
    modifierBtn:{
        borderColor: '#119B4A',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: 100,
        marginTop: 5,
    },
    modifierBtnText:{
        color: '#119B4A',
        textAlign: 'center',
    }, 
})