export function getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;

    try {
        const user = JSON.parse(userStr);
        if (user && user.token && user.user && user.user.role) {
            return user;
        }
        return null;
    } catch (e) {
        console.error("Failed to parse user:", e);
        return null;
    }
}

export function isAdmin() {
    const user = getCurrentUser();
    return user?.user?.role === 'admin';
}

export function isTokenExpired(token) {
    if (!token) return true;
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 < Date.now();
    } catch {
        return true;
    }
}