// Unsplash API

const count = 30;
const apiKey = "TYgSyYDEB0uudMZKE9qpwsiHvnicEzPevsApeAi8M1k";

const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch {}
}

getPhotos();
