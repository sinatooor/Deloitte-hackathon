import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const seasonalItems = [
    {
        name: 'Jordgubbar',
        season: 'Juni - Augusti',
        emoji: '🍓',
        description: 'Svenska jordgubbar är som bäst under sommaren. Välj närproducerade för lägst klimatavtryck.',
        greenPoints: 15,
    },
    {
        name: 'Äpplen',
        season: 'September - November',
        emoji: '🍎',
        description: 'Svenska äpplen skördas på hösten. Perfekt för paj och must!',
        greenPoints: 12,
    },
    {
        name: 'Morötter',
        season: 'Året runt (svensk)',
        emoji: '🥕',
        description: 'Morötter odlas i Sverige och lagras bra. Bra val året runt.',
        greenPoints: 10,
    },
    {
        name: 'Grönkål',
        season: 'Oktober - Mars',
        emoji: '🥬',
        description: 'Grönkål tål frost och blir till och med sötare efter frost. Supertillgängligt på vintern.',
        greenPoints: 14,
    },
    {
        name: 'Rabarber',
        season: 'Maj - Juli',
        emoji: '🌿',
        description: 'Rabarber är en klassisk svensk trädgårdsväxt. Perfekt till paj och sylt.',
        greenPoints: 13,
    },
];

export default function SeasonalFoodScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>🌿 Säsongens Bästa</Text>
            <Text style={styles.subtitle}>Välj säsongsbetonat för lägre klimatavtryck</Text>

            {seasonalItems.map((item, index) => (
                <View key={index} style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.emoji}>{item.emoji}</Text>
                        <View style={styles.cardHeaderText}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.season}>📅 {item.season}</Text>
                        </View>
                        <View style={styles.pointsBadge}>
                            <Text style={styles.pointsText}>+{item.greenPoints}</Text>
                            <Text style={styles.pointsLabel}>poäng</Text>
                        </View>
                    </View>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f7f0',
        padding: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2d6a2e',
        marginTop: 50,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#5a8a5b',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    emoji: {
        fontSize: 36,
        marginRight: 12,
    },
    cardHeaderText: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
    },
    season: {
        fontSize: 13,
        color: '#888',
        marginTop: 2,
    },
    pointsBadge: {
        backgroundColor: '#e8f5e9',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
        alignItems: 'center',
    },
    pointsText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e7d32',
    },
    pointsLabel: {
        fontSize: 10,
        color: '#4caf50',
    },
    description: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
});
