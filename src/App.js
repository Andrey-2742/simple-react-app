import './styles/App.css';
import Navbar from './components/UI/navbar/Navbar';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {publicRoutes, privateRoutes} from './router/Router';
import {AuthContext} from './context/context';
import {useEffect, useState} from 'react';
import Loader from './components/UI/Loader/Loader';

function App() {
    
    const [isLogged, setLogged] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('logged')) {
            setLogged(true);
        }
        setLoading(false);
    })

    if (isLoading) {
        return <Loader/>;
    }

    return (
        <AuthContext.Provider value={{isLogged, setLogged, setLoading}}>
            <BrowserRouter>
                <Navbar/>
                {isLogged
                    ?
                    <Routes>
                        {privateRoutes.map(route =>
                            <Route path={route.path} element={<route.element/>} key={Math.random()}/>
                        )}
                        <Route path='/*' element={<Navigate to='/error'/>}/>
                    </Routes>
                    :
                    <Routes>
                        {publicRoutes.map(route =>
                            <Route path={route.path} element={<route.element/>} key={Math.random()}/>
                        )}
                        <Route path='/*' element={<Navigate to='/error'/>}/>
                    </Routes>
                }
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
