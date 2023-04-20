import DropdownItem from './DropdownItemFunc';

export default function DropdownList(props) {
    const { list } = props;

    return (
        <ul data-id="dropdown" class="dropdown">
            {list.map((item, index) => <DropdownItem item={item} key={index} />)}
      </ul>
    )
}