const fetcher = (...args) =>  fetch(...args).then((res) => res.json());
export default fetcher;

// SWR はデータを取得するためにこの fetcher 関数を使います。