import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function ToggleButton () {
    return (
        <button className="header-toggle" id="menu_toggle"><FontAwesomeIcon icon={faBars} /></button>
    );
}