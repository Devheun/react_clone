import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import Details from "../components/Details";

function Detail(){
	
	const {id} = useParams();
	const [load,setLoad] = useState(true);
	const [detail,setDetail]= useState({});
	
	const getMovie=async ()=>{
		const json = await(
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setLoad(false);
		setDetail(json.data.movie);
	};
	
	useEffect(()=>{
		getMovie();
	},[id]);
	
	return (
		<div>
			<div>{load ? <h1>loading...</h1>:
				(
					<div>
						<Details
						id={detail.id}
						cover_img={detail.medium_cover_image}
						title={detail.title}
						year={detail.year}
						rating={detail.rating}
						genres={detail.genres}
						description={detail.description_intro}/>
					</div>
				)}</div>
		</div>
	);
}

export default Detail;