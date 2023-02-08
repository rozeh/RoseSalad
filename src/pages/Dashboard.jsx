import React from 'react'

import useStore from '../store/store'

const Dashboard = () => {
    const data = useStore((state) => state.data)
    const loading = useStore((state) => state.loading)
    const hasError = useStore((state) => state.hasError)
    const fetchData = useStore((state) => state.fetch)

    if (loading) {
        return <h1>데이터 로딩 중</h1>
    }
    if (hasError) {
        return <h1>앱에 에러가 있음</h1>
    }
    return(
        <h1>대시보드 위드 제니퍼</h1>
    )
}

export default Dashboard