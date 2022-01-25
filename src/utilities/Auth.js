const auth = {
    isAuthenticated() {
        if (typeof window === undefined) {
            return false
        }

        if (sessionStorage.getItem('jwt')) {
            return JSON.parse(sessionStorage.getItem('userInfo'))
        } else
            return false
    },
    authenticate(userInfo, cb) {
        if (typeof window !== undefined) {
            sessionStorage.setItem('jwt', JSON.stringify(userInfo))
        }
        cb()
    },
    signout(cb) {
        if (typeof window !== undefined) {
            sessionStorage.removeItem('jwt');
        }
        // cb()
    },
}

export default auth;