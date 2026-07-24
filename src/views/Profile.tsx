import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileInfo } from "../components/ProfileInfo";

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

            <View>
                <View></View>
                <View style={styles.cardMotivation}>
                    <View style={styles.iconCardMotivation}></View>
                    <View>
                        <Text style={styles.textBold}>Continuez vos efforts !</Text>
                        <Text style={styles.descriptionCardMotivation}>Chaque séance vous rapproche de vos objectifs.</Text>
                    </View>
                    <View style={styles.iconCardMotivation}></View>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardMotivation: {
        backgroundColor: '#EEF9F3',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    iconCardMotivation: {
        width: 50,
        height: 50,
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