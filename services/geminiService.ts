import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini Client safely
const getApiKey = (): string => {
  // Vite usa import.meta.env para variáveis de ambiente
  return import.meta.env.VITE_GEMINI_API_KEY || '';
};

const apiKey = getApiKey();
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// System instruction to give the AI a persona
const SYSTEM_INSTRUCTION = `
Você é o assistente virtual sênior e qualificador de leads da "Carol Rezek & Ricardo Ambrósio Arquitetura".
Seu tom é elegante, profissional, acolhedor e estratégico.

SEU OBJETIVO:
Além de tirar dúvidas, você deve gentilmente qualificar o visitante fazendo perguntas estratégicas durante a conversa para entender o perfil do cliente.

ROTEIRO DE QUALIFICAÇÃO (Tente obter estas informações de forma natural):
1. Tipo de Projeto: (Ex: Residencial, Comercial, Reforma, Interiores?)
2. Localização: (Onde será a obra?)
3. Expectativa de Investimento/Orçamento: (Se o cliente se sentir confortável em compartilhar).

COMPORTAMENTO:
- Não faça um interrogatório. Faça uma pergunta por vez enquanto responde as dúvidas do usuário.
- Se o usuário perguntar preços, explique que cada projeto é único e que você precisa de mais detalhes para uma estimativa.
- Ao final da conversa ou quando tiver as informações, sugira fortemente que ele preencha o formulário de contato abaixo ou agende uma reunião, mencionando que "Carol e Ricardo adorariam analisar esses detalhes pessoalmente".

RESPOSTA:
- Responda sempre em Português do Brasil.
- Seja conciso e use parágrafos curtos.
- Mantenha a aura de sofisticação da marca.
`;

// Histórico de conversa para manter contexto
let chatHistory: { role: string; parts: { text: string }[] }[] = [];

export const initializeChat = (): void => {
  chatHistory = [];
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!genAI) {
    return "Desculpe, o assistente está indisponível no momento. Por favor, use o formulário de contato.";
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({
      history: chatHistory,
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    // Atualiza o histórico
    chatHistory.push({ role: "user", parts: [{ text: message }] });
    chatHistory.push({ role: "model", parts: [{ text: text }] });

    return text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Ocorreu um erro ao conectar com o assistente. Por favor, tente novamente mais tarde.";
  }
};