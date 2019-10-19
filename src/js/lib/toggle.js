export default function toggle(...targets) {
  return () => {
    targets.forEach((item) => {  
      item.classList.toggle('unavailable')
    })
  }
}
  