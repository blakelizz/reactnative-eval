import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function ProfileInfo({ user }: { user: any }) {
    return (
        <View style={styles.container}>
            <View style={styles.infoCard}>
                <View style={styles.iconeContainer}><Icon name="bullseye-arrow" color='#119B4A' size={30} /></View>
                <View style={styles.cardText}>
                    <Text style={styles.titleinfo}>Objectif principal</Text>
                    <Text style={styles.descriptionInfo}>{user.mainGoal}</Text>
                </View>
            </View>

            <View style={styles.infoCard}>
                <View style={styles.iconeContainer}><Icon name="shoe-sneaker" color='#119B4A' size={30} /></View>
                <View style={styles.cardText}>
                    <Text style={styles.titleinfo}>Objectif de poids</Text>
                    <Text style={styles.descriptionInfo}>{user.targetWeight} kg</Text>
                </View>
            </View>

            <View style={styles.infoCard}>
                <View style={styles.iconeContainer}><Icon name="calendar-blank" color='#119B4A' size={30} /></View>
                <View style={styles.cardText}>
                    <Text style={styles.titleinfo}>Activité favorite</Text>
                    <Text style={styles.descriptionInfo}>{user.favoriteActivity}</Text>
                </View>
            </View>

            <View style={styles.infoCard}>
                <View style={styles.iconeContainer}><Icon name="align-vertical-bottom" color='#119B4A' size={30} /></View>
                <View style={styles.cardText}>
                    <Text style={styles.titleinfo}>Niveau Sportif</Text>
                    <Text style={styles.descriptionInfo}>{user.level}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 5,
    },

    iconeContainer: {
        backgroundColor: '#EEF9F3',
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoCard: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: '#F9F9F9',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
    },
    cardText: {
        marginLeft: 10,
        flexDirection: 'column',
        gap: 5,
    },
    titleinfo: {
        fontWeight: 'bold',
    },
    descriptionInfo: {
        color: '#666',
    },
});