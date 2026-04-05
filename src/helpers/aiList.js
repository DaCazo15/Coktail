export const modelos = [
  'nvidia/nemotron-3-super-120b-a12b:free', // funciona - top 1
  'minimax/minimax-m2.5:free', // funciona - top 2
  'stepfun/step-3.5-flash:free', // funciona - top 3
  'nvidia/nemotron-3-nano-30b-a3b:free', // funciona - top 4
  'openai/gpt-oss-20b:free', // funciona
  'arcee-ai/trinity-mini:free', // funciona
  'openai/gpt-oss-120b:free', // funciona
  'liquid/lfm-2.5-1.2b-instruct:free', // funciona
  // ------------------------------ por si acaban los anteriores ------------------------------
  'nousresearch/hermes-3-llama-3.1-405b:free',
  'arcee-ai/trinity-large-preview:free',
  'z-ai/glm-4.5-air:free',
  'qwen/qwen3-next-80b-a3b-instruct:free',
  'qwen/qwen3.6-plus:free',
  'qwen/qwen3-coder:free',
  'nvidia/nemotron-nano-9b-v2:free',
  'nvidia/nemotron-nano-12b-v2-vl:free',
  'meta-llama/llama-3.2-3b-instruct:free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'google/lyria-3-clip-preview',
  'google/gemma-3n-e2b-it:free',
  'google/gemma-3n-e4b-it:free',
  'google/lyria-3-pro-preview',
  'google/gemma-3-4b-it:free',
  'google/gemma-3-12b-it:free',
  'google/gemma-3-27b-it:free',
]

export const text_inicio = 'Tu tarea es proporcionar la receta exacta para:'
export const normas =
  'Reglas estrictas: 1. Si el nombre se refiere a un cóctel, responde SOLO con la receta de la bebida. 2. NO confundas nombres de bebidas con alimentos . 3. Formato: Incluye Ingredientes, Cristalería recomendada y Método de preparación. 4. Si no conoces la bebida, indica que no está en tu registro de bar.'
export const personaidad =
  'Eres un Bartender Experto con amplio conocimiento en coctelería clásica, moderna y mocktails (sin alcohol). '
