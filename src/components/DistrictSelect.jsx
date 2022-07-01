import { useContext } from "react";
import PersonalContext from "./context/PersonalContext";

import {
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	FormHelperText,
} from "@mui/material";

const DistrictSelect = () => {
	const { isCitySelected, districts, selectedDistrict, setSelectedDistrict } =
		useContext(PersonalContext);

	const handleDistrictSelect = (event) => {
		setSelectedDistrict(event.target.value);
	};
	return (
		<div>
			{isCitySelected ? (
				<FormControl sx={{ m: 1, minWidth: 120 }} required>
					<InputLabel id="demo-simple-select-required-label">
						Districts
					</InputLabel>
					<Select
						labelId="demo-simple-select-required-label"
						id="demo-simple-select-required"
						value={selectedDistrict}
						label="District"
						onChange={handleDistrictSelect}
					>
						{districts.map((District, index) => (
							<MenuItem key={index} value={District.name}>
								{District.name}
							</MenuItem>
						))}
					</Select>
					<FormHelperText>Required</FormHelperText>
				</FormControl>
			) : (
				<FormControl sx={{ m: 1, minWidth: 120 }} disabled>
					<InputLabel id="demo-simple-select-disabled-label">
						Districts
					</InputLabel>
					<Select
						labelId="demo-simple-select-disabled-label"
						id="demo-simple-select-disabled"
						value={selectedDistrict}
						label="District"
						onChange={selectedDistrict}
					></Select>
					<FormHelperText>Disabled</FormHelperText>
				</FormControl>
			)}
		</div>
	);
};

export default DistrictSelect;
