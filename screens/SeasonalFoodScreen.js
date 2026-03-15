import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const seasonalItems = [
    {
        name: 'Strawberries',
        season: 'June - August',
        emoji: '🍓',
        description: 'Swedish strawberries are at their best during summer. Choose locally produced for the lowest carbon footprint.',
        greenPoints: 15,
    },
    {
        name: 'Apples',
        season: 'September - November',
        emoji: '🍎',
        description: 'Swedish apples are harvested in the autumn. Perfect for pies and cider!',
        greenPoints: 12,
    },
    {
        name: 'Carrots',
        season: 'Year-round (Swedish)',
        emoji: '🥕',
        description: 'Carrots are grown in Sweden and store well. A great choice all year round.',
        greenPoints: 10,
    },
    {
        name: 'Kale',
        season: 'October - March',
        emoji: '🥬',
        description: 'Kale tolerates frost and even gets sweeter after a frost. Super accessible in winter.',
        greenPoints: 14,
    },
    {
        name: 'Rhubarb',
        season: 'May - July',
        emoji: '🌿',
        description: 'Rhubarb is a classic Swedish garden plant. Perfect for pies and jam.',
        greenPoints: 13,
    },
];

export default function SeasonalFoodScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>🌿 Season's Best</Text>
            <Text style={styles.subtitle}>Choose seasonal foods for a lower carbon footprint</Text>

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
                            <Text style={styles.pointsLabel}>points</Text>
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
