import React from "react";
import { Link } from "react-router-dom";
import styles from "../landingPage/LandingPage.module.css";
import videoFile from "../../assets/videos/videogamesVideo.mp4";

export default function LandingPage() { 
    return (
        <div className={styles.landingPage}>
            <video className={styles.video} autoPlay loop muted>
                <source src={videoFile} type="video/mp4" /> 
            </video>
            <div className={styles.containerButton}>
                <Link to="/home">
                    <button className={styles.button}>
                        <span className={styles.textButton}>
                            <strong>Press</strong>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};