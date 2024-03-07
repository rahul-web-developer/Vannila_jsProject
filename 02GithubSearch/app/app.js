
const url = 'https://api.github.com/users';


const fetchprofile = async()=>{


const search = document.getElementById("searchbtn");

const showdata = document.getElementById("showdata")




search.addEventListener("click",async()=>{
  const entervalue = document.getElementById("searchuser");

  showdata.innerHTML =""
showdata.style.display = "flex";

  try {
    let res = await fetch(`${url}/${entervalue.value}`)


    let result = await res.json()

    console.log(result)


    showdata.innerHTML = `<div class="top-section">

        <div class="left">
          <div class="avatar">
            <img src="${result.avatar_url}" alt="avatar">
          </div>
      
          <div class="self">
      
            <h1>${result.name}</h1>
            <h2>${result.login}</h2>
          </div>
      
        </div>
      <!-- left end here -->
      <a href="${result.html_url} target="_blank"><button class="btnprimary" id="checkp">check profile</button></a>
      
      
      </div>
      
      <div class="about">
      
        <h2>About</h2>
        <p>${result.bio}</p>
      
      </div>
      
      <div class="status">
        
      <div class="status-item">
      
        <h3>Repo</h3>
      
      <p>${result.public_repos}</p>
      
      </div>
      <div class="status-item">
      
        <h3>followers</h3>
      
      <p>${result.followers}</p>
      
      </div>
      <div class="status-item">
      
        <h3>follower</h3>
      
      <p>${result.following}</p>
      
      </div>
      </div>
  `;







    
  } catch (error) {
    console.log(error)
  }

  entervalue.value =""

})




 


}
fetchprofile()