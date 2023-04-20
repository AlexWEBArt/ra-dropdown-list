export default function DropdownItem(props) {
    const { item } = props;

    const hendelEnterLeave = (e) => {
        e.target.classList.toggle('active');
    }

    return (
        <li><a href="https://github.com/AlexWEBArt/ra-dropdown-list.git" onMouseEnter={hendelEnterLeave} onMouseLeave={hendelEnterLeave}>{item}</a></li>
    )
}