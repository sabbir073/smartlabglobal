export default function HamburgerMenu({isDarkMode} : any){
    return(
        <svg width="20" height="14" fill="none" viewBox="0 0 20 14"><path stroke={`${isDarkMode ? '#F4F4F4' : '#414042' }`} strokeLinecap="round" strokeWidth="1.5" d="M1 1h18M7 7h12M1 13h18"/></svg>
    )
}

export function HamburgerCrossMenu({isDarkMode} : any){
    return(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L1 17M1 1L17 17" stroke={`${isDarkMode ? '#F4F4F4' : '#414042' }`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}