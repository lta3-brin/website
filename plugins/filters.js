import Vue from 'vue'

Vue.filter('parseDate', (value) => {
  if (!value) return ''

  value = value.toString()
  const date = new Date(value)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return date.toLocaleDateString('id-ID', options)
})
