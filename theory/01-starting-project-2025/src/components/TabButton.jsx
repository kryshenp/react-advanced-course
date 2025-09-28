export default function TabButton({ children, isSelected, ...props }) {
    return (
        <li>
            <button className={isSelected ? "active" : ""} {...props}>
                {children}
            </button>
        </li>
    );
}

/**
 * export default function TabButton(props) {
    function handleClick() {
        console.log("Hello world!");
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}
 */
