export default function QuoteIcon({isDarkMode}: any){
    return(
       <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill={`${isDarkMode ? "#D9D9D9" : "#4D4D4F"}`} d="M3.333 27.867a3.2 3.2 0 01-3.2-3.2v-16A8.533 8.533 0 018.666.133v2.134a6.4 6.4 0 00-6.4 6.4v6.4h7.467a3.2 3.2 0 013.2 3.2v6.4a3.2 3.2 0 01-3.2 3.2h-6.4zm14.933 0a3.2 3.2 0 01-3.2-3.2v-16A8.533 8.533 0 0123.6.133v2.134a6.4 6.4 0 00-6.4 6.4v6.4h7.467a3.2 3.2 0 013.2 3.2v6.4a3.2 3.2 0 01-3.2 3.2h-6.4z"/></svg>
    )
}