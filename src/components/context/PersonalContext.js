import { createContext, useEffect, useState } from "react";

const PersonalContext = createContext();

export const PersonalProvider = ({ children }) => {
	const [cities, setCities] = useState([]);
	const [districts, setDistricts] = useState([]);
	const [name, setName] = useState([]);
	const [surname, setSurname] = useState([]);
	const [selectedCity, setSelectedCity] = useState();
	const [selectedDistrict, setSelectedDistrict] = useState();
	const [isCitySelected, setIsCitySelected] = useState(false);
	const [phones, setPhones] = useState(["none"]);
	const TOKEN =
		"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiY2VmMmIzMjEwNTQwMmQyYzA2MjQ4MGM1NWRjYjc2NjEwOTMxYTc5OWU2YzdlZWJlNDI1Y2Q3MjZhODgxN2Y4YzgzZjUyNDMzMDUwMDVlNmEiLCJpYXQiOjE2NTY0OTg2MTcuNTQ2NzA2LCJuYmYiOjE2NTY0OTg2MTcuNTQ2NzExLCJleHAiOjE2ODgwMzQ2MTcuNTM1MTcxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.bQp24GwPidXBLkheCZNnLyuzMzmzhlduzToEjoq7Me3c-iFJKd7KaiX3fa7qxQ492KfU5Dra5qswovuBpqjKm6i_XC3DvBjribbC_5TUpw9y14B6nWqb3ltymkHqVcsBo7t2ICj7geXWHHtCzDdppl_huZFaEZWDHLW012BmtHqMQ36wNxnHNbZ-2Fd2nKMP5rfA7MsLgIaYmawQ4daagdNid2XZ2JpgJtjHfgfEKvdE5F0DVdornR1hqmZoRviKq-MLXvXxLqntLTgF-3oklfnYLbf_W2wq9rfYGyAUEVgZH4WcrLkgCQzFxXvH3pjXzgK3VvkuyneKYCu1ZZOSJoy2GgFqdopwKfLM3R_WQXc9sd5-HFniMHPGnEidj5aoVrGuvFE4BI-IZfy8MwZiZ7CYfKW_2kAbUbNjWfBOFFQ6mjXmVqa4fPHPHU4ymlxS5zxSGlfS76koU_4FJwoX6iyjYByPzMFbVO84M9sAyL-tq2ZjBsXZVqhfGxzwnNUH8_X7t7Jy0EzyK-5hbGcTv_7FWvndC56fgV8cnNB4A425nUb58Bgv-yY44SsMQkwQRPCpCQkB19Vp-WJXAkttFUBkowVwsUr42w2hHgiauG5ZpQJPKocXYCd3YBq9YbdRBDQ1rACH13gBNXxfmtsVXxBrbXTWvg3Owk_MbRX-WGk";

	const fetchCities = async () => {
		let response = await fetch("http://127.0.0.1:8000/api/cities", {
			headers: {
				"Content-Type": "application/json",
				Authorization: TOKEN,
			},
		});

		let data = await response.json();
		data.sort((a, b) => a - b);

		setCities(data);
	};

	const fetchDistricts = async (city) => {
		let response = await fetch(`http://127.0.0.1:8000/api/districts/${city}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: TOKEN,
			},
		});

		let data = await response.json();
		data.sort((a, b) => a - b);

		setDistricts(data);
	};

	const postPersonal = async () => {
		phones.shift();

		let response = await fetch(`http://127.0.0.1:8000/api/personals`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: TOKEN,
			},
			body: JSON.stringify({
				name: name,
				surname: surname,
				city: selectedCity,
				district: selectedDistrict,
				phones: phones,
			}),
		});
		console.log(phones);

		console.log(response);
	};

	useEffect(() => {
		fetchCities();
	}, []);

	return (
		<PersonalContext.Provider
			value={{
				cities,
				TOKEN,
				selectedCity,
				districts,
				isCitySelected,
				selectedDistrict,
				phones,
				name,
				surname,
				setSurname,
				setName,
				setPhones,
				setSelectedDistrict,
				setIsCitySelected,
				setDistricts,
				setSelectedCity,
				fetchDistricts,
				postPersonal,
			}}
		>
			{children}
		</PersonalContext.Provider>
	);
};

export default PersonalContext;
