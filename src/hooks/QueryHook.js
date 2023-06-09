import { useLocation, useNavigate } from 'react-router-dom'
import qs from 'qs'

const QueryHook = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const QueryParams = qs.parse(location.search, { ignoreQueryPrefix: true });

    const stringify = (obj) => qs.stringify(obj);
    return { QueryParams , stringify, location, navigate };


}

export default QueryHook;