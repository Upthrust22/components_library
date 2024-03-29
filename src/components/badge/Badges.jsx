export default function Badge({children, color, shape, ...rest}){
    return (
        <div className={`badge ${color} ${shape}`} {...rest}>
            {children}
        </div>
    )
}