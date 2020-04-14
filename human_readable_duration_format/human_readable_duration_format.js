function formatDuration(seconds) {
  let hrs = Math.floor(seconds / 3600);
  let mts = Math.floor((seconds % 3600) / 60);
  let scs = Math.floor((seconds % 3600) % 60);

  let sh = hrs > 0 ? hrs + (hrs == 1 ? " hour" : " hours") : "";
  let sm = mts > 0 ? mts + (mts == 1 ? " minute" : " minutes") : "";
  let sc = scs > 0 ? scs + (scs == 1 ? " second" : " seconds") : "";

  return !sh
    ? !sm
      ? sc
      : !sc
      ? sm
      : sm + " and " + sc
    : !sm
    ? !sc
      ? sh
      : sh + " and " + sc
    : !sc
    ? sh
    : sh + ", " + sm + " and " + sc;
}
