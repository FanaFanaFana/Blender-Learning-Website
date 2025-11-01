export const playHover = () => {
  const audio = new Audio('/hoover.wav')
  audio.volume = 0.1
  audio.play().catch(err => console.log('Audio play failed'))
}