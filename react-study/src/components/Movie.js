import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id,medium_cover_image,title,summary,genres}){
	return (
		<div className={styles.movie}>
			<img src={medium_cover_image} alt={title} className={styles.img}/>
			<h2 className={styles.title}>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<p>{summary}</p>
			<ul className={styles.genres}>
				 {genres && genres.map((g)=>(
							 	<li key={g}>{g}</li>))}
			 </ul>
		 </div>
	);
}

Movie.propTypes={
	id:PropTypes.number.isRequired,
	medium_cover_image:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	summary:PropTypes.string,
	genres:PropTypes.arrayOf(PropTypes.string).isRequired,
	
};

export default Movie;