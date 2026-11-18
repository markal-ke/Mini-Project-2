import {Routes, Route} from 'react-router-dom'
import LoginForm from '../pages/LoginPage';
import SearchFilter from '../pages/FilterPage';

function AppRoutes(props) {
return (
<Routes>
{/* index matches on default/home URL: / */}

<Route path="/" element={<LoginForm />} />
<Route path="/search" element={<SearchFilter />} />
</Routes>
)
}
export default AppRoutes;
// Name this file AppRoutes.jsx and store in new folder 'routes'