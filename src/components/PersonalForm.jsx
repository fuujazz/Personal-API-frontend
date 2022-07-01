import CitySelect from "./CitySelect";
import DistrictSelect from "./DistrictSelect";
import Box from "@mui/material/Box";
import { Input, Button } from "@mui/material";
import Phones from "./Phones";
import { FaPlusCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import PersonalContext from "./context/PersonalContext";

const ariaLabel = { "aria-label": "description" };

const Form = () => {
	const { setName, setSurname, phones, setPhones, postPersonal } =
		useContext(PersonalContext);

	const [phoneInput, setPhoneInput] = useState("");

	const handlePhoneChange = (event) => {
		setPhoneInput(event.target.value);
		console.log(phoneInput);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleSurnameChange = (event) => {
		setSurname(event.target.value);
	};

	const addPhone = (event) => {
		setPhones([...phones, phoneInput]);
		setPhoneInput("");
		console.log(phones);
	};

	const handleSubmit = () => {
		postPersonal();
	};

	return (
		<Box
			sx={{
				m: 1,
				p: 1,
				border: "1px solid grey",
				width: "75%",
			}}
		>
			<Box display="flex" justifyContent="center">
				<Box>
					<Box sx={{ m: 1 }}>
						<Input
							placeholder="Name"
							inputProps={ariaLabel}
							required
							onChange={handleNameChange}
						/>
					</Box>
					<Box sx={{ m: 1 }}>
						<Input
							placeholder="Surname"
							inputProps={ariaLabel}
							onChange={handleSurnameChange}
							required
						/>
					</Box>
					<Box sx={{ m: 1 }}>
						{phones.map((phone, id) => (
							<Box>
								<Input
									placeholder="Phone"
									inputProps={ariaLabel}
									onChange={handlePhoneChange}
									required
								/>
								<Button onClick={addPhone}>
									<FaPlusCircle />
								</Button>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
			<Box display="flex" justifyContent="center">
				<CitySelect />
				<DistrictSelect />
			</Box>

			<Box display="flex" justifyContent="center">
				<Button
					color="secondary"
					variant="outlined"
					onClick={handleSubmit}
					onSubmit
				>
					Submit
				</Button>
			</Box>
		</Box>
	);
};

export default Form;
