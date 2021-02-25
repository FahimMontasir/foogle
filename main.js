const inputVal = document.getElementById("inputVal").value;
document.getElementById("btn-search").addEventListener('click', () => {
  document.getElementById("search-result").innerHTML = "";
  fetch(`http://api.serpstack.com/search?access_key=35e49c041f2671e44a3dcc5bdef81e2b&query=${inputVal}`)
    .then(res => res.json())
    .then(data => searchRes(data))
})
const searchRes = (data) => {
  const result = document.getElementById("search-result");
  const resArr = data.organic_results;
  resArr.forEach(singleRes => {
    const div = document.createElement('div');
    div.className = "m-3"
    div.innerHTML = `<div class="card">
    <h5 class="card-header">${singleRes.domain}</h5>
    <div class="card-body">
      <h5 class="card-title">${singleRes.title}</h5>
      <p class="card-text">${singleRes.snippet}</p>
      <a href="${singleRes.url}" class="btn btn-info">more...</a>
    </div>
  </div>`
    result.appendChild(div)
  });



}