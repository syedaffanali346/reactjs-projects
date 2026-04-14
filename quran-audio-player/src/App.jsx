import { useEffect, useState } from "react";
import "./index.css"
import { IoIosArrowDown } from "react-icons/io";

function App() {

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [qaris, setQaris] = useState([])
	const [selectedQari, setSelectedQari] = useState({
		identifier: "ar.alafasy",
		englishName: "Alafasy"
	});
	const [ayatNumber, setAyatNumber] = useState("")
	const [searched, setSearched] = useState(false)
	const [audio, setAudio] = useState({})

	const fetchQari = async () => {
		try {
			setLoading(true)
			const response = await fetch("http://api.alquran.cloud/v1/edition?format=audio&language=ar")
			if (response.ok) {
				const data = await response.json()
				setQaris(data.data)
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const handleAudio = async (e) => {
		try {
			e.preventDefault()
			setLoading(true)
			setSearched(true)
			setError(null)
			if (ayatNumber > 6236 || ayatNumber < 1) {
				setError("Ayat number must be between 1 and 6236")
				return;
			}
			const response = await fetch(`http://api.alquran.cloud/v1/ayah/${ayatNumber}/${selectedQari.identifier}`)
			if (response.ok) {
				const data = await response.json()
				setAudio(data.data)

			}
		} catch (error) {
			console.log(error)
		}

		finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchQari()
	}, [])

	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className="bg-[#E9E6FF] p-6 flex flex-col justify-center items-center h-full">

					<h1 className="text-center text-2xl md:text-3xl font-bold text-[#13262F]">Quran Audio Player</h1>

						<div className="flex gap-4 relative mt-6">
							<div className="flex items-center justify-between border rounded-md px-4 gap-4 cursor-pointer group p-2 w-56 sm:w-96 whitespace-nowrap overflow-hidden">
								<p className="font-medium">{selectedQari.englishName}</p>
								<IoIosArrowDown />
								<div className="absolute left-0 top-full border rounded-md px-4 cursor-pointer h-58 z-1 overflow-y-scroll hidden group-hover:block bg-[#E9E6FF] w-56">
									{loading
										? <p>Loading...</p>
										: qaris.map((qari, index) => (
											<p key={index} onClick={() => {
												setSelectedQari({ englishName: qari.englishName, identifier: qari.identifier });
											}}> {qari.englishName} </p>
										))}
								</div>
							</div>
						</div>

						<div className="flex gap-6 relative mt-6 flex-col md:flex-row">
							<input
								type="number"
								className="outline-none border rounded-md p-2 w-56 sm:w-96 md:w-56"
								placeholder="Enter ayat number (1-6236)"
								value={ayatNumber}
								onChange={(e) => { 
									setAyatNumber(e.target.value)
									setError(null)
								}}
							/>
							<button type="submit" className="bg-[#13262F] text-[#E9E6FF] shadow-lg p-2 rounded-lg px-4 cursor-pointer whitespace-nowrap w-56 sm:w-96 md:w-36" onClick={handleAudio}>Search Ayah</button>
						</div>





						<div className="flex justify-center items-center mt-6 w-56 sm:w-96 flex-col gap-6 text-center">
							{error && (
								<p className="text-red-500 text-sm">{error}</p>
							)}

							{!searched && (
								<p>Please search ayah</p>
							)}

							{searched && loading && (
								<p>Loading...</p>
							)}

							{searched && !loading && audio && !error && (
								<>
								<audio src={audio.audio} controls className="w-56 sm:w-96" />
								<p className="font-medium text-green-800">{audio.text}</p>
								</>
							)}
						</div>

				</div>
			</div>
		</>
	)
}

export default App
