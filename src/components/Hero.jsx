import heroImage from '../assets/work_in_progress.jpg';
const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-content">
				<h1>&#47;&#47; Shorten Your Links with Ease &#47;&#47;</h1>
				<p>Turn long, cumbersome URLs into short, shareable links.</p>
				<p>
					Build your brand’s recognition and get detailed insights on
					how your links are performing.
				</p>
				<div
					style={{
						margin: '2rem 0',
						display: 'flex',
						gap: '1rem',
					}}
				>
					<button className="black-btn">Get Started</button>
					<button className="white-btn">Learn More</button>
				</div>
			</div>
			<div className="hero-image">
				<img src={heroImage} alt="illustration" />
			</div>
		</div>
	);
};

export default Hero;
