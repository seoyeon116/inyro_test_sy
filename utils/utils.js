// 이미지를 url로 변환해주는 함수
// 결과 예시: https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
export const transImage = (posterPath) => {
    const IMG_BASE = "https://image.tmdb.org/t/p";

    const posterUrl = `${IMG_BASE}/w500${posterPath}`;
    return posterUrl;
};
