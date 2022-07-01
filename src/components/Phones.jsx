import { Box, Input } from "@mui/material";
import { useContext } from "react";
import PersonalContext from "./context/PersonalContext";

const ariaLabel = { "aria-label": "description" };

const Phones = () => {
	const { phones } = useContext(PersonalContext);

	return (
		<Box sx={{ m: 1 }}>
			{phones.map((phone, id) => (
				<Input placeholder="Phone" inputProps={ariaLabel} required />
			))}
		</Box>
	);
};

export default Phones;
