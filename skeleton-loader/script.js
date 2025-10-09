const header = document.getElementById("card-header")
const title = document.getElementById("card-title")
const description = document.getElementById("card-description")
const img = document.getElementById("card-img")
const authorname = document.getElementById("author-name")
const date = document.getElementById("date")
const today = new Date()
const monthNames = [ "Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const animated_bgs = document.querySelectorAll(".ani_bg")
const animated_bgtext = document.querySelectorAll(".ani_bg_text")

const loadData = () =>{
  header.innerHTML = '<img class="card-image" src="https://www.therandomvibez.com/wp-content/uploads/2022/08/120-Looking-Back-Quotes-To-Inspire-You-To-Move-Forward.jpg" alt="Landscape">';

  title.innerHTML = 'Lorem ipsum dolor sit amet';
  description.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolore reprehenderit.';
  img.innerHTML = '<img class="author-image" src="https://i.pinimg.com/564x/26/44/4f/26444f66c8cfe2798e892a669e4df8cf.jpg" alt="Author">'
  authorname.innerHTML = 'Vipin Kushwaha';
  date.innerHTML = `${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`; 
  animated_bgs.forEach((bk)=> bk.classList.remove("ani_bg"));
  animated_bgtext.forEach((bkt)=> bkt.classList.remove("ani_bg_text"));
}

setTimeout(loadData,2500);