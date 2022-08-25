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
import SliderToDrag from '../components/InputsDraggables/SliderToDrag';
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
    [typeColumn.SLIDER]: SliderToDrag,
};

export const opsPay = [
    { id: 1, value: 48, text: '48 Mes(es)', toShow: 'Mes(es)' },
    { id: 2, value: 36, text: '36 Mes(es)', toShow: 'Mes(es)' },
];

export const dataPay = [
    {
        id: 1,
        drawer: 'PAY',
        componentId: 1,
        label: '¿A cuántos plazos deseas pagar?',
        type: typeColumn.SELECT,
        options: []
    },
    {
        id: 2,
        drawer: 'PAY',
        componentId: 2,
        label: 'Enganche',
        type: typeColumn.SLIDER,
        min: 0,
        max: 0,
        exp: '$'
    }
];

export const dataCal = [
    {
        id: 3,
        drawer: 'CAL',
        componentId: 3,
        label: 'Marca',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 4,
        drawer: 'CAL',
        componentId: 4,
        label: 'Modelo',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 5,
        drawer: 'CAL',
        componentId: 5,
        label: 'Año',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 6,
        drawer: 'CAL',
        componentId: 6,
        label: 'Versión',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 7,
        drawer: 'CAL',
        componentId: 7,
        label: 'Kilometraje',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 8,
        drawer: 'CAL',
        componentId: 8,
        label: 'Text custom',
        type: typeColumn.TXT_INPUT,
        isSelected: false,
    },
    {
        id: 9,
        drawer: 'CAL',
        componentId: 9,
        label: 'Text custom2',
        type: typeColumn.TXT_INPUT,
        isSelected: false,
    },
];

export const dataGrid = [
    {
        id: 10,
        drawer: 'GRID',
        componentId: 10,
        label: '¿Cómo quieres pagar tu seguro?',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 11,
        drawer: 'GRID',
        componentId: 11,
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
        id: 12,
        drawer: 'INS',
        componentId: 12,
        name: 'Afirme',
        image: 'imgs/afirme.png',
        price: '$6750.00'
    },
    {
        id: 13,
        drawer: 'INS',
        componentId: 13,
        name: 'Qualitas',
        image: 'imgs/qualitas.png',
        price: '$6750.00'
    },
    {
        id: 14,
        drawer: 'INS',
        componentId: 14,
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