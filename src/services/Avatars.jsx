const avatarList = [
    {avatarId: 1, avatarSrc: '/1.jpg'},
    {avatarId: 2, avatarSrc: '/2.jpg'},
    {avatarId: 3, avatarSrc: '/3.jpg'}
]


export const getAvatars = () => {
    return avatarList
}

export const getAvatarSrc = (avatarId) => {
    return avatarList.find(avatar => avatar.avatarId === avatarId).avatarSrc
}