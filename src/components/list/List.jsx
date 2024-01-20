import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./List.scss";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = () => {
	const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,2,26,27,28,29,30];
	// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const listRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);
	const [sliderNumber, setSliderNumber] = useState(0);

	const handleClick = (direction) => {
		let distance = listRef.current.getBoundingClientRect().x - 50;

		if (direction === "left" && sliderNumber > 0) {
			setSliderNumber(sliderNumber - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		} else if (direction === "right" && sliderNumber < 5) {
      setIsMoved(true);
			setSliderNumber(sliderNumber + 1);
      console.log(sliderNumber, arr.length)
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
		}
	};

	return (
		<div className="list">
			<span className="listTitle">Continue to watch</span>
			<div className="wrappper">
				<ArrowBackIosOutlined
					className="sliderArrow left"
					onClick={() => handleClick("left")}
          style={{display: !isMoved && "none"}}
				/>
				<div className="container" ref={listRef}>
					{arr.map((item, index) => (
						<ListItem key={index} index={index} />
					))}
				</div>
				<ArrowForwardIosOutlined
					className="sliderArrow right"
					onClick={() => handleClick("right")}
				/>
			</div>
		</div>
	);
};

export default List;
