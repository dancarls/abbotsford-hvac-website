import settingsData from './data/settings.json';

export function getSettings() {
    return {
        businessName: settingsData.businessName || "Abbotsford HVAC",
        phoneNumber: settingsData.phoneNumber || "(236) 477-3002",
        phoneRaw: settingsData.phoneRaw || "2364773002",
        primaryCity: settingsData.primaryCity || "Abbotsford",
        baseUrl: settingsData.baseUrl || "https://www.abbotsfordhvac.ca",
        email: settingsData.email || "info@abbotsfordhvac.ca",
        address: (settingsData as any).address || "",
        aiReceptionistScript: (settingsData as any).aiReceptionistScript || "",
        googleAnalyticsId: (settingsData as any).googleAnalyticsId || "",
        showTeamSection: settingsData.showTeamSection || false,
        teamMembers: settingsData.teamMembers || [],
    };
}
