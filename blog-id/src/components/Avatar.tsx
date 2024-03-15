export function Avatar({ name, size = 2, fontWeight }: { name: string; size: number; fontWeight: string }) {
    const avatarStyle = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${size}px`,
        height: `${size}px`,
        overflow: "hidden",
        backgroundColor: "#f3f4f6",
        borderRadius: "9999px",
        color: "#4b5563",
        fontWeight: fontWeight,
        fontSize: "0.975rem",
        textAlign: "center",
        fontFamily:"sans-serif",
    };

    return (
        <div>
            <div style={avatarStyle}>
                <span style={{ color: "#4b5563" }}>{name[0]}</span>
            </div>
        </div>
    );
}
