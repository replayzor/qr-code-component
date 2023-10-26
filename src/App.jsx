import Footer from "./Footer";

function App() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-lightGray">
			<div className="bg-white h-[480px] w-72 rounded-2xl">
				<div className="p-4">
					<img
						src="./image-qr-code.png"
						alt="image qr code"
						className="rounded-xl"
					/>
				</div>
				<div className="px-4 py-2 font-extrabold text-center text-darkBlue">
					Improve your front-end skills by building projects
				</div>
				<div className="px-3 py-4 text-sm text-center text-grayBlue">
					Scan the QR code to visit Frontend Mentor and take your coding skills
					to the next level
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
