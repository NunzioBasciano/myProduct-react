import ErrorComponent from '../components/errorComponent/ErrorComponent'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { labels } from '../assets/data/labels';


function ErrorPage() {
    const error = useRouteError();

    return (
        <ErrorComponent
            message={error.statusText || error.message}
            children={<Link to={'/'}>{labels.goBackHome}</Link>}
        />
    )
}

export default ErrorPage