export default function Banner({variant= "neutral", children}){
    return (
        <div className={`banner ${variant}`}>
            {children}
        </div>
    )
}