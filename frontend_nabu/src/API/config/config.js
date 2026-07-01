export const APP_NAME = 'NABU';
export const APP_SLOGAN = 'Numérisation Archivage Bibliothèque Universitaire';
export const APP_ETABLISSEMENT = 'SCDI de Montpellier';
export const APP_FAVICON = 'public/image/favicon.ico';

const API_URL =
	window.location.hostname === 'localhost'
		? 'http://localhost/stage'
		: 'https://nabu.scdi-montpellier.fr/';

export default API_URL;
