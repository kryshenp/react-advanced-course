export default function TabButton({ children, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
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
