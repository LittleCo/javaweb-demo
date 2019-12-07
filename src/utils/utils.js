function formatDate(time = new Date()) {
  let date = new Date(time);

  let year = date.getFullYear();

  let month = date.getMonth() + 1;

  let day = date.getDate();

  let hour = date.getHours();

  let min = date.getMinutes();

  let sec = date.getSeconds();

  month = ("" + month).length === 1 ? "0" + month : month;
  day = ("" + day).length === 1 ? "0" + day : day;
  min = ("" + min).length === 1 ? "0" + min : min;
  sec = ("" + sec).length === 1 ? "0" + sec : sec;

  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}

export { formatDate }