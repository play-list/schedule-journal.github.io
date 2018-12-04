export const initRequest = (url: string, params?: Object): string => {
    const initURL = new URL(url)

    if(params) {
        Object.keys(params).forEach(key => initURL.searchParams.append(key, params[key]))
    }

    return `${initURL.href}`
}