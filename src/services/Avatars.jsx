const avatarList = [
    {avatarId: 1, avatarSrc: '/public/assets/1.jpg'},
    {avatarId: 2, avatarSrc: '/public/assets/2.jpg'},
    {avatarId: 3, avatarSrc: '/public/assets/3.jpg'}
]


export const getAvatars = () => {
    return avatarList
}

export const getAvatarSrc = (avatarId) => {
    return avatarList.find(avatar => avatar.avatarId === avatarId).avatarSrc
}