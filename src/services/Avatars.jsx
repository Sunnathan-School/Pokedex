const avatarList = [
    {avatarId: 1, avatarSrc: '/src/assets/1.jpg'},
    {avatarId: 2, avatarSrc: '/src/assets/2.jpg'},
    {avatarId: 3, avatarSrc: '/src/assets/3.jpg'}
]


export const getAvatars = () => {
    return avatarList
}

export const getAvatarSrc = (avatarId) => {
    return avatarList.find(avatar => avatar.avatarId === avatarId).avatarSrc
}