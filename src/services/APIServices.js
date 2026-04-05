import api from '@/lib/axios'

export default {
  obtenerCategorias() {
    return api('/list.php?c=list')
  },
  obtenerRecetas({ categoria, nombre }) {
    return api(`/filter.php?c=${categoria}&i=${nombre}`)
  },
  recetaCompleta(id) {
    return api(`/lookup.php?i=${id}`)
  },
}
