import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameDetail } from "../../redux/actions/index";
import styles from "../detail/Detail.module.css";
import { Spinner } from "../spinner/Spinner";

export default function Detail(props) {
    const dispatch = useDispatch();
    const {id} = props.match.params;
    const videogameDetail = useSelector((state) => state.videogameDetail);

    useEffect(() => {
        dispatch(getVideogameDetail(id));
    }, [id, dispatch]);

    return ( 
        <div>
            <Link to={"/home"}>
                <button className={styles.button}>x</button>
            </Link>
            {videogameDetail ? (
                <div className={styles.detailsContiner}>
                    <img
                    className={styles.videogameImage}
                    src={videogameDetail.background_image ||
                    "https://m.media-amazon.com/images/I/611fcGzpVUL.jpg"}
                    alt="Not Found"
                    />
                    <div className={styles.videogameDetail}>
                        <p className={styles.firstItem}>
                            <strong>Title:</strong> {videogameDetail.name}
                        </p>
                        <p>
                            <strong>Genres:</strong> {" "}
                            {videogameDetail.genres?.map((g) => g.name).join(", ")}
                        </p>
                        <p>
                            <strong>Description:</strong>
                            {videogameDetail.description_raw || videogameDetail.description}
                        </p>
                        <p>
                            <strong>Platforms:</strong>
                            {videogameDetail.id?.length > 7
                            ? videogameDetail.platforms
                            ?.map((p) => p.name).join(", ")
                            : videogameDetail.platforms
                            ?.map((p) => p.platforms.name).join(", ") }
                        </p>
                        <p>
                            <strong>Release Date:</strong>
                            {videogameDetail.released || "None"}
                        </p>
                        <p>
                            <strong>Rating:</strong>
                            {videogameDetail.rating}
                        </p>
                    </div>
                </div>
            ) :
            (
                <Spinner />
            )
        }
        </div>
    )
};