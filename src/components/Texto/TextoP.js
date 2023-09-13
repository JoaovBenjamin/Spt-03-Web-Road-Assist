export default function TextoP({ children, tag, textAlign, color }) {
    const Tag = tag
    return (
        <>
            <Tag>{children}</Tag>

            <style jsx>{`
                ${Tag}{
                    color: ${color};
                    text-align:${textAlign};
                    font-family: Raleway;
                    font-style: normal;
                    line-height: normal; 
                }
                `}</style>
        </>
    )
}