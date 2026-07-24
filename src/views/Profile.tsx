import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileInfo } from "../components/ProfileInfo";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Profile() {

    const user = {
        "name": "Léo Martin",
        "categorie": "Sportif amateur",
        //j'ai ajouté la description de l'user ici (n'apparait pas dans le devoir)
        "description": "Passionné de sport et toujours motivé pour me dépasser.",
        "mainGoal": "Courir 3 fois par semaine",
        "targetWeight": 75,
        "favoriteActivity": "Running",
        "level": "Débutant"
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>Goals</Text>
            <Text style={styles.title}>Mon profil</Text>

            <ProfileHeader user={user} />

            <Text style={styles.title}>Mes informations</Text>

            <ProfileInfo user={user} />

            <TouchableOpacity style={styles.cardMotivation}>
                <Icon name="trophy" color='#119B4A' size={40} />
                <View>
                    <Text style={styles.textBold}>Continuez vos efforts !</Text>
                    <Text style={styles.descriptionCardMotivation}>Chaque séance vous rapproche de vos objectifs.</Text>
                </View>
                <Icon name="greater-than" color='#119B4A' size={20} style={[ {alignSelf:'center'} ]} />
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        paddingHorizontal: 20,
    },
    appTitle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardMotivation: {
        backgroundColor: '#EEF9F3',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    textBold: {
        fontWeight: 'bold',
    },
    descriptionCardMotivation: {
        fontSize: 14,
        color: '#666',
        width: 200,
    },
});