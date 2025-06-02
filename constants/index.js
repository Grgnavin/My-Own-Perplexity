import { Compass, GalleryHorizontal, GalleryHorizontalEnd, LogIn, Search } from "lucide-react"

export const MenuOptions = [
    {
        title: "Home",
        icon: Search,
        path: "/"
    },
    {
        title: "Discover",
        icon: Compass,
        path: "/discover"
    },
    {
        title: "Library",
        icon: GalleryHorizontalEnd,
        path: "/library"
    },
    {
        title: "Sign-in",
        icon: LogIn,
        path: "#"
    },
]