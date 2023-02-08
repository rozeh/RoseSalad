import React from 'react'

const Dashboard = React.lazy(() => import('./pages/Dashboard'))

const routes = [
    {path: '/', exact: true, name:"Home"},
    {path: '/dashboard', name:'기본 데이터 설정', element: Dashboard},
]

export default routes