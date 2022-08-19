import CalculatorIcon from '../../../components/CustomIcons/CalculatorIcon';
import CashIcon from '../../../components/CustomIcons/CashIcon';
import CogIcon from '../../../components/CustomIcons/CogIcon';
import EyeIcon from '../../../components/CustomIcons/EyeIcon';
import GridIcon from '../../../components/CustomIcons/GridIcon';
import SwatchIcon from '../../../components/CustomIcons/SwatchIcon';
import TemplateIcon from '../../../components/CustomIcons/TemplateIcon';
import OneColumn from '../components/columns/OneColumn';
import ThreeColumn from '../components/columns/ThreeColumn';
import TwoColumn from '../components/columns/TwoColumn';
import InsuranceDrag from '../components/InputsDraggables/InsuranceDrag';
import SelectDrag from '../components/InputsDraggables/SelectDrag';
import SelectToDrag from '../components/InputsDraggables/SelectToDrag';
import SliderDrag from '../components/InputsDraggables/SliderDrag';
import TextInputDrag from '../components/InputsDraggables/TextInputDrag';
import TextInputToDrag from '../components/InputsDraggables/TextInputToDrag';
import SubTitleDrag from '../components/TextDraggables/SubTitleDrag';
import TextDrag from '../components/TextDraggables/TextDrag';
import TitleDrag from '../components/TextDraggables/TitleDrag';

export const STEPS = [
    {
        content: `El menú superior central te permite ver la vista de tu cotizador para diferentes dispositivos.`,
        locale: { next: <strong>SIGUIENTE</strong> },
        disableBeacon: true,
        hideBackButton: true,
        hideCloseButton: true,
        disableCloseOnEsc: true,
        disableOverlayClose: true,
        target: '.designer__first',
    },
    {
        content: `El menú izquierdo  contiene opciones para editar tu cotizador.`,
        locale: { next: <strong>SIGUIENTE</strong> },
        placement: 'right',
        disableBeacon: true,
        hideBackButton: true,
        hideCloseButton: true,
        disableCloseOnEsc: true,
        disableOverlayClose: true,
        target: '.designer__two',
    },
    {
        content: `El menú superior derecho te permite guardar cambios y publicar si así lo deseas.`,
        locale: { last: <strong>LISTO</strong> },
        disableBeacon: true,
        hideBackButton: true,
        hideCloseButton: true,
        disableCloseOnEsc: true,
        disableOverlayClose: true,
        target: '.designer__three',
    }
]

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
    TEXT: "TEXT",
    SELECT: "SELECT",
    TXT_INPUT: "TXT_INPUT",
    INSURANCE: "INSURANCE",
    SLIDER: "SLIDER",
};

export const sideContent = {
    NO_SIDE: "NO_SIDE",
    RIGHT: "RIGHT",
    CENTER: "CENTER",
    LEFT: "LEFT",
};

export const columnComponents = {
    [typeColumn.ONE_COLUMN]: OneColumn,
    [typeColumn.TWO_COLUMN]: TwoColumn,
    [typeColumn.THREE_COLUMN]: ThreeColumn,
};

export const inputComponents = {
    [typeColumn.TITLE]: TitleDrag,
    [typeColumn.SUBTITLE]: SubTitleDrag,
    [typeColumn.TEXT]: TextDrag,
    [typeColumn.SELECT]: SelectDrag,
    [typeColumn.TXT_INPUT]: TextInputDrag,
    [typeColumn.INSURANCE]: InsuranceDrag,
    [typeColumn.SLIDER]: SliderDrag,
};

export const inputComponentsToDrag = {
    [typeColumn.SELECT]: SelectToDrag,
    [typeColumn.TXT_INPUT]: TextInputToDrag,
};

export const dataCal = [
    {
        id: 1,
        label: 'Marca',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 2,
        label: 'Modelo',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 3,
        label: 'Año',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 4,
        label: 'Versión',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 5,
        label: 'Kilometraje',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 6,
        label: 'Text custom',
        type: typeColumn.TXT_INPUT,
        isSelected: false,
    },
    {
        id: 7,
        label: 'Text custom2',
        type: typeColumn.TXT_INPUT,
        isSelected: false,
    },
];

export const dataGrid = [
    {
        id: 1,
        label: '¿Cómo quieres pagar tu seguro?',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 2,
        label: '¿Qué extras deseas agregar a tu vehículo?',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
];

export const dataInsurance = [
    {
        id: 1,
        name: 'Afirme',
        image: 'imgs/afirme.png',
        price: '$6750.00'
    },
    {
        id: 2,
        name: 'Qualitas',
        image: 'imgs/qualitas.png',
        price: '$6750.00'
    },
    {
        id: 3,
        name: 'GNP',
        image: 'imgs/gnp.png',
        price: '$6750.00'
    },
];

export const pagesDnD = [
    {
        name: 'Pág. 1',
        columns: []
    }
]