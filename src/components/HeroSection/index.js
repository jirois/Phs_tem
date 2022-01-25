import React, { useState } from 'react';
import video from '../../videos/video_6.mp4'
import { Button } from '../ButtonElement';

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    Arrowforward,
    ArrowRight

} from './heroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop
                    muted src={video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking made easy
                </HeroH1>
                <HeroP>
                    Sign up for a new account today and recieve $250 in
                    credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Get started {hover ? <Arrowforward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
