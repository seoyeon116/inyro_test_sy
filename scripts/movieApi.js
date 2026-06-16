// 변수 선언부
let isLoading = false;

// 인기 영화 불러오는 함수
const getPopularMovies = async () => {
    isLoading = true;
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular",
            {
                params: {
                    api_key: "daca762704306cff7ce29d52fe26b2c6",
                    language: "ko-KR",
                },
            },
        );
        // 영화 목록 불러오기
        const movies = response.data.results;

        // 컨테이너 선택
        const container = document.querySelector("section.grid");

        // movies 배열 순회하며 container 안에 채우기
        movies.forEach((movie) => {
            console.log(movie);
            // 카드
            const card = document.createElement("div");
            card.className =
                "relative flex aspect-[2/3] w-full overflow-hidden rounded-lg bg-zinc-900 shadow-xl shadow-black/30 ring-1 ring-white/10 group transition duration-300 hover:-translate-y-1 hover:shadow-emerald-950/40";

            // 이미지
            const img = document.createElement("img");
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            img.alt = movie.title;
            img.className =
                "w-full h-full object-cover transition duration-500 group-hover:scale-105";

            // 오버레이
            const overlay = document.createElement("div");
            overlay.className =
                "absolute inset-0 flex flex-col text-white font-bold items-center justify-end gap-3 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 text-center p-6";

            // 오버레이 - title
            const title = document.createElement("h3");
            title.textContent = movie.title;
            title.className = "text-xl leading-snug text-white drop-shadow";

            // 오버레이 - 평점
            const rating = document.createElement("h3");
            rating.textContent = `평점: ${movie.vote_average}`;
            rating.className =
                movie.vote_average > 6.99
                    ? "text-emerald-300"
                    : "text-rose-300";

            // 오버레이 - 개봉일
            const releaseDay = document.createElement("h3");
            releaseDay.textContent = `개봉일: ${movie.release_date}`;
            releaseDay.className = "text-sm text-zinc-300";

            // container
            container.appendChild(card);

            // overlay
            overlay.appendChild(title);
            overlay.appendChild(rating);
            overlay.appendChild(releaseDay);

            // card
            card.appendChild(img);
            card.appendChild(overlay);
        });
    } catch (error) {
        console.warn("서버 통신중 에러가 발생했습니다.", error);
    } finally {
        isLoading = false;
    }
};

getPopularMovies();
