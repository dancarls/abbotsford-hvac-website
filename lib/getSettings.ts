import settingsData from './data/settings.json';

export function getSettings() {
    return {
        businessName: settingsData.businessName || "Abbotsford HVAC",
        phoneNumber: settingsData.phoneNumber || "(604) 555-0123",
        phoneRaw: settingsData.phoneRaw || "6045550123",
        primaryCity: settingsData.primaryCity || "Abbotsford",
        baseUrl: settingsData.baseUrl || "https://www.abbotsfordhvac.ca",
        email: settingsData.email || "info@abbotsfordhvac.ca",
        aiReceptionistScript: (settingsData as any).aiReceptionistScript || "",
        googleAnalyticsId: (settingsData as any).googleAnalyticsId || "",
        showTeamSection: settingsData.showTeamSection || false,
        teamMembers: settingsData.teamMembers || [],
    };
}
