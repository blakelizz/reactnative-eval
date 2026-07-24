import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type DashboardData = {
    stats: {
        sessions: number;
        spentTime: number;
        kcal: number;
    };
    goals: {
        title: string;
        target: string;
    }[];
};

export function Home() {

    const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    const loadDashboard = async () => {
        try {
            const response = await fetch(
                "https://labs.nicolas.sh/reactnative/evmod/api/?fixed=true"
            );

            if (!response.ok) {
                throw new Error("Erreur API");
            }

            const data = await response.json();

            // Vérification des données
            if (!data.stats || !data.goals) {
                throw new Error("Données manquantes");
            }

            // Mise à jour du state
            setDashboardData(data);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            Alert.alert("Erreur", "Une erreur réseau s'est produite");
        }
    };

    useEffect(() => {
        loadDashboard();
    }, []);

    if (isLoading || !dashboardData) {
        return <ActivityIndicator size="large" color="#538D4E" />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>Goals</Text>
            <Text style={styles.descriptionPage}>Continuez vos efforts !</Text>

            <View>
                <Text style={styles.title}>Mes statistiques</Text>

                <View style={styles.statContainer}>
                    <View style={styles.statCardContainer}>
                        <View style={styles.iconContainer}></View>
                        <Text style={styles.stat}>{dashboardData.stats.sessions}</Text>
                        <Text style={styles.statUnite}>séances</Text>
                        <Text style={styles.statText}>Total réalisé</Text>
                    </View>

                    <View style={styles.statCardContainer}>
                        <View style={styles.iconContainer}></View>
                        <Text style={styles.stat}>{dashboardData.stats.spentTime}</Text>
                        <Text style={styles.statUnite}>minutes</Text>
                        <Text style={styles.statText}>Temps total</Text>
                    </View>

                    <View style={styles.statCardContainer}>
                        <View style={styles.iconContainer}></View>
                        <Text style={styles.stat}>{dashboardData.stats.kcal}</Text>
                        <Text style={styles.statUnite}>kcal</Text>
                        <Text style={styles.statText}>Calories brûlées</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={styles.title}>Mes objectifs</Text>

                <View style={styles.containerObjectif}>
                    {dashboardData.goals.map((goal, index) => (
                        <View key={index} style={styles.cardObjectif}>
                            <View style={styles.iconContainer}></View>
                            <View style={styles.objectifContainerText}>
                                <Text style={styles.objectifTitle}>{goal.title}</Text>
                                <Text style={styles.objectifDescription}>{goal.target}</Text>
                            </View>
                            <View></View>
                        </View>
                    ))}
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        paddingHorizontal: 20,
    },
    appTitle:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    descriptionPage: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 16,
        color: '#666',
        fontWeight: '600',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    statContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
    },
    iconContainer: {
        width: 70,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#EEF9F3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statCardContainer: {
        flexDirection: 'column',
        gap: 10,
        borderRadius: 15,
        padding: 15,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: '#F9F9F9',
    },
    stat: {
        color: '#119B4A',
        fontSize: 30,
        fontWeight: 'bold',
    },
    statUnite: {
        color: '#5b5b5b',
        fontWeight: '600',
    },
    statText: {
        color: '#666',
        fontSize: 12,
        fontWeight: '600',
    },
    containerObjectif: {
        flexDirection: 'column-reverse',
        gap: 5,
    },
    cardObjectif: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: '#F9F9F9',
        padding: 15,
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    objectifTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    objectifDescription: {
        color: '#666',
        fontWeight: '600',
    },
    objectifContainerText: {
        flexDirection: 'column',
        gap: 5,
    },
    iconContainerSecond: {
        width: 70,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#FEEDE0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainerThird: {
        width: 70,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#E9EEFC',
        justifyContent: 'center',
        alignItems: 'center',
    },

});