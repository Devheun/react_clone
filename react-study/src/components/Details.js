import PropTypes from 'prop-types';
import styles from "./Details.module.css";

function Details({id,cover_img,title,year,genres,rating,description}){
	return(
		<div className={styles.movie}>
			<img src={cover_img} alt={title}/>
			<div className={styles.title}>
				<h2>{title} ({year})</h2>
				<h4>rating : {rating}</h4>
				<p className={styles.desc}>{description}</p>
			</div>
			<ul>
				{genres && genres.map((g)=>
									 <li key={g}>{g}</li>)}
			</ul>
		</div>
	);
}



Details.propTypes={
	id:PropTypes.number.isRequired,
	cover_img:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	year:PropTypes.number.isRequired,
	genres:PropTypes.arrayOf(PropTypes.string).isRequired,
	rating:PropTypes.number.isRequired,
	description:PropTypes.string.isRequired,
};

export default Details;