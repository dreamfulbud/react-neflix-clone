import React, { useEffect } from "react";

export default function useOnclickOutside(ref, handler) {
	useEffect(() => {
		const listener = (event) => {
			console.log("ref", ref.current);
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler();
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.addEventListener("mousedown", listener);
			document.addEventListener("touchstart", listener);
		};
	}, []);
	return <div>useOnclickOutside</div>;
}
