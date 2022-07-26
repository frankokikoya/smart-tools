import React, { createContext, useState } from 'react';

import { pagesDnD } from '../data/DrawerItems';

const DesignerContext = createContext();

export const DesignerProvider = ({ children }) => {
    const [pages, setPages] = useState(pagesDnD);

    return (
        <DesignerContext.Provider value={{
            pages,
            setPages
        }}>
            {children}
        </DesignerContext.Provider>
    )
};

export default DesignerContext;