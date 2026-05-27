import { transImage } from "../utils/utils.js";

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

        const posterUrl = transImage(response.data.results[1].poster_path);
        console.log(posterUrl);
    } catch (error) {
        console.warn("서버 통신중 에러가 발생했습니다.", error);
    } finally {
        isLoading = false;
    }
};

getPopularMovies();
