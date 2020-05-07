import photo from '../images/tiger.jpg'

export default (tag) => {
  const image = document.createElement('img')
  image.src = photo
  document.querySelector(tag).appendChild(image)
}