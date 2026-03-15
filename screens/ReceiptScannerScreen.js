import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HARDCODED_RECEIPT = {
    store: 'ICA Maxi',
    date: '2026-03-14',
    items: [
        { name: 'Pågen Digestive Cookies', price: 29.90, greenScore: 4, co2: '0.8 kg' },
        { name: 'Arla Organic Milk 1L', price: 18.50, greenScore: 3, co2: '1.2 kg' },
        { name: 'Swedish Apples 1kg', price: 34.90, greenScore: 5, co2: '0.3 kg' },
        { name: 'Oatly Oat Drink', price: 22.90, greenScore: 5, co2: '0.4 kg' },
        { name: 'Pågen Loaf Bread', price: 32.90, greenScore: 4, co2: '0.6 kg' },
    ],
    totalGreenPoints: 35,
};

export default function ReceiptScannerScreen() {
    const [scanned, setScanned] = useState(false);

    const handleScan = () => {
        setScanned(true);
    };

    const getScoreColor = (score) => {
        if (score >= 4) return '#2e7d32';
        if (score >= 3) return '#f9a825';
        return '#c62828';
    };

    const getScoreLabel = (score) => {
        if (score >= 4) return 'Good choice! ✅';
        if (score >= 3) return 'OK choice 🟡';
        return 'Needs improvement 🔴';
    };

    if (!scanned) {
        return (
            <View style={styles.scanContainer}>
                <Text style={styles.header}>🧾 Scan Receipt</Text>
                <Text style={styles.subtitle}>Scan your receipt to see the environmental impact of your shopping</Text>

                <View style={styles.receiptIcon}>
                    <Text style={styles.receiptEmoji}>🧾</Text>
                    <Text style={styles.receiptLabel}>Camera is not available</Text>
                </View>

                <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
                    <Text style={styles.scanButtonText}>📸 Simulate Receipt Scan</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const totalCO2 = HARDCODED_RECEIPT.items.reduce((sum, item) => sum + parseFloat(item.co2), 0).toFixed(1);
    const avgScore = (HARDCODED_RECEIPT.items.reduce((sum, item) => sum + item.greenScore, 0) / HARDCODED_RECEIPT.items.length).toFixed(1);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.receiptHeader}>
                <Text style={styles.storeEmoji}>🏪</Text>
                <Text style={styles.storeName}>{HARDCODED_RECEIPT.store}</Text>
                <Text style={styles.receiptDate}>{HARDCODED_RECEIPT.date}</Text>
                <View style={styles.pointsEarned}>
                    <Text style={styles.pointsEarnedText}>+{HARDCODED_RECEIPT.totalGreenPoints} Green Points! 🎉</Text>
                </View>
            </View>

            <View style={styles.summaryRow}>
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryValue}>{totalCO2} kg</Text>
                    <Text style={styles.summaryLabel}>Total CO₂</Text>
                </View>
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryValue}>{avgScore}/5</Text>
                    <Text style={styles.summaryLabel}>Avg Score</Text>
                </View>
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryValue}>{HARDCODED_RECEIPT.items.length}</Text>
                    <Text style={styles.summaryLabel}>Items</Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>All Items</Text>

            {HARDCODED_RECEIPT.items.map((item, index) => (
                <View key={index} style={styles.itemCard}>
                    <View style={styles.itemRow}>
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemCO2}>🌍 {item.co2} CO₂</Text>
                        </View>
                        <View style={styles.itemRight}>
                            <Text style={styles.itemPrice}>{item.price.toFixed(2)} kr</Text>
                            <Text style={[styles.scoreLabel, { color: getScoreColor(item.greenScore) }]}>
                                {getScoreLabel(item.greenScore)}
                            </Text>
                        </View>
                    </View>
                </View>
            ))}

            <TouchableOpacity style={styles.resetButton} onPress={() => setScanned(false)}>
                <Text style={styles.resetButtonText}>🔄 Scan New Receipt</Text>
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
    receiptIcon: {
        width: 200,
        height: 200,
        backgroundColor: '#1a1a1a',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    receiptEmoji: {
        fontSize: 64,
        marginBottom: 8,
    },
    receiptLabel: {
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
    receiptHeader: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    storeEmoji: {
        fontSize: 48,
        marginBottom: 8,
    },
    storeName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    receiptDate: {
        fontSize: 14,
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
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    summaryCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 4,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    summaryValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2e7d32',
    },
    summaryLabel: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 12,
    },
    itemCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemInfo: {
        flex: 1,
    },
    itemName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1a1a1a',
    },
    itemCO2: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    itemRight: {
        alignItems: 'flex-end',
    },
    itemPrice: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1a1a1a',
    },
    scoreLabel: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 4,
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
