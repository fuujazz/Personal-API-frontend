import PersonalForm from "./components/PersonalForm";
import { PersonalProvider } from "./components/context/PersonalContext";
import { Box } from "@mui/material";

function App() {
	return (
		<PersonalProvider>
			<Box
				display="flex"
				justifyContent="center"
				sx={{
					width: "75%",
				}}
			>
				<PersonalForm />
			</Box>
		</PersonalProvider>
	);
}

export default App;
