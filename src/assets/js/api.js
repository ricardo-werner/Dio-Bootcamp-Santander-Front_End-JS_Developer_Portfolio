
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/ricardo-werner/Dio-Bootcamp-Santander-Front_End-JS_Developer_Portfolio/refs/heads/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
