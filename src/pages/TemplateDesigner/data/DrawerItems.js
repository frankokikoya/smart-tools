import CalculatorIcon from '../../../components/CustomIcons/CalculatorIcon';
import CashIcon from '../../../components/CustomIcons/CashIcon';
import CogIcon from '../../../components/CustomIcons/CogIcon';
import EyeIcon from '../../../components/CustomIcons/EyeIcon';
import GridIcon from '../../../components/CustomIcons/GridIcon';
import SwatchIcon from '../../../components/CustomIcons/SwatchIcon';
import TemplateIcon from '../../../components/CustomIcons/TemplateIcon';

export const itemsLeft = [
    {
        id: "dl-config",
        name: "Configuración",
        icon: CogIcon
    },
    {
        id: "dl-template",
        name: "Diseño de columnas",
        icon: TemplateIcon
    },
    {
        id: "dl-swatch",
        name: "Paleta de colores",
        icon: SwatchIcon
    },
    {
        id: "dl-cal",
        name: "Componentes del Activo",
        icon: CalculatorIcon
    },
    {
        id: "dl-grid",
        name: "Componentes de Accesorios y Seguro",
        icon: GridIcon
    },
    {
        id: "dl-cash",
        name: "Componentes de Cálculo",
        icon: CashIcon
    },
    {
        id: "dl-eye",
        name: "Preview",
        icon: EyeIcon
    }
];

export const typeColumn = {
    ONE_COLUMN: "ONE_COLUMN",
    TWO_COLUMN: "TWO_COLUMN",
    THREE_COLUMN: "THREE_COLUMN",
    TITLE: "TITLE",
    SUBTITLE: "SUBTITLE",
    TEXT: "TEXT"
};

export const sideContent = {
    NO_SIDE: "NO_SIDE",
    RIGHT: "RIGHT",
    CENTER: "CENTER",
    LEFT: "LEFT",
};

export const pagesDnD = [
    {
        name: 'Pág. 1',
        columns: [
            {
                id: 1,
                type: typeColumn.ONE_COLUMN,
                content: [
                    // {
                    //     id: 1,
                    //     side: sideContent.NO_SIDE,
                    //     type: typeColumn.TITLE,
                    //     content: []
                    // }
                ]
            },
            {
                id: 2,
                type: typeColumn.THREE_COLUMN,
                content: []
            },
            {
                id: 3,
                type: typeColumn.TWO_COLUMN,
                content: []
            }
        ]
    }
]