const hero = document.querySelector('.hero');
const scene = document.querySelector('.hero-scene');
const modal = document.getElementById('contact-choice-modal');
const closeModalBtn = document.getElementById('close-contact-choice');
const projectButtons = document.querySelectorAll('.project-contact-btn');
const socialLinks = {
	facebook: 'https://www.facebook.com/clarkjohngilcarta',
	instagram: 'https://www.instagram.com/clarkjohngilcarta'
};

if (hero && scene) {
	hero.addEventListener('pointermove', (event) => {
		const x = (event.clientX / window.innerWidth - 0.5) * 10;
		const y = (event.clientY / window.innerHeight - 0.5) * -10;
		scene.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
	});
}

let selectedProject = '';

function openContactChoice(projectName) {
	selectedProject = projectName || '';
	if (modal) {
		modal.classList.add('open');
		modal.setAttribute('aria-hidden', 'false');
	}
}

function closeContactChoice() {
	if (modal) {
		modal.classList.remove('open');
		modal.setAttribute('aria-hidden', 'true');
	}
}

projectButtons.forEach((button) => {
	button.addEventListener('click', () => {
		openContactChoice(button.dataset.project || 'project');
	});
});

closeModalBtn?.addEventListener('click', closeContactChoice);
modal?.addEventListener('click', (event) => {
	if (event.target === modal) closeContactChoice();
});

document.querySelectorAll('.contact-choice-btn').forEach((button) => {
	button.addEventListener('click', () => {
		const contactType = button.dataset.contact;
		const targetUrl = socialLinks[contactType];
		if (targetUrl) {
			window.open(targetUrl, '_blank', 'noopener,noreferrer');
		}
		closeContactChoice();
	});
});