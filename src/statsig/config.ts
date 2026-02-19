// Generate or retrieve a stable anonymous ID
function getStableID(): string {
    const STORAGE_KEY = "statsig_stable_id";

    // Try to get existing stable ID from localStorage
    let stableID = localStorage.getItem(STORAGE_KEY);

    // If no stable ID exists, generate a new one
    if (!stableID) {
        stableID = `anon-${crypto.randomUUID()}`;
        localStorage.setItem(STORAGE_KEY, stableID);
    }

    return stableID;
}

export const statsigUser = {
    userID: "anonymous",
    stableID: getStableID(),
    // Mark as anonymous user
    custom: {
        isAnonymous: true,
    },
};

// Replace with your actual Statsig client key
export const STATSIG_CLIENT_KEY =
    "client-90unIOEl092G2YNEFAK31OrpMRz61lT1xpCuU8J0sZN";
