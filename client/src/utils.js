function prettySize(size) {
  if (size > 1000000) return Math.round(size / 1000000) + 'mb'
  if (size > 1000) return Math.round(size / 1000) + ' kb'
  return size + 'b'
}

export { prettySize }
