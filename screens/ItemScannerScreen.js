import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// Hardcoded product data - always shows "Kex" (cookies) info
const HARDCODED_PRODUCT = {
    name: 'Pågen Kex Digestive',
    barcode: '7311070000123',
    brand: 'Pågen',
    category: 'Kex & Kakor',
    origin: 'Sverige',
    carbonFootprint: 'Låg',
    carbonKg: '0.8 kg CO₂e / kg',
    packaging: 'Kartong (återvinningsbar)',
    certifications: ['KRAV', 'Svenskt Sigill'],
    sustainabilityScore: 4, // out of 5
    greenPoints: 20,
    nutritionPer100g: {
        energi: '460 kcal',
        fett: '18g',
        kolhydrater: '65g',
        protein: '7g',
        fiber: '5g',
    },
    tips: 'Digestive-kex med fullkorn är ett bra val! Välj helst ekologiskt och KRAV-märkt.',
    alternatives: [
        { name: 'Wasa Knäckebröd', score: 5, reason: 'Lägre CO₂, mer fiber' },
        { name: 'ICA Havrekex', score: 4, reason: 'Liknande, lokalt producerat' },
    ],
};

export default function ItemScannerScreen() {
    const [scanned, setScanned] = useState(false);

    const handleScan = () => {
        setScanned(true);
    };

    const handleReset = () => {
        setScanned(false);
    };

    if (!scanned) {
        return (
            <View style={styles.scanContainer}>
                <Text style={styles.header}>📦 Skanna Produkt</Text>
                <Text style={styles.subtitle}>Skanna en streckkod för att se produktens miljöpåverkan</Text>

                <View style={styles.scanPreview}>
                    <View style={styles.scanFrame}>
                        <View style={[styles.corner, styles.topLeft]} />
                        <View style={[styles.corner, styles.topRight]} />
                        <View style={[styles.corner, styles.bottomLeft]} />
                        <View style={[styles.corner, styles.bottomRight]} />
                        <Text style={styles.scanText}>📷</Text>
                        <Text style={styles.scanLabel}>Kameran är inte tillgänglig</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
                    <Text style={styles.scanButtonText}>🔍 Simulera Skanning (Kex)</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const product = HARDCODED_PRODUCT;
    const stars = '⭐'.repeat(product.sustainabilityScore) + '☆'.repeat(5 - product.sustainabilityScore);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productHeader}>
                <Text style={styles.productEmoji}>🍪</Text>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productBrand}>{product.brand}</Text>
                <View style={styles.pointsEarned}>
                    <Text style={styles.pointsEarnedText}>+{product.greenPoints} Green Points! 🎉</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>🌍 Hållbarhetsbetyg</Text>
                <Text style={styles.stars}>{stars}</Text>
                <Text style={styles.footprint}>CO₂-avtryck: {product.carbonKg}</Text>
                <View style={[styles.footprintBadge, { backgroundColor: '#e8f5e9' }]}>
                    <Text style={[styles.footprintBadgeText, { color: '#2e7d32' }]}>
                        {product.carbonFootprint} klimatpåverkan
                    </Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>📋 Produktinfo</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Kategori</Text>
                    <Text style={styles.infoValue}>{product.category}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Ursprung</Text>
                    <Text style={styles.infoValue}>{product.origin} 🇸🇪</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Förpackning</Text>
                    <Text style={styles.infoValue}>{product.packaging}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Certifieringar</Text>
                    <Text style={styles.infoValue}>{product.certifications.join(', ')}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Streckkod</Text>
                    <Text style={styles.infoValue}>{product.barcode}</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>🥗 Näringsvärde per 100g</Text>
                {Object.entries(product.nutritionPer100g).map(([key, value]) => (
                    <View key={key} style={styles.infoRow}>
                        <Text style={styles.infoLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                        <Text style={styles.infoValue}>{value}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>💡 Tips</Text>
                <Text style={styles.tipText}>{product.tips}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>🔄 Grönare Alternativ</Text>
                {product.alternatives.map((alt, index) => (
                    <View key={index} style={styles.altItem}>
                        <View style={styles.altHeader}>
                            <Text style={styles.altName}>{alt.name}</Text>
                            <Text style={styles.altScore}>{'⭐'.repeat(alt.score)}</Text>
                        </View>
                        <Text style={styles.altReason}>{alt.reason}</Text>
                    </View>
                ))}
            </View>

            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                <Text style={styles.resetButtonText}>🔄 Skanna Igen</Text>
            </TouchableOpacity>

            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scanContainer: {
        flex: 1,
        backgroundColor: '#f0f7f0',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f7f0',
        padding: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2d6a2e',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#5a8a5b',
        marginBottom: 30,
        textAlign: 'center',
    },
    scanPreview: {
        width: 260,
        height: 260,
        backgroundColor: '#1a1a1a',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    scanFrame: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    corner: {
        position: 'absolute',
        width: 30,
        height: 30,
        borderColor: '#4caf50',
    },
    topLeft: {
        top: 0,
        left: 0,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderTopLeftRadius: 8,
    },
    topRight: {
        top: 0,
        right: 0,
        borderTopWidth: 3,
        borderRightWidth: 3,
        borderTopRightRadius: 8,
    },
    bottomLeft: {
        bottom: 0,
        left: 0,
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderBottomLeftRadius: 8,
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderBottomRightRadius: 8,
    },
    scanText: {
        fontSize: 48,
        marginBottom: 8,
    },
    scanLabel: {
        color: '#aaa',
        fontSize: 12,
    },
    scanButton: {
        backgroundColor: '#2e7d32',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 30,
        shadowColor: '#2e7d32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    scanButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    productHeader: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    productEmoji: {
        fontSize: 64,
        marginBottom: 8,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
        textAlign: 'center',
    },
    productBrand: {
        fontSize: 16,
        color: '#888',
        marginTop: 4,
    },
    pointsEarned: {
        backgroundColor: '#e8f5e9',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 12,
    },
    pointsEarnedText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e7d32',
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
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 12,
    },
    stars: {
        fontSize: 24,
        marginBottom: 8,
    },
    footprint: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    footprintBadge: {
        alignSelf: 'flex-start',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    footprintBadgeText: {
        fontSize: 13,
        fontWeight: '600',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    infoLabel: {
        fontSize: 14,
        color: '#888',
    },
    infoValue: {
        fontSize: 14,
        color: '#1a1a1a',
        fontWeight: '500',
    },
    tipText: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
    altItem: {
        backgroundColor: '#f8fdf8',
        borderRadius: 12,
        padding: 12,
        marginBottom: 8,
    },
    altHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    altName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1a1a1a',
    },
    altScore: {
        fontSize: 14,
    },
    altReason: {
        fontSize: 13,
        color: '#666',
    },
    resetButton: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#2e7d32',
        paddingHorizontal: 32,
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 8,
    },
    resetButtonText: {
        color: '#2e7d32',
        fontSize: 16,
        fontWeight: '700',
    },
});
