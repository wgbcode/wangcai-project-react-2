let id = parseInt(window.localStorage.getItem("maxId") || "0");
console.log("id妈妈化");
const createId = () => {
  id += 1;
  window.localStorage.setItem("maxId", id.toString());
  return id;
};

export default createId;
