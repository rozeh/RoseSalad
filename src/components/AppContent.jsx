import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'

import routes from '../routes'

const AppContent = () => {
    return(
        <div className='main-content__container'>
            <Routes>
                {routes.map((route, idx) => {
                    return (
                        route.element && (
                            <Route 
                                key = {idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element />}
                            />
                        )
                    )
                })}
                <Route path="/" element={<Navigate to="dashboard" replace />} />
            </Routes>
        </div>
    )
}

export default AppContent