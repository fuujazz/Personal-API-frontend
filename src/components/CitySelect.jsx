import { useContext } from "react";
import PersonalContext from "./context/PersonalContext";

import {
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	FormHelperText,
} from "@mui/material";

const CitySelect = () => {
	const {
		cities,
		setSelectedCity,
		selectedCity,
		fetchDistricts,
		setIsCitySelected,
	} = useContext(PersonalContext);

	const handleCitySelect = (event) => {
		setSelectedCity(event.target.value);
		setIsCitySelected(true);
		fetchDistricts(event.target.value);
	};
	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }} required>
				<InputLabel id="demo-simple-select-required-label">City</InputLabel>
				<Select
					labelId="demo-simple-select-required-label"
					id="demo-simple-select-required"
					value={selectedCity}
					label="City"
					onChange={handleCitySelect}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{cities.map((city, index) => (
						<MenuItem key={index} value={city.name}>
							{city.name}
						</MenuItem>
					))}
				</Select>
				<FormHelperText>Required</FormHelperText>
			</FormControl>
		</div>
	);
};

export default CitySelect;
