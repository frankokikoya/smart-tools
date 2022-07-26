import React, { useCallback, useMemo } from 'react';

import Joyride, { STATUS } from 'react-joyride';

// const joyrideStyles = {
//     options: {
//         zIndex: 10000,
//     },
// };

export default function useTour({ steps = [] }) {
    const handleJoyrideCallback = useCallback((data) => {
        const { status } = data;
        const finishedStatuses = [STATUS.FINISHED];

        if (finishedStatuses.includes(status)) {
            console.log('FINISH TOUR');
        }
    }, []);

    const tour = useMemo(
        () => (
            <Joyride
                callback={handleJoyrideCallback}
                continuous={true}
                run={true}
                scrollToFirstStep={true}
                showProgress={false}
                showSkipButton={false}
                steps={steps}
                styles={{
                    options: {
                        textColor: 'white',
                        arrowColor: '#2C4154',
                        backgroundColor: '#2C4154',
                        zIndex: 10000,
                    },
                    buttonNext: {
                        backgroundColor: '#2C4154',
                        width: '100%',
                        border: '1px solid white',
                    }
                }}
            />
        ),
        [handleJoyrideCallback, steps]
    );

    return tour;
}