export default function Banner({variant= "neutral", icon, title, content}){
    return (
        <div className={`banner ${variant}`}>
            <div>
                {icon}
            </div>
            <div>
                <h4>{title}</h4>
                {content && <p>{content}</p>}
            </div>
        </div>
    )
}