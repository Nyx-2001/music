import VueRouter from 'vue-router'
import MusicHall from '../pages/MusicHall'
import MusicVideo from '../pages/MusicVideo'
import MusicChoiceNess from '../pages/MusicChoiceNess'
import MusicRank from '../pages/MusicRank'
import MusicSinger from '../pages/MusicSinger'
import MusicSongList from '../pages/MusicSongList'
import MusicVideoRank from '../pages/MusicVideoRank'
import MusicVideoLibrary from '../pages/MusicVideoLibrary'
import MusicRadio from '../pages/MusicRadio'
import MusicMyLove from '../pages/MusicMyLove'
import MusicMyLoveSong from '../pages/MusicMyLoveSong'
import MusicLoveSongList from '../pages/MusicLoveSongList'

export default new VueRouter({
routes:[
    {
        path:'/MusicHall',
        component:MusicHall,
        children:[
            {
                path:'MusicChoiceness',
                component:MusicChoiceNess
            },
            {
                path:'MusicRank',
                component:MusicRank
            },
            {
                path:'MusicSinger',
                component:MusicSinger
            },
            {
                path:'MusicSongList',
                component:MusicSongList
            }
        ]
    },
    {
        path:'/MusicVideo',
        component:MusicVideo,
        children:[
            {
                path:'MusicVideoRank',
                component:MusicVideoRank
            },
            {
                path:'MusicVideoLibrary',
                component:MusicVideoLibrary
            }
        ]
    },
    {
        path:'/MusicRadio',
        component:MusicRadio
    },
    {
        path:'/MusicMyLove',
        component:MusicMyLove,
        children:[
            {
                path:'MusicMyLoveSong',
                component:MusicMyLoveSong
            },
            {
                path:'MusicLoveSongList',
                Component:MusicLoveSongList
            }
        ]
    }
]
})