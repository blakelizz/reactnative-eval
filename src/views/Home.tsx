import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
    const [error, setError] = useState(false);


    const loadDashboard = async () => {
        try {
            const response = await fetch(
                "https://labs.nicolas.sh/reactnative/evmod/api/?fixed=true"
            );

            if (!response.ok) {
                throw new Error("Erreur API");
            }

            const data = await response.json();

            if (!data.stats || !data.goals) {
                throw new Error("Données manquantes");
            }

            setDashboardData(data);
            setIsLoading(false);

        } catch (error) {
            setError(true);

        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadDashboard();
    }, []);

    if (error) {
        return (
            <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>

                <Text style={{ textAlign: 'center', fontSize: 16, marginBottom: 20 }}>Impossible de récupérer vos données sportives. Vérifiez votre connexion et réessayez.</Text>

                <TouchableOpacity
                    style={styles.btnRetry}
                    onPress={loadDashboard}
                >
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Réessayer</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    if (isLoading || !dashboardData) {
        return (
            <SafeAreaView
                style={[styles.container, { justifyContent: 'center', gap: 8 }]}
            >
                <ActivityIndicator size="large" color="#119B4A" />
                <Text style={[{ textAlign: 'center' }]}>Chargement de votre activité...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.appTitle}>Goals</Text>
                <Icon name="account-circle-outline" color='#119B4A' size={35} />
            </View>
            <Text style={styles.descriptionPage}>Continuez vos efforts ! 💪</Text>

            <View>
                <Text style={styles.title}>Mes statistiques</Text>

                <View style={styles.statContainer}>
                    <View style={styles.statCardContainer}>
                        <View style={styles.iconContainer}><Icon name="shoe-sneaker" color='#119B4A' size={30} /></View>
                        <Text style={styles.stat}>{dashboardData.stats.sessions}</Text>
                        <Text style={styles.statUnite}>séances</Text>
                        <Text style={styles.statText}>Total réalisé</Text>
                    </View>

                    <View style={styles.statCardContainer}>
                        <View style={[styles.iconContainer, { backgroundColor: '#E9EEFC' }]}><Icon name="clock-time-four-outline" color='#166CFD' size={30} /></View>
                        <Text style={[styles.stat, { color: '#166CFD' }]}>{dashboardData.stats.spentTime}</Text>
                        <Text style={styles.statUnite}>minutes</Text>
                        <Text style={styles.statText}>Temps total</Text>
                    </View>

                    <View style={styles.statCardContainer}>
                        <View style={[styles.iconContainer, { backgroundColor: '#FEEDE0' }]}><Icon name="fire" color='#FD660B' size={30} /></View>
                        <Text style={[styles.stat, { color: '#FD660B' }]}>{dashboardData.stats.kcal}</Text>
                        <Text style={styles.statUnite}>kcal</Text>
                        <Text style={styles.statText}>Calories brûlées</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={styles.title}>Mes objectifs</Text>

                <View style={styles.containerObjectif}>
                    {/* {dashboardData.goals.map((goal, index) => (
                        <View key={index} style={styles.cardObjectif}>
                            <View style={styles.iconContainer}></View>
                            <View style={styles.objectifContainerText}>
                                <Text style={styles.objectifTitle}>{goal.title}</Text>
                                <Text style={styles.objectifDescription}>{goal.target}</Text>
                            </View>
                            <View></View>
                        </View>
                    ))} */}
                    <View style={styles.cardObjectif}>
                        <View style={styles.cardContainer}>
                            <View style={[styles.iconContainer, { backgroundColor: '#FEEDE0' }]}><Icon name="calendar-blank" color='#FD660B' size={30} /></View>
                            <View style={styles.objectifContainerText}>
                                <Text style={styles.objectifTitle}>{dashboardData.goals[0].title}</Text>
                                <Text style={styles.objectifDescription}>{dashboardData.goals[0].target}</Text>
                            </View>
                        </View>
                        <Icon name="greater-than" color='#666' size={20} style={[{ alignSelf: 'center' }]} />

                    </View>

                    <View style={styles.cardObjectif}>
                        <View style={styles.cardContainer}>
                            <View style={styles.iconContainer}><Icon name="bullseye-arrow" color='#119B4A' size={30} /></View>
                            <View style={styles.objectifContainerText}>
                                <Text style={styles.objectifTitle}>{dashboardData.goals[1].title}</Text>
                                <Text style={styles.objectifDescription}>{dashboardData.goals[1].target}</Text>
                            </View>
                        </View>
                        <Icon name="greater-than" color='#666' size={20} style={[{ alignSelf: 'center' }]} />
                    </View>
                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        paddingHorizontal: 20,
    },
    btnRetry: {
        backgroundColor: '#119B4A',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    appTitle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    descriptionPage: {
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
        fontSize: 24,
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
        justifyContent: 'space-between',
    },
    cardContainer: {
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