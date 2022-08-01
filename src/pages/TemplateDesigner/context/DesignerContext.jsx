import React, { createContext, useState } from 'react';

import update from 'immutability-helper';

import { pagesDnD } from '../data/DrawerItems';

const DesignerContext = createContext();

export const DesignerProvider = ({ children }) => {
    const [pages, setPages] = useState(pagesDnD);
    const [selectedRow, setSelectedRow] = useState({});

    const addPage = () => {
        setPages((prev) => {
            return [
                ...prev,
                {
                    name: `Pág. ${pages.length + 1}`,
                    columns: []
                }
            ]
        });
    };

    const addColumn = ({ newColumn, parent }) => {
        setPages(prevPages => {
            return [
                ...prevPages.map((p, i) => {
                    if (i === parent) {
                        return {
                            ...p,
                            columns: [
                                {
                                    id: prevPages[parent].columns.length + 1,
                                    type: newColumn.type,
                                    content: newColumn.content
                                },
                                ...prevPages[parent].columns
                            ]
                        };
                    }
                    return p;
                })
            ];
        });
    };

    const deletedColumn = ({ parent, index }) => {
        setPages(prevPages => {
            return [
                ...prevPages.map((p, i) => {
                    if (i === parent) {
                        return {
                            ...p,
                            columns: [
                                ...prevPages[parent].columns.filter((c, idx) => idx !== index)
                            ]
                        };
                    }
                    return p;
                })
            ];
        });
    };

    const movedColumn = ({ parent, dragIdx, hoverIndex }) => {
        setPages(prevPages => {
            return [
                ...prevPages.map((p, i) => {
                    if (i === parent) {
                        return {
                            ...p,
                            columns: [
                                ...update(prevPages[parent].columns, {
                                    $splice: [
                                        [dragIdx, 1],
                                        [hoverIndex, 0, prevPages[parent].columns[dragIdx]],
                                    ],
                                })
                            ]
                        };
                    }
                    return p;
                })
            ];
        });
    };

    const changeTypeColumn = ({ parent, index, prevType, newType }) => {
        setPages(prevPages => {
            return [
                ...prevPages.map((p, i) => {
                    if (i === parent) {
                        return {
                            ...p,
                            columns: [
                                ...prevPages[parent].columns.map((c, idx) => {
                                    if (idx === index && prevType !== newType) {
                                        c.type = newType
                                    }
                                    return c;
                                })
                            ]
                        };
                    }
                    return p;
                })
            ];
        });
    };

    const filterContent = ({ id, index, fromParent }) => {
        setPages(prevPages => {
            return [
                ...prevPages.map((p, i) => {
                    if (i === fromParent) {
                        return {
                            ...p,
                            columns: [
                                ...prevPages[fromParent].columns.map((c, idx) => {
                                    if (idx === index) {
                                        c.content = [
                                            ...c.content.filter((comp) => comp.id !== id)
                                        ]
                                    }
                                    return c;
                                })
                            ]
                        };
                    }
                    return p;
                })
            ];
        });
    };

    const addedContent = ({ item, parent, index }) => {
        setPages(prevPages => {
            return [
                ...prevPages.map((p, i) => {
                    if (i === parent) {
                        return {
                            ...p,
                            columns: [
                                ...prevPages[parent].columns.map((c, idx) => {
                                    if (idx === index) {
                                        const getItem = c.content.find((i) => i.side === item.side);
                                        if (!getItem) {
                                            // DELETE ITEM IF FROM TO
                                            if (item?.action === 'LEAVE') {
                                                filterContent({
                                                    id: item.id,
                                                    index: item.index,
                                                    fromParent: item.fromParent
                                                });
                                            }
                                            const getItem = c.content[c.content.length - 1]
                                            item.id = getItem?.id ? getItem.id + 1 : 1;
                                            c.content = [...c.content, item]
                                        }
                                    }
                                    return c;
                                })
                            ]
                        };
                    }
                    return p;
                })
            ];
        });
    };

    const deletedContent = ({ parent, index, id }) => {
        setPages(prevPages => {
            return [
                ...prevPages.map((p, i) => {
                    if (i === parent) {
                        return {
                            ...p,
                            columns: [
                                ...prevPages[parent].columns.map((c, idx) => {
                                    if (idx === index) {
                                        c.content = [
                                            ...c.content.filter((comp) => comp.id !== id)
                                        ]
                                    }
                                    return c;
                                })
                            ]
                        };
                    }
                    return p;
                })
            ];
        });
    };

    return (
        <DesignerContext.Provider value={{
            pages,
            addPage,
            setPages,
            addColumn,
            deletedColumn,
            movedColumn,
            changeTypeColumn,
            addedContent,
            deletedContent,
            selectedRow,
            setSelectedRow
        }}>
            {children}
        </DesignerContext.Provider>
    )
};

export default DesignerContext;