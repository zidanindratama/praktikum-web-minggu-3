$(document).ready(function () {
  const apiUrl = "https://api.jikan.moe/v4/top/anime";

  $.ajax({
    url: apiUrl,
    method: "GET",
    success: function (data) {
      const animeList = data.data;

      animeList.forEach((anime) => {
        const animeCard = `
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}" class="w-full h-64 object-cover">
            <div class="p-4">
              <h2 class="text-xl font-semibold">${anime.title}</h2>
              <p class="text-gray-600 mt-2">Score: ${anime.score}</p>
              <p class="text-gray-600 mt-2">Episodes: ${anime.episodes}</p>
              <p class="text-gray-600 mt-2">Type: ${anime.type}</p>
            </div>
          </div>
        `;
        $("#anime-list").append(animeCard);
      });
    },
    error: function (error) {
      console.log("Error fetching anime data:", error);
    },
  });
});
