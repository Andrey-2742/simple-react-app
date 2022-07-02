import '../styles/App.css';
import {getPageArray} from '../utils/pages'

function PageButtonSection({pageCount, current, setCurrent}) {

    function switchPage(page) {
        setCurrent(page);
        window.scrollTo(0, 0);
    }

    var pageArray = getPageArray(pageCount);
    return (
        <div className='page_sector'>
            {pageArray.map(n =>
                <span
                    key={n}
                    className={n === current ? 'page_button current_page_button' : 'page_button'}
                    onClick={() => switchPage(n)}
                >
                    {n}
                </span>
            )}
        </div>
    );
}

export default PageButtonSection;
