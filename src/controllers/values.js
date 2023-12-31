import {
	aichatonline,
aidutu,
binjie,
c3a0chat,
cgptonline,
chatbotji1z,
chatg,
chatgbt,
chatgbtaudio,
chatgptai,
chatgptbestim,
chatgptdemo,
chatgptt,
chatgpttaudio,
cveoy,
docsbot,
geekgpt,
gptchatly,
gptdemostream,
gptgo,
gptphotos,
gptpictures,
gptzw7,
hfgpt2,
lemurchat,
lovebaby,
onlinegpt,
openaiapi2d,
openaiazure,
reveseryai,
shanti,
vocai,
wewordle,
Gemini
} from './gpt.js';

export const gpt = async (req, res, next) => {
	try {
		let result;
		let gemini = new Gemini();
		const model = req.query.model;

		switch (model) {
			case 'aichatonline':
				result = await aichatonline(req.query.q);
				break;
			case 'aidutu':
				result = await aidutu(req.query.q);
				break;
			case 'binjie':
				result = await binjie(req.query.q);
				break;
			case 'c3a0chat':
				result = await c3a0chat(req.query.q);
				break;
			case 'cgptonline':
				result = await cgptonline(req.query.q);
				break;
			case 'chatbotji1z':
				result = await chatbotji1z(req.query.q);
				break;
			case 'chatg':
				result = await chatg(req.query.q);
				break;
			case 'chatgbt':
				result = await chatgbt(req.query.q);
				break;
			case 'chatgbtaudio':
				result = await chatgbtaudio(req.query.q);
				break;
			case 'chatgptai':
				result = await chatgptai(req.query.q);
				break;
			case 'chatgptbestim':
				result = await chatgptbestim(req.query.type, req.query.q);
				break;
			case 'chatgptdemo':
				result = await chatgptdemo(req.query.q);
				break;
			case 'chatgptt':
				result = await chatgptt(req.query.q);
				break;
			case 'chatgpttaudio':
				result = await chatgpttaudio(req.query.q);
				break;
			case 'cveoy':
				result = await cveoy(req.query.q);
				break;
			case 'docsbot':
				result = await docsbot(req.query.q);
				break;
			case 'geekgpt':
				result = await geekgpt(req.query.q);
				break;
			case 'gptchatly':
				result = await gptchatly(req.query.q);
				break;
			case 'gptdemostream':
				result = await gptdemostream(req.query.id, req.query.q);
				break;
			case 'gptgo':
				result = await gptgo(req.query.q);
				break;
			case 'gptphotos':
				result = await gptphotos(req.query.q);
				break;
			case 'gptpictures':
				result = await gptpictures(req.query.q);
				break;
			case 'gptzw7':
				result = await gptzw7(req.query.q);
				break;
			case 'hfgpt2':
				result = await hfgpt2(req.query.q);
				break;
			case 'lemurchat':
				result = await lemurchat(req.query.q);
				break;
			case 'lovebaby':
				result = await lovebaby(req.query.q);
				break;
			case 'onlinegpt':
				result = await onlinegpt(req.query.q);
				break;
			case 'openaiapi2d':
				result = await openaiapi2d(req.query.q);
				break;
			case 'openaiazure':
				result = await openaiazure(req.query.q);
				break;
			case 'reveseryai':
				result = await reveseryai(req.query.q);
				break;
			case 'shanti':
				result = await shanti(req.query.q, req.query.type);
				break;
			case 'vocai':
				result = await vocai(req.query.q);
				break;
			case 'wewordle':
				result = await wewordle(req.query.q);
				break;
				case 'gemini':
				result = await gemini.generateGeminiProContent(req.query.text);
				break;
				case 'geministream':
				result = await gemini.streamGenerateGeminiProContent(req.query.text);
				break;
				case 'geminivision':
				result = await gemini.generateGeminiProVisionContent(req.query.text, req.query.data, req.query.mime);
				break;
			default:
				throw new Error('Service not found');
		}

		res.status(200).send(result);
	} catch (error) {
		console.error(error);
		res.status(500).send({
			error: 'Internal Server Error'
		});
	}
};
