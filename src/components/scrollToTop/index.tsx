import React,{useState, useEffect} from 'react';

import ArrowUp from 'components/icon/arrowUp';
import { TFloatingProps, TIconButton, TFloating } from 'components';

const TScrollToTop = ({positionShowUp, ...props}: TFloatingProps) => {
    const [show, setShow] = useState(false);

    const clickScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setShow(scrollTop > (positionShowUp || 0));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (show?(<TFloating {...props} onClick={clickScrollTop}>
      <TIconButton>
        <ArrowUp fontSize="large" />
      </TIconButton>
    </TFloating>)
    :null);
};

export default TScrollToTop;
