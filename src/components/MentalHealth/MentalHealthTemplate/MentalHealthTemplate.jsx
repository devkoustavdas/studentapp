import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from "./MentalHealthTemplate.module.css";
import music from "../../../assets/decode-audio.mp3"

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


    return (
        <section>
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