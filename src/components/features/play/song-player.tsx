function SongPlayer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-sm font-light text-(--text-light)">NOW PLAYING</h2>
        <h1 className="text-3xl font-semibold text-(--text)">
          ?????? — ??????
        </h1>
        <p className="text-xs font-light text-(--text-light)">
          12s snippet · from Spotify
        </p>
      </div>
    </div>
  );
}
export default SongPlayer;
