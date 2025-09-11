export default function TabButton(props) {
    return (
        <li>
            <button>{props.children}</button>
        </li>
    );
}

/** can also be set using object destructuring
 * export default function TabButton({ children }}) {
    return (
        <li>
            <button>{children}</button>
        </li>
    );
}
 */
