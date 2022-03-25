import React, { useRef } from "react";
import useOnclickOutside from "../../hooks/useOnclickOutside";
import "./movieModal.scss";

export default function MovieModal({ backdrop_path, title, overview, name, release_date, first_air_date, vote_average, setModalOpen }) {
	const ref = useRef();
	useOnclickOutside(ref, () => {
		setModalOpen(false);
	});
	return (
		<div className="presentation">
			<div className="wrapper-modal">
				<article className="modal" ref={ref}>
					<img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" className="modal-poster-img" />
					<div className="modal-content">
						<p className="details">
							<span className="user-perc">100% for you</span> {release_date ? release_date : first_air_date}
						</p>
						<h2 className="title">{title ? title : name}</h2>
						<p className="vote-average">평점: {vote_average}</p>
						<p className="overview">{overview}</p>
					</div>
					<button onClick={() => setModalOpen(false)} className="modal-close">
						닫기
					</button>
				</article>
			</div>
		</div>
	);
}
