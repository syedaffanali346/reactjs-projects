import { useEffect, useRef, useState } from "react";
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
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const dropdownRef = useRef(null)

	const fetchQari = async () => {
		try {
			setLoading(true)
			const response = await fetch("https://api.alquran.cloud/v1/edition?format=audio&language=ar")
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
			const response = await fetch(`https://api.alquran.cloud/v1/ayah/${ayatNumber}/${selectedQari.identifier}`)
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
		const handleClickOutside = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setDropdownOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	useEffect(() => {
		fetchQari()
	}, [])

	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className="bg-[#E9E6FF] p-6 flex flex-col justify-center items-center h-full">

					<h1 className="text-center text-2xl md:text-3xl font-bold text-[#13262F]">Quran Audio Player</h1>

					<div className="flex gap-4 relative mt-6" ref={dropdownRef}>
						<div className="flex items-center justify-between border rounded-md px-4 gap-4 cursor-pointer group p-2 w-56 sm:w-96 whitespace-nowrap overflow-hidden" onClick={() => setDropdownOpen(prev => !prev)}>
							<p className="font-medium">{selectedQari.englishName}</p>
							<IoIosArrowDown className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />

							{/* Dropdown list */}
							{dropdownOpen && (
								<div className="absolute left-0 top-full border rounded-md px-4 cursor-pointer max-h-58 z-10 overflow-y-scroll bg-[#E9E6FF] w-56 sm:w-96">
									{loading
										? <p>Loading...</p>
										: qaris.map((qari, index) => (
											<p
												key={index}
												className="py-1 hover:font-semibold"
												onClick={() => {
													setSelectedQari({ englishName: qari.englishName, identifier: qari.identifier });
													setDropdownOpen(false)
												}}
											>
												{qari.englishName}
											</p>
										))}
								</div>
							)}
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
								<p className="font-medium text-green-800">{audio.surah.name}</p>
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
