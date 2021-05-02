import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import ShowCard from '../../components/ShowCard';
import MovieCard from '../../components/MovieCard';
import Phase1 from '../../components/Phase1';
import Phase2 from '../../components/Phase2';
import Phase3 from '../../components/Phase3';
import { Button } from 'reactstrap';
import ScrollUpButton from "react-scroll-up-button";
import './InfinitySaga.css';

const InfinitySaga = () => {

    return (
        <div>
            <h1 className="text">THE INFINITY SAGA</h1>
            <ScrollUpButton />
            <h5 className="text descriptor">From a playboy-billionaire trying to escape his terrorist captors in a cave to trying to save all of existence in the universe, the Marvel Cinematic Universe begins with The Infinity Saga. Buckle up.</h5>
            <div className="text">
                <Button className="phaseBtn phase1" color="danger" href="#phase1" style={{ marginBottom: '1rem' }}>
                    Phase 1
                </Button>
                <Button className="phaseBtn phase2" color="danger" href="#phase2" style={{ marginBottom: '1rem' }}>
                    Phase 2
                </Button>
                <Button className="phaseBtn phase3" color="danger" href="#phase3" style={{ marginBottom: '1rem' }}>
                    Phase 3
                </Button>
            </div>
            <section id="phase1"></section>
            <Phase1 />
            <section id="phase2"></section>
            <Phase2 />
            <section id="phase3"></section>
            <Phase3 />
        </div>
    );
}

export default InfinitySaga;