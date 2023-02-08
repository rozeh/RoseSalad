import React, { useState } from 'react'

import {AppHeader, AppFooter, AppContent} from '../components'

const DefaultLayout = () => {

    return (
        <>
          <AppHeader />
          <AppContent />
          <AppFooter />
        </>
    )
}

export default DefaultLayout;