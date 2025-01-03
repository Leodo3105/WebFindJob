'use client'
import { store } from '@features/store'
import '@public/tailwind/style.css'
import { Rubik } from 'next/font/google'
import { Provider } from "react-redux"
import 'animate.css';
import 'swiper/css'
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// import { store } from "../features/store"
// import Cursor from '@components/elements/Cursor'

let persistor = persistStore(store);
// const inter = rubik({ subsets: ['latin'] })
const rubik = Rubik({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    // display: 'swap',
})

// export const metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth hover:scroll-auto" id='top'>
            <body className={rubik.className}>
                {/* <Cursor /> */}
                <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
                </Provider>
            </body>
        </html>
    )
}
