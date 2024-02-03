import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from "./MentalHealthTemplate.module.css";
import music from "../../../assets/decode-audio.mp3"
import Meta from '../../PageAccessories/Meta';

const MentalHealthTemplate = ({ type }) => {
    let t = 120;
    if (type === 'Anxiety') {
        t = 120;
    } else if (type === 'Worry') {
        t = 240;
    } else {
        t = 180;
    }

    const [timer, setTimer] = useState(t);
    const [isRunning, setIsRunning] = useState(false);
    const [audio, setAudio] = useState(null);
    const [showTimer, setShowTimer] = useState(false);

    useEffect(() => {
        setAudio(new Audio(music));
    }, []);

    useEffect(() => {
        let interval;

        if (isRunning && timer > 0) {
            setShowTimer(true);
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
            audio && audio.pause();
        };
    }, [isRunning, timer, audio]);

    const startTimer = () => {
        if (audio) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.resume().then(() => {
                audio.play();
                setIsRunning(true);
                setShowTimer(true);
            });
        }
    };

    const stopTimer = () => {
        setIsRunning(false);
        setTimer(t);
        audio && audio.pause();
        setShowTimer(false);
    };


    const getKeyword = () => {
        const keyword = [type, "Mental Health", "Student App", "Team Zero"];
        return keyword;
    }

    return (
        <section>
            <Meta title={`${type} - Mental health`} description={`${type} - Mental health`} link={`mentalhealth/${type}`} keyword={getKeyword()} />
            <div className="blob">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><path fill="currentColor" d="M847.5 640.5Q887 781 758 839t-256.5 53.5Q374 888 263 820.5t-133.5-194Q107 500 145 385t124-222.5Q355 55 474 134t265.5 82.5Q886 220 847 360t.5 280.5Z" /></clipPath></defs><g clip-path="url(#a)"><path fill="#0891b2" d="M847.5 640.5Q887 781 758 839t-256.5 53.5Q374 888 263 820.5t-133.5-194Q107 500 145 385t124-222.5Q355 55 474 134t265.5 82.5Q886 220 847 360t.5 280.5Z" /></g></svg>
            </div>
            <h1 className='text-4xl italic font-cursive font-bold text-bl text-center mt-3'>{type}</h1>
            <p className='text-center italic text-gray-200'>Relax and Breathe deeply</p>
            <div className={styles.ocean}>
                <div className={styles.wave}></div>
                <div className={`${styles.wave} ${styles.wave2}`}></div>
            </div>
            <div className={styles.outerCircle}>
                <div className={styles.innerCircle}></div>
                <div className={styles.center}></div>
            </div>
            <div className='text-gray-200 div-center' style={{
                top: "35%",
            }}>{t / 60} minute</div>
            <div id='timer' className={showTimer ? 'text-center bg-slate-700 div-center px-8 py-2 text-xl rounded-md text-slate-300 font-bold' : 'hidden'} style={{
                top: "70%",
            }}>
                {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
            </div>
            <div className={styles.btngroup}>
                {isRunning ? (
                    <button className={styles.btn} onClick={stopTimer}>
                        Stop
                    </button>
                ) : (
                    <button className={styles.btn} onClick={startTimer}>
                        Start
                    </button>
                )}
            </div>
            <audio id='music' autoPlay loop>
                <source src={music} type='audio/mp3' />
            </audio>
        </section>
    )
}
MentalHealthTemplate.propTypes = {
    type: PropTypes.string.isRequired,
};

export default MentalHealthTemplate;