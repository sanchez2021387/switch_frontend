export const logout = () => {
    localStorage.removeItem('user')

    window.location.href = 'auth'
    window.location.href = './channels'
}