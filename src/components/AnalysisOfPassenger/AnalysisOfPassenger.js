import React, {useEffect, useRef} from 'react';
import mapboxgl from "mapbox-gl";

import styles from './AnalysisOfPassenger.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
// import map from "../../assets/images/map.svg";

mapboxgl.accessToken = "pk.eyJ1IjoibmF6YXJ2ZXJneW4iLCJhIjoiY2s1djY3bjA2MDh0bTNtcXc0ODR2M2h1dSJ9.PaLSEgPewauf2KVwkv9RTQ";


const AnalysisOfPassenger = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/nazarvergyn/clnszvr7o00jk01pl5uuj47s4',
            center: [69.264380, 41.284655],
            zoom: 10.71,
            interactive: false, // disable map zoom when using scroll
            attributionControl: false, // disable mapbox attribution, display: "none" @Mapbox....
        });

        return () => map.remove();
    }, []);

    return (
        <div className={styles.analysisOfPassenger}>
            <div className={styles.analysisOfPassenger_titleContainer}>
                <h3>Analysis of passenger</h3>

                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.analysisOfPassenger_map}>
                <div ref={mapContainerRef} style={{ width: '100%', height: '100%', minHeight: '500px' }} />
            </div>
        </div>
    );
};

export default AnalysisOfPassenger;