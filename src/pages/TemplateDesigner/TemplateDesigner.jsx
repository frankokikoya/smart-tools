import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Grid from '@mui/material/Grid';
import Joyride, { STATUS } from 'react-joyride';

//import useTour from '../../hooks/useTour';
import { useLocalStorage } from '../../hooks/useStorage';
import DesignerContent from './components/DesignerContent';
import { DesignerProvider } from './context/DesignerContext';

const STEPS = [
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

const TemplateDesigner = () => {
    const [run, setRun] = useState(false);
    const [tourKey, setTourKey] = useLocalStorage("TOUR_KEY");
    //const tour = useTour(STEPS);

    useEffect(
        () => {
            if (!tourKey) {
                setRun(true);
                return;
            }
        },
        [tourKey]
    );

    const handleJoyrideCallback = useCallback((data) => {
        const { status } = data;
        // const finishedStatuses = [STATUS.FINISHED];

        if (status === STATUS.FINISHED) {
            console.log('FINISH TOUR');
            setTourKey("1");
            setRun(true);
            window.location.reload(false);
        }
    }, [setTourKey]);

    const tour = useMemo(
        () => (
            <Joyride
                callback={handleJoyrideCallback}
                continuous={true}
                run={run}
                scrollToFirstStep={true}
                showProgress={false}
                showSkipButton={false}
                steps={STEPS}
                styles={{
                    options: {
                        textColor: 'white',
                        arrowColor: '#2C4154',
                        backgroundColor: '#2C4154',
                        zIndex: 100000,
                    },
                    buttonNext: {
                        backgroundColor: '#2C4154',
                        width: '100%',
                        border: '1px solid white',
                    }
                }}
            />
        ),
        [handleJoyrideCallback, run]
    );

    return (
        <Grid
            container
            sx={{
                width: '100vw',
                height: '100vh',
                overflow: 'scroll',
                backgroundColor: 'secondary.background'
            }}>
            {tour}
            <DesignerProvider>
                <DesignerContent />
            </DesignerProvider>
        </Grid>
    )
};

export default TemplateDesigner;