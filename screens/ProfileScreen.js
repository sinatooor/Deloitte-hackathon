import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const USER_PROFILE = {
    name: 'Anna Svensson',
    greenPoints: 1250,
    currentLevel: 'Eco Warrior 🌿',
    nextLevel: 'Eco Champion 🏆',
    nextLevelThreshold: 2000,
    memberSince: 'January 2026',
    totalScans: 87,
    Co2Saved: '24.5 kg',
    streakDays: 12,
    badges: [
        { emoji: '🌱', name: 'Beginner', earned: true },
        { emoji: '♻️', name: 'Recycler', earned: true },
        { emoji: '🥬', name: 'Veggie Week', earned: true },
        { emoji: '🏆', name: 'Champion', earned: false },
        { emoji: '🌍', name: 'World Saver', earned: false },
    ],
    recentActivity: [
        { date: 'March 14', action: 'Scanned receipt', points: 35 },
        { date: 'March 13', action: 'Scanned Digestive Cookies', points: 20 },
        { date: 'March 12', action: 'Chose seasonal product', points: 15 },
        { date: 'March 11', action: 'Scanned receipt', points: 28 },
    ],
};

export default function ProfileScreen() {
    const progress = USER_PROFILE.greenPoints / USER_PROFILE.nextLevelThreshold;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>AS</Text>
                </View>
                <Text style={styles.userName}>{USER_PROFILE.name}</Text>
                <Text style={styles.level}>{USER_PROFILE.currentLevel}</Text>
                <Text style={styles.memberSince}>Member since {USER_PROFILE.memberSince}</Text>
            </View>

            {/* Green Points with progress */}
            <View style={styles.pointsCard}>
                <Text style={styles.pointsTitle}>🌿 Green Points</Text>
                <Text style={styles.pointsValue}>{USER_PROFILE.greenPoints}</Text>
                <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
                    </View>
                    <Text style={styles.progressText}>
                        {USER_PROFILE.greenPoints} / {USER_PROFILE.nextLevelThreshold} to {USER_PROFILE.nextLevel}
                    </Text>
                </View>
            </View>

            {/* Stats */}
            <View style={styles.statsRow}>
                <View style={styles.statCard}>
                    <Text style={styles.statValue}>{USER_PROFILE.totalScans}</Text>
                    <Text style={styles.statLabel}>Scans</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statValue}>{USER_PROFILE.Co2Saved}</Text>
                    <Text style={styles.statLabel}>CO₂ Saved</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statValue}>{USER_PROFILE.streakDays} 🔥</Text>
                    <Text style={styles.statLabel}>Day Streak</Text>
                </View>
            </View>

            {/* Badges */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>🏅 Badges</Text>
                <View style={styles.badgesRow}>
                    {USER_PROFILE.badges.map((badge, index) => (
                        <View key={index} style={[styles.badge, !badge.earned && styles.badgeLocked]}>
                            <Text style={[styles.badgeEmoji, !badge.earned && styles.badgeEmojiLocked]}>
                                {badge.emoji}
                            </Text>
                            <Text style={[styles.badgeName, !badge.earned && styles.badgeNameLocked]}>
                                {badge.name}
                            </Text>
                            {!badge.earned && <Text style={styles.lockIcon}>🔒</Text>}
                        </View>
                    ))}
                </View>
            </View>

            {/* Recent Activity */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>📊 Recent Activity</Text>
                {USER_PROFILE.recentActivity.map((activity, index) => (
                    <View key={index} style={styles.activityRow}>
                        <View>
                            <Text style={styles.activityAction}>{activity.action}</Text>
                            <Text style={styles.activityDate}>{activity.date}</Text>
                        </View>
                        <Text style={styles.activityPoints}>+{activity.points}</Text>
                    </View>
                ))}
            </View>

            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f7f0',
        padding: 16,
    },
    profileHeader: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#2e7d32',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        shadowColor: '#2e7d32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    avatarText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    level: {
        fontSize: 16,
        color: '#2e7d32',
        fontWeight: '600',
        marginTop: 4,
    },
    memberSince: {
        fontSize: 13,
        color: '#888',
        marginTop: 4,
    },
    pointsCard: {
        backgroundColor: '#2e7d32',
        borderRadius: 20,
        padding: 24,
        marginBottom: 16,
        alignItems: 'center',
        shadowColor: '#2e7d32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 5,
    },
    pointsTitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        fontWeight: '600',
    },
    pointsValue: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 8,
    },
    progressContainer: {
        width: '100%',
    },
    progressBar: {
        height: 8,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 8,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    progressText: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    statCard: {
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
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2e7d32',
    },
    statLabel: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
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
    badgesRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    badge: {
        alignItems: 'center',
        width: 60,
        marginBottom: 8,
    },
    badgeLocked: {
        opacity: 0.4,
    },
    badgeEmoji: {
        fontSize: 32,
    },
    badgeEmojiLocked: {
        opacity: 0.5,
    },
    badgeName: {
        fontSize: 10,
        color: '#333',
        textAlign: 'center',
        marginTop: 4,
    },
    badgeNameLocked: {
        color: '#aaa',
    },
    lockIcon: {
        fontSize: 10,
        marginTop: 2,
    },
    activityRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    activityAction: {
        fontSize: 14,
        fontWeight: '500',
        color: '#1a1a1a',
    },
    activityDate: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },
    activityPoints: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e7d32',
    },
});
