export default function () {

  async function dispMsg() {
    const a = document.getElementById("apply").offsetTop
    scrollTo({
      top: a,
      behavior: 'smooth'
    });
  }

  return {
    dispMsg
  };
}