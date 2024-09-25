
export function checkWindow() {
    return typeof window !== "undefined";
}

export function getAuthCookie() {
    if (checkWindow()) {
        // https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app
        return window.document.cookie.split('; ').find(row => row.startsWith('auth-uuid='))?.split('=')[1];
    }

}

export function generateAuthCookie() {
    // 为用户生成唯一uuid
    const uuid = crypto.randomUUID();
    // 生成时间
    const now = new Date()?.getTime();
    return `${uuid}#${now}`
}
export function setAuthCookie() {
    if (checkWindow()) {
        // window.document.cookie = `auth-uuid=${generateAuthCookie()}; max-age=${60 * 60 * 24 * 365 * 50}; path=/; domain=${window.location.hostname || 'lilnong.top'}`
        window.document.cookie = `auth-uuid=${window.encodeURIComponent(generateAuthCookie())}; max-age=${60 * 60 * 24 * 365 * 50}; expires=date-in-GMTString-format=${new Date(Date.now() + 60 * 60 * 24 * 365 * 50 * 1000)?.toUTCString()}; path=/; domain=${window.location.hostname || 'lilnong.top'}`
    }
}
export function checkAuthCookie() {
    if (!getAuthCookie()) {
        setAuthCookie()
    }
}