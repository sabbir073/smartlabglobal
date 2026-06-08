export default function SearchIcon({isDarkMode} : any){
    return(
        <svg width="27" height="27" fill="none" viewBox="0 0 27 27"><path fill={`${isDarkMode ? '#F4F4F4' : '#4D4D4F' }`} fillRule="evenodd" d="M11 20a9 9 0 100-18 9 9 0 000 18zm0 2c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11z" clipRule="evenodd"/><path fill={`${isDarkMode ? '#F4F4F4' : '#4D4D4F' }`} d="M17 18.414L18.414 17l8.59 8.589-1.415 1.414z"/></svg>
    )
}