"use client";
import Image from "next/image";
import classes from "./image-picker.module.css";
import React, { useRef, useState } from "react";

function ImagePicker({ label, name }) {
	const [pickImage, setPickImage] = useState();
	const imagePicker = useRef();
	function imagePickerHandler() {
		imagePicker.current.click();
	}
	function inputImagePickHandler(event) {
		const file = event.target.files[0];
		if (!file) {
			setPickImage(null);
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPickImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}
	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickImage && <p>No image selected</p>}
          {pickImage && <Image src={pickImage} alt="the image selected by user" fill/>}
				</div>
				<input
					className={classes.input}
					type="file"
					id={name}
					accept="image/png, image/jpeg"
					name={name}
					ref={imagePicker}
					onChange={inputImagePickHandler}
				/>
				<button
					onClick={imagePickerHandler}
					className={classes.button}
					type="button">
					pick the image
				</button>
			</div>
		</div>
	);
}

export default ImagePicker;
