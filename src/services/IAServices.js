import { openRouter } from '../lib/ia'
import { generateText } from 'ai'
import { modelos, text_inicio, normas, personaidad } from '../helpers/aiList'

export default {
  async generarReceta(prompt) {
    for (const modeloId of modelos) {
      try {
        console.log(`Intentando con: ${modeloId}...`)

        const { text } = await generateText({
          model: openRouter(modeloId),
          temperature: 0.4,
          system: personaidad,
          prompt: `${text_inicio}\n${normas}\n${prompt}`,
          abortSignal: AbortSignal.timeout(10000),
        })
        console.log(text)
        return text
      } catch (error) {
        if (error.message.includes('Rate limit')) {
          return '⚠️ Has agotado las consultas gratuitas por hoy. Intenta de nuevo mañana o usa otra API Key.'
        } else {
          return 'El bar está cerrado temporalmente. Intenta en unos minutos.'
        }
      }
    }
  },
}
